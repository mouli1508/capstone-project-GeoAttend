
import React from 'react';

const ChatWindow = ({ chat }: { chat: any }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold">{chat.name}</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-scroll">
        {/* This is where the chat messages will go */}
        <p className="text-gray-500">This is the beginning of your chat with {chat.name}.</p>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-gray-300">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 rounded-lg border border-gray-300"
        />
      </div>
    </div>
  );
};

export default ChatWindow;
