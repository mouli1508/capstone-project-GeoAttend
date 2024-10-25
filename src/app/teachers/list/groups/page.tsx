'use client';

import React, { useState } from 'react';
import GroupList from '@/components/GroupList';
import GroupChatWindow from '@/components/GroupChatWindow';

const GroupsPage = () => {
  const [activeGroup, setActiveGroup] = useState(null);

  // Function to set the active group when a user selects one
  const handleGroupSelect = (group: any) => {
    setActiveGroup(group);
  };

  return (
    <div className="p-2 sm:p-4 flex gap-4 h-screen">
      {/* Left Section: Group List */}
      <div
        className={`w-full lg:w-1/3 flex flex-col border-r border-gray-300 ${
          activeGroup ? 'hidden lg:flex' : 'flex'
        }`}
      >
        <GroupList onSelectGroup={handleGroupSelect} />
      </div>

      {/* Right Section: Group Chat Window */}
      <div
        className={`w-full lg:w-2/3 flex flex-col ${
          activeGroup ? 'flex' : 'hidden lg:flex'
        }`}
      >
        {activeGroup ? (
          <GroupChatWindow group={activeGroup} />
        ) : (
          <div className="flex flex-1 justify-center items-center text-gray-500">
            Select a group to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupsPage;
