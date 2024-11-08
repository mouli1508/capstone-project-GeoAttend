// components/AttendanceSummary.tsx
import { useState } from 'react';

const AttendanceSummary = ({ attendancePercentage }: { attendancePercentage: number }) => (
  <div className="mt-4 p-4 border rounded">
    <h3 className="text-lg font-medium">Attendance</h3>
    <p className="text-2xl font-bold text-yellow-600">{attendancePercentage}%</p>
  </div>
);

export default AttendanceSummary;
