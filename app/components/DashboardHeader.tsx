'use client';
import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoAdd } from 'react-icons/io5';

interface DashboardHeaderProps {
  showStats: boolean;
  setShowStats: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ showStats, setShowStats }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header
        className="flex justify-between items-center
        w-[1100px] h-[56px] border-[#ECEFF3] rounded-full px-6 z-20"
      >
        <h1 className="font-[Manrope] text-[32px] font-medium text-[#111] leading-[45px]">
          Dashboard
        </h1>

        <div className="flex items-center gap-6">
          {/* Show / Hide toggle */}
          <div className="flex items-end gap-3">
            <span className="text-[18px] font-medium text-[#111]">
              {showStats ? 'Hide Statistics' : 'Show Statistics'}
            </span>
            <div
              className="w-[44px] h-[24px] bg-[#ECEFF3] border border-[#E3E3E3] rounded-[12px] 
              flex items-center p-[2px] cursor-pointer"
              onClick={() => setShowStats((prev) => !prev)}
            >
              <div
                className={`w-[20px] h-[20px] rounded-full bg-[#F8FAFB] shadow-[0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.2),0_1px_3px_rgba(16,24,40,0.1),0_1px_2px_rgba(16,24,40,0.06)]
                transform transition-all duration-300 ${
                  showStats ? 'translate-x-[20px]' : 'translate-x-0'
                }`}
              />
            </div>
          </div>

          <div className="w-[40px] h-[1px] bg-[#DFE1E7] rotate-90"></div>

          {/* Notification icon */}
          <div
            onClick={() => setShowNotifications(true)}
            className="relative flex justify-center items-center w-[56px] h-[56px] bg-white border border-[#ECEFF3] 
            shadow-[0_1px_3px_rgba(16,24,40,0.1),0_1px_2px_rgba(16,24,40,0.06)] rounded-full cursor-pointer hover:scale-105 transition-transform"
          >
            <IoMdNotificationsOutline size={24} color="#111" />
            <div className="absolute -top-[2px] right-[4px] w-[20px] h-[20px] bg-[#DF1C41] rounded-full flex items-center justify-center">
              <span className="text-[12px] text-white font-medium">7</span>
            </div>
          </div>

          <button
            className="flex items-center justify-center gap-3 w-[190px] h-[54px] 
            bg-gradient-to-b from-[#7DFC7D] to-[#378437] text-white text-[16px] font-medium 
            rounded-full shadow-[0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.2),inset_1px_1px_1px_2px_#C7FFC7]
            transition-transform active:scale-95"
          >
            <IoAdd size={18} color="#fff" />
            <span>Add new Order</span>
          </button>
        </div>
      </header>

      {showNotifications && (
        <div className="fixed inset-0 z-30 border-[#ECEFF3] flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] relative">
            <button
              onClick={() => setShowNotifications(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-[#111] mb-4">
              Notifications
            </h2>

            <ul className="space-y-3">
              <li className="bg-[#F6F8FA] p-3 rounded-lg text-[#111] text-sm">
                🔔 New order received from Bekzod
              </li>
              <li className="bg-[#F6F8FA] p-3 rounded-lg text-[#111] text-sm">
                ✅ Payment for order #245 confirmed
              </li>
              <li className="bg-[#F6F8FA] p-3 rounded-lg text-[#111] text-sm">
                📦 Your shipment has been delivered
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardHeader;
