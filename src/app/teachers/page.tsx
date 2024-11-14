'use client';

import React, { useState } from 'react';
import UserCard from "@/components/UserCard";
import FancyButton from "@/components/FancyButton";  // Import the button component
import CreateClassModal from "@/components/CreateClassModal";  // Import the CreateClassModal
import Link from 'next/link';

const TeachersPage = () => {
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
    <div className="p-4">
      {/* Header with Create New Class Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Classes</h2>
        <FancyButton label="+ Create New Class" onClick={openModal} />
      </div>

      {/* USER CARDS: Full-width grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/teachers/list/attendance">
          <div className="cursor-pointer">
            <UserCard type="Capstone Project" courseNumber="CS101" />
          </div>
        </Link>
        <Link href="/teachers/list/attendance">
          <div className="cursor-pointer">
            <UserCard type="Data Mining Techniques" courseNumber="DM202" />
          </div>
        </Link>
        <Link href="/teachers/list/attendance">
          <div className="cursor-pointer">
            <UserCard type="Probabilistic Data Management" courseNumber="PM303" />
          </div>
        </Link>
      </div>

      {/* MIDDLE CHARTS: Full-width responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* COUNT CHART */}
        <div className="h-[450px]">
          {/* <CountChart /> */}
        </div>
        {/* ATTENDANCE CHART */}
        <div className="h-[450px] lg:col-span-2">
          {/* <AttendanceChart /> */}
        </div>
      </div>

      {/* BOTTOM CHART: Full-width */}
      <div className="w-full h-[500px] mt-8">
        {/* <FinanceChart /> */}
      </div>

      {/* Create Class Modal */}
      <CreateClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TeachersPage;
