// AttendanceHistory.tsx
import React from 'react';

const AttendanceHistory: React.FC = () => {
  const history = [
    { day: 'Sat', date: '08/24/2024', status: 'P', color: 'text-green-600' },
    { day: 'Sun', date: '08/25/2024', status: 'P', color: 'text-green-600' },
    { day: 'Mon', date: '08/26/2024', status: 'P', color: 'text-green-600' },
    { day: 'Tue', date: '08/27/2024', status: 'A', color: 'text-red-600' },
    { day: 'Wed', date: '08/28/2024', status: 'A', color: 'text-red-600' },
    { day: 'Thu', date: '08/29/2024', status: '-', color: 'text-gray-500' },
  ];

  return (
    <div className="rounded-2xl shadow-xl p-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Attendance History</h2>
      <div className="divide-y divide-gray-200">
        {history.map((record, index) => (
          <div key={index} className="flex justify-between items-center py-3">
            <div className="flex items-center gap-4">
              <span className="font-semibold">{record.day}</span>
              <span>{record.date}</span>
            </div>
            <span className={`font-bold ${record.color}`}>{record.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceHistory;
