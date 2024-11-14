import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const DateSelector = () => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <FiCalendar className="text-xl" />
      <span className="text-lg font-medium">23 Sept 2024</span>
    </div>
  );
};

export default DateSelector;
