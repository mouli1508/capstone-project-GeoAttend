'use client';

import React, { useState } from 'react';
import UserCard from "@/components/UserCard";
import FancyButton from "@/components/FancyButton";  // Import the button component
import JoinClassModal from "@/components/JoinClassModal";
import Link from 'next/link';

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

  // Define course data
  const courses = [
    { id: 'CS101', name: 'Capstone Project' },
    { id: 'DM202', name: 'Human Robot Interaction' },
    { id: 'PM303', name: 'Advance Artificial Intelligence' }
  ];

  return (
    <div className="p-4">
      {/* Header with Join New Class Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Classes</h2>
        <FancyButton label="+ Join New Class" onClick={openModal} />
      </div>

      {/* USER CARDS: Full-width grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href="/students/list/attendance">
            <div className="cursor-pointer">
              <UserCard type={course.name} courseNumber={course.id} />
            </div>
          </Link>
        ))}
      </div>

      {/* Join Class Modal */}
      <JoinClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default StudentsPage;