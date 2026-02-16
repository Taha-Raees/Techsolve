import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { systemPrompt, initialGreeting, contactPrompt, formatProjectResponse, getAllProjectSlugs, techsolveKnowledge } from '@/lib/knowledge-base';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL ,
    'X-Title': 'TechSolve Assistant'
  }
});

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  reasoning_details?: unknown;
}

export async function POST(request: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 });
    }

    // Check for project-specific queries and handle them specially
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'user') {
      const userInput = lastMessage.content.toLowerCase();

      // Check for project requests
      const projectSlugs = getAllProjectSlugs();
      for (const slug of projectSlugs) {
        if (userInput.includes(slug.split('-').join(' ')) || userInput.includes(slug)) {
          const projectResponse = formatProjectResponse(slug);
          if (projectResponse) {
            // Add contact prompt for project responses
            const fullResponse = projectResponse + contactPrompt;
            return NextResponse.json({
              message: fullResponse,
              type: 'project_detail'
            });
          }
        }
      }

      // Check for general project inquiries
      if (userInput.includes('projects') && (userInput.includes('show') || userInput.includes('what') || userInput.includes('tell'))) {
        const projects = projectSlugs.map(slug => {
          const project = techsolveKnowledge.projects[slug as keyof typeof techsolveKnowledge.projects];
          return `${project.title} (${project.industry})`;
        }).join('\n- ');
        return NextResponse.json({
          message: `Here are some of our recent projects:\n\n${projects}\n\nWhich one interests you most? I can tell you more about any of these, including their challenges, solutions, and results!`,
          type: 'projects_list'
        });
      }
    }

    // Prepare messages for OpenRouter API
    const systemMessage: Message = {
      role: 'system',
      content: systemPrompt
    };

    const allMessages: Message[] = [systemMessage, ...messages];

    // Call OpenRouter API using OpenAI SDK with reasoning enabled
    // Using type assertion to bypass TypeScript strict checking for OpenRouter-specific parameters
    const createCompletion = client.chat.completions.create.bind(client.chat.completions);
    const apiResponse = await (createCompletion as (params: {
      model: string;
      messages: Array<{ role: string; content: string; reasoning_details?: unknown }>;
      max_tokens: number;
      temperature: number;
      reasoning: { enabled: boolean };
    }) => Promise<{
      choices: Array<{
        message: {
          content: string | null;
          reasoning_details?: unknown;
        };
      }>;
    }>)({
      model: 'stepfun/step-3.5-flash:free',
      messages: allMessages.map(msg => ({
        role: msg.role,
        content: msg.content,
        ...(msg.reasoning_details ? { reasoning_details: msg.reasoning_details } : {})
      })),
      max_tokens: 1000,
      temperature: 0.7,
      reasoning: { enabled: true }
    });

    const responseMessage = apiResponse.choices?.[0]?.message;
    const aiMessage = responseMessage?.content;
    const reasoningDetails = responseMessage?.reasoning_details;

    if (!aiMessage) {
      return NextResponse.json({
        error: 'No response from AI',
        message: 'I apologize, but I couldn\'t generate a response right now. Please try asking your question again.'
      }, { status: 500 });
    }

    return NextResponse.json({
      message: aiMessage,
      type: 'ai_response',
      reasoning_details: reasoningDetails
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({
      error: 'Internal server error',
      message: 'I\'m sorry, something went wrong on my end. Please try again or contact our team directly.'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Chat endpoint is working!' });
}
