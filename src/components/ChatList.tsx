
import React from 'react';

const chats = [
  { id: 1, name: 'John Doe', lastMessage: 'Hello!', time: '2:29 PM' },
  { id: 2, name: 'Jane Doe', lastMessage: 'How are you?', time: '1:52 PM' },
  { id: 3, name: 'Mike Geller', lastMessage: 'Great bro', time: '1:31 PM' },
  // Add more dummy chats as needed
];

const ChatList = ({ onSelectChat }: { onSelectChat: (chat: any) => void }) => {
  return (
    <div className="p-4 h-full overflow-y-scroll">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="w-full p-2 rounded-lg border border-gray-300"
        />
      </div>

      {/* Chat List */}
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelectChat(chat)}
          >
            <div>
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-sm text-gray-500">{chat.lastMessage}</p>
            </div>
            <div className="text-sm text-gray-500">{chat.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
