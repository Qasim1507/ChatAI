import React, { useState } from 'react';
import { Send, User, Bot } from 'lucide-react';

const Demo = () => {
  const [messages] = useState([
    {
      role: 'user',
      content: 'Hi',
      timestamp: '9:00 AM',
    },
    {
      role: 'bot',
      content: 'Hi! How can I help you today?',
      timestamp: '9:00 AM',
    },
    {
      role: 'user',
      content: 'Tell me something about India',
      timestamp: '9:01 AM',
    },
    {
      role: 'bot',
      content:
        'India, officially known as the Republic of India, is a vibrant and diverse country located in South Asia. It is the seventh-largest country by land area and the second-most populous, with over 1.4 billion people. Known for its rich history, culture, and heritage, India is a land of contrasts and unity in diversity.',
      timestamp: '9:01 AM',
    },
  ]);

  return (
    <div id="demo" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Demo
        </span>
      </div>

      <div className="mx-4 mt-8 border border-neutral-800 rounded-lg overflow-hidden">
        <div className="bg-neutral-850 p-4 border-b border-neutral-800">
          <h2 className="text-lg font-semibold text-white">ChatAI</h2>
        </div>

        <div className="h-[500px] overflow-y-auto bg-neutral-850 p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-2.5 ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.role === 'user' ? 'bg-blue-700' : 'bg-blue-700'
                }`}
              >
                {message.role === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`flex flex-col gap-1 ${
                  message.role === 'user' ? 'items-end' : ''
                }`}
              >
                <div
                  className={`rounded-lg p-3 max-w-lg ${
                    message.role === 'user'
                      ? 'bg-blue-700 text-white'
                      : 'bg-neutral-850 text-neutral-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <span className="text-xs text-neutral-850">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-neutral-850 border-t border-neutral-800">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-neutral-850 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-700 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
