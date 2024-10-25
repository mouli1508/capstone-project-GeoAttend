import React from 'react';

type Group = {
  id: number;
  name: string;
};

type GroupChatWindowProps = {
  group: Group;
};

const GroupChatWindow: React.FC<GroupChatWindowProps> = ({ group }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-gray-300">
        <h2 className="font-semibold text-xl">{group.name}</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Display group messages here */}
        <p className="text-sm text-gray-500">
          This is the beginning of your chat with {group.name}.
        </p>
      </div>
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

export default GroupChatWindow;
