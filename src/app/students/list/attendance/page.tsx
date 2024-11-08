'use client';

import { useEffect, useState } from 'react';
import { FiMapPin, FiEdit3 } from 'react-icons/fi';

const AttendancePage = () => {
  const [attendanceCode, setAttendanceCode] = useState('');
  const [location, setLocation] = useState<string | null>(null);

  // Fetch location data
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`);
        },
        () => {
          alert('Location access is needed to mark attendance.');
        }
      );
    }
  }, []);

  const handleCodeSubmit = () => {
    alert(`Attendance marked with code: ${attendanceCode}`);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FiEdit3 className="text-yellow-500" />
          Mark Attendance
        </h1>
        
        <div className="mb-4 p-4 border rounded-lg border-yellow-200 bg-yellow-50 flex items-center gap-2">
          <FiMapPin className="text-yellow-600" />
          <span className="text-gray-700">{location || 'Fetching location...'}</span>
        </div>
        
        <input
          type="text"
          placeholder="Enter the attendance code..."
          value={attendanceCode}
          onChange={(e) => setAttendanceCode(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
        />
        
        <button
          onClick={handleCodeSubmit}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold p-3 rounded-lg transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
