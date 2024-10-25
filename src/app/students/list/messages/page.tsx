'use client';

import React, { useState } from 'react';
import ChatList from '@/components/ChatList';
import ChatWindow from '@/components/ChatWindow';

const MessagesPage = () => {
  const [activeChat, setActiveChat] = useState(null);

  // Function to set the active chat when a user selects one
  const handleChatSelect = (chat: any) => {
    setActiveChat(chat);
  };

  return (
    <div className="p-2 sm:p-4 flex gap-4 h-screen">
      {/* Left Section: Chat List */}
      <div
        className={`w-full lg:w-1/3 flex flex-col border-r border-gray-300 ${
          activeChat ? 'hidden lg:flex' : 'flex'
        }`}
      >
        <ChatList onSelectChat={handleChatSelect} />
      </div>

      {/* Right Section: Chat Window */}
      <div
        className={`w-full lg:w-2/3 flex flex-col ${
          activeChat ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {activeChat ? (
          <ChatWindow chat={activeChat} />
        ) : (
          <div className="flex flex-1 justify-center items-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
