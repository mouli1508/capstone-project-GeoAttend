// SummaryCards.tsx
import React from 'react';
import { FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface SummaryCardProps {
  icon: React.ComponentType;
  label: string;
  value: string | number;
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon: Icon, label, value, color }) => {
  return (
    <div className="w-full sm:w-60 md:w-64 lg:w-72 xl:w-80 rounded-2xl shadow-xl p-6 bg-gradient-to-r from-blue-100 to-purple-200 hover:from-purple-200 hover:to-blue-200 transform transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <span className={`text-sm bg-white px-3 py-1 rounded-full ${color}`}>
          {label}
        </span>
        <Icon />
      </div>
      <h1 className="text-3xl font-semibold my-4 text-gray-700">{value}</h1>
    </div>
  );
};

const SummaryCards: React.FC = () => {
  const cards = [
    { icon: FiUser, label: 'Total Classes', value: 3, color: 'text-green-600' },
    { icon: FiCheckCircle, label: 'Total Present', value: '59.17%', color: 'text-green-600' },
    { icon: FiXCircle, label: 'Total Absent', value: '40.83%', color: 'text-red-600' },
  ];

  return (
    <>
      {cards.map((card, index) => (
        <SummaryCard
          key={index}
          icon={card.icon}
          label={card.label}
          value={card.value}
          color={card.color}
        />
      ))}
    </>
  );
};

export default SummaryCards;
