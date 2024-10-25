import React from 'react';

type Group = {
  id: number;
  name: string;
  lastMessage: string;
};

type GroupListProps = {
  onSelectGroup: (group: Group) => void;
};

const GroupList: React.FC<GroupListProps> = ({ onSelectGroup }) => {
  const groups: Group[] = [
    { id: 1, name: 'Group A', lastMessage: 'Hello everyone!' },
    { id: 2, name: 'Group B', lastMessage: 'Meeting tomorrow!' },
    { id: 3, name: 'Study Group', lastMessage: 'Let’s meet at 5 PM' },
  ];

  return (
    <div className="flex-1 overflow-y-auto">
      {groups.map((group) => (
        <div
          key={group.id}
          className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectGroup(group)}
        >
          <h3 className="font-semibold">{group.name}</h3>
          <p className="text-sm text-gray-500">{group.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
