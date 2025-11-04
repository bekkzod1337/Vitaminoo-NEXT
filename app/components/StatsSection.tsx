'use client';
import React from 'react';
import { FiDollarSign, FiPackage, FiUsers, FiTrendingUp, FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

interface StatsSectionProps {
  showStats: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ showStats }) => {
  const stats = [
    { 
      icon: <FiDollarSign className="w-[44px] h-[44px] p-3 bg-[#9333EA] text-white rounded-full" />, 
      label: 'Total Sales', 
      value: "400k",
      growth: "+150k",
      percentage: "12%"
    },
    { 
      icon: <FiPackage className="w-[44px] h-[44px] p-3 bg-[#40C4AA] text-white rounded-full" />, 
      label: 'Total Products', 
      value: "1,750",
      unit: "items",
      growth: "+175",
      percentage: "16%"
    },
    { 
      icon: <FiUsers className="w-[44px] h-[44px] p-3 bg-[#FFBE4C] text-white rounded-full" />, 
      label: 'Total Customers', 
      value: "350",
      unit: "persons",
      growth: "+7",
      percentage: "0.75%",
      isNegative: true
    },
    { 
      icon: <FiTrendingUp className="w-[44px] h-[44px] p-3 bg-[#33CFFF] text-white rounded-full" />, 
      label: 'Net Profit', 
      value: "245,899,900",
      growth: "+12M",
      percentage: "12%"
    },
  ];

  const maskValue = (value: string | number) => {
    return '*'.repeat(String(value).replace(/[,\s]/g, '').length);
  };

  return (
    <section className="flex justify-between items-center mt-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="w-[267px] h-[214px] bg-white border-[1px] border-gray-200 rounded-2xl p-6"
        >
          <div className="flex items-center gap-1 mb-3">
            {item.icon}
            <p className="text-[16px] font-bold text-gray-600">{item.label}</p>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <h2 className="text-[36px] font-semibold text-[#111]">
              {showStats ? item.value : maskValue(item.value)}
            </h2>
            {item.unit && (
              <span className="text-[24px] text-gray-500">{item.unit}</span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full h-px bg-[#DFE1E7]" />
            <div className="flex justify-between items-center">
              <div className={`px-3 py-1 rounded-full flex items-center gap-2 ${
                item.isNegative 
                  ? '' 
                  : ''
              }`}>
                <span className={`font-medium text-base ${
                  item.isNegative ? 'text-[#DC2828]' : 'text-[#178D17]'
                }`}>{item.growth}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-medium text-base ${
                  item.isNegative ? 'text-[#DC2828]' : 'text-[#178D17]'
                }`}>{item.percentage}</span>
                {item.isNegative 
                  ? <FiArrowDownRight className="w-6 h-6 text-[#DC2828]" />
                  : <FiArrowUpRight className="w-6 h-6 text-[#178D17]" />
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
