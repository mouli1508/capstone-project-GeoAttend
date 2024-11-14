// AttendancePage.tsx
'use client';

import React from 'react';
import DateSelector from '@/components/DateSelector';
import SummaryCards from '@/components/SummaryCards';
import AttendanceForm from '@/components/AttendanceForm';
import AttendanceHistory from '@/components/AttendanceHistory';

const AttendancePage = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Attendance</h1>

      {/* Date Selector */}
      <DateSelector />

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6 justify-center my-8">
        <SummaryCards />
      </div>

      {/* Attendance Form */}
      <div className="max-w-md mx-auto mb-8">
        <AttendanceForm />
      </div>

      {/* Attendance History */}
      <AttendanceHistory />
    </div>
  );
};

export default AttendancePage;
