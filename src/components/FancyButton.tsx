import React from 'react';

interface FancyButtonProps {
  label: string;
  onClick?: () => void;  // Optional click handler if needed
}

const FancyButton: React.FC<FancyButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-sm sm:text-base"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default FancyButton;
