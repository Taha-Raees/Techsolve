'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { initialGreeting } from '@/lib/knowledge-base';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'project_detail' | 'projects_list' | 'ai_response';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (message: string) => {
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: message.trim(),
      timestamp: new Date()
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(({ id, timestamp, ...msg }) => msg)
        })
      });

      const data = await response.json();

      if (response.ok) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
          type: data.type
        };

        setMessages(prev => [...prev, assistantMessage]);
      } else {
        // Error response
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message || 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but something went wrong. Please contact our team directly if you have urgent questions.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const startNewChat = () => {
    setMessages([{
      id: 'greeting',
      role: 'assistant',
      content: initialGreeting,
      timestamp: new Date()
    }]);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && messages.length === 0) {
      startNewChat();
    }
  };

  const formatMessage = (content: string) => {
    return content.split('\n').map((line, index) => {
      // Handle bold text
      if (line.includes('**')) {
        return (
          <div key={index} className="mb-2">
            {line.split('**').map((part, i) =>
              i % 2 === 1 ?
                <strong key={i} className="font-semibold text-primary">{part}</strong> :
                part
            )}
          </div>
        );
      }

      // Handle bullet points
      if (line.startsWith('- ')) {
        return (
          <div key={index} className="mb-1 ml-4 flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{line.substring(2)}</span>
          </div>
        );
      }

      // Regular text
      return line ? (
        <div key={index} className="mb-1">{line}</div>
      ) : <br key={index} />;
    });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-primary text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">TechSolve Assistant</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages Area with Scroll */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full p-4">
              <div className="space-y-4 min-h-full">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      <div className="break-words">
                        {formatMessage(message.content)}
                      </div>
                      <div className={`text-xs mt-1 opacity-70 ${
                        message.role === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <Loader2 className="h-3 w-3 animate-spin" />
                        <span className="text-xs">Typing...</span>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about TechSolve..."
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button
                type="submit"
                size="sm"
                disabled={isLoading || !inputMessage.trim()}
                className="h-9 w-9 p-0"
              >
                {isLoading ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <Send className="h-3 w-3" />
                )}
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Powered by AI • Ask about our projects, services, or team
            </p>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 animate-pulse">
          {/* Call-to-action text overlay */}
          <div className="absolute -top-20 right-0 transform ">
            <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 whitespace-nowrap max-w-xs">
              <div className="text-sm font-medium">Hi, I am Tech Solve AI Bot</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Click to start chatting!</div>
            </div>
            {/* Arrow pointer */}
            <div className="absolute top-full right-6 transform border-8 border-transparent border-t-white dark:border-t-gray-800"></div>
          </div>

          <Button
            onClick={() => handleOpenChange(true)}
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 "
            size="icon"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </div>
      )}
    </>
  );
}
