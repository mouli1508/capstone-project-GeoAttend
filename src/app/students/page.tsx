'use client';  // Add this line at the very top to make this a Client Component

import React, { useState } from 'react';
import EventCalendar from "@/components/EventCalendar";
import UserCard from "@/components/UserCard";
import FancyButton from "@/components/FancyButton";  // Import the button component
import JoinClassModal from "@/components/JoinClassModal";  // Import the modal component

const StudentsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* JOIN NEW CLASS BUTTON */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Classes</h2>
          <FancyButton label="+ Join New Class" onClick={openModal} />
        </div>

        {/* USER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <UserCard type="Capstone Project" courseNumber="CS101" />
          <UserCard type="Human Robot Interaction" courseNumber="DM202" />
          <UserCard type="Advance Artificial Intelligence" courseNumber="PM303" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>

      {/* Join Class Modal */}
      <JoinClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default StudentsPage;
