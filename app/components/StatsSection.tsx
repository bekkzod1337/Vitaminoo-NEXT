'use client';
import React from 'react';

interface StatsSectionProps {
  showStats: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ showStats }) => {
  const stats = [
    { label: 'Total Orders', value: 1240 },
    { label: 'Completed Orders', value: 980 },
    { label: 'Pending Orders', value: 260 },
  ];

  const maskValue = (num: number) => {
    const str = num.toString();
    return '*'.repeat(str.length); 
  };

  return (
    <section className="flex justify-between items-center px-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="w-[320px] h-[140px] bg-white rounded-2xl shadow-md flex flex-col justify-center items-center"
        >
          <h2 className="text-[36px] font-semibold text-[#111]">
            {showStats ? item.value : maskValue(item.value)}
          </h2>
          <p className="text-[16px] text-gray-600">{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
