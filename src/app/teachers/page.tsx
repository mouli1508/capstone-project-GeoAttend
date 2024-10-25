'use client'

import React, { useState } from 'react';
import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import FancyButton from "@/components/FancyButton";  // Import the new button component
import CreateClassModal from "@/components/CreateClassModal";  // Import the CreateClassModal

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
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* CREATE NEW CLASS BUTTON */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Classes</h2>
          <FancyButton label="+ Create New Class" onClick={openModal} />
        </div>

        {/* USER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <UserCard type="Capstone Project" courseNumber="CS101" />
          <UserCard type="Data Mining Techniques" courseNumber="DM202" />
          <UserCard type="Probabilistic Data Management" courseNumber="PM303" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            {/* <CountChart /> */}
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            {/* <AttendanceChart /> */}
          </div>
        </div>

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          {/* <FinanceChart /> */}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>

      {/* Create Class Modal */}
      <CreateClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TeachersPage;
