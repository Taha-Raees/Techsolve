import { NextRequest, NextResponse } from 'next/server';
import { systemPrompt, initialGreeting, contactPrompt, formatProjectResponse, getAllProjectSlugs, techsolveKnowledge } from '@/lib/knowledge-base';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
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

    const allMessages = [systemMessage, ...messages];

    // Call OpenRouter API
    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'https://techsolve.vercel.app',
        'X-Title': 'TechSolve Assistant'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat-v3.1:free',
        messages: allMessages,
        max_tokens: 1000,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      console.error('OpenRouter API error:', errorData);
      return NextResponse.json({
        error: 'Failed to get response from AI',
        message: initialGreeting
      }, { status: 500 });
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return NextResponse.json({
        error: 'No response from AI',
        message: 'I apologize, but I couldn\'t generate a response right now. Please try asking your question again.'
      }, { status: 500 });
    }

    return NextResponse.json({
      message: aiMessage,
      type: 'ai_response'
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
