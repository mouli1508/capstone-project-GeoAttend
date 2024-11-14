// AttendanceForm.tsx
import React, { useState, useEffect } from 'react';
import { FiMapPin } from 'react-icons/fi';

const AttendanceForm: React.FC = () => {
  const [attendanceCode, setAttendanceCode] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // Fetch the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLocation(null); // Set to null if there's an error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttendanceCode(e.target.value);
  };

  const handleSubmit = () => {
    // Submit the attendance code and location
    console.log("Attendance Code:", attendanceCode);
    console.log("Location:", location);
    // You can add an API call here to submit this data to your backend
  };

  return (
    <div className="rounded-2xl shadow-xl p-6 bg-white">
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FiMapPin className="text-blue-500" />
        <span>Kent State University</span>
      </div>

      {/* Display location */}
      {location ? (
        <p className="text-sm text-gray-500 mb-4">
          Latitude: {location.latitude.toFixed(5)}, Longitude: {location.longitude.toFixed(5)}
        </p>
      ) : (
        <p className="text-sm text-gray-500 mb-4">Fetching location...</p>
      )}

      {/* Attendance Code Input */}
      <input
        type="text"
        placeholder="Enter the code..."
        value={attendanceCode}
        onChange={handleInputChange}
        className="w-full p-3 border rounded-md mb-4"
      />

      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition-colors"
      >
        Submit
      </button>
    </div>
  );
};

export default AttendanceForm;
