"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowDropDown } from "@mui/icons-material";
import {
  MdDashboard,
  MdPointOfSale,
  MdPeople,
  MdLocalShipping,
  MdInventory,
  MdAssessment,
  MdAttachMoney,
  MdSettings,
} from "react-icons/md";
import React from "react";

const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: <MdDashboard /> },
  { title: "POS", href: "/pos", icon: <MdPointOfSale /> },
  { title: "Customers", href: "/customers", icon: <MdPeople /> },
  { title: "Suppliers", href: "/suppliers", icon: <MdLocalShipping /> },
  { title: "Inventory", href: "/inventory", icon: <MdInventory /> },
  { title: "Report", href: "/report", icon: <MdAssessment /> },
  { title: "Expenses", href: "/expenses", icon: <MdAttachMoney /> },
  { title: "Settings", href: "/settings", icon: <MdSettings /> },
];


const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col justify-between bg-white border border-[#ECEFF3] shadow-sm rounded-3xl 
      absolute left-[20px] top-[20px] w-[280px] h-[984px] p-5"
    >
      <div className="flex flex-col gap-12 w-[248px] mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={248}
            height={49}
            className="rounded-full object-cover"
          />
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.title} href={item.href}>
                <button
                  className={`flex items-center justify-start gap-3 rounded-full text-[18px] font-medium font-[Manrope] px-6 py-[14px] h-[57px] w-[248px] transition-all ${
                    active
                      ? "bg-gradient-to-b from-[#7DFC7D] to-[#378437] text-white shadow-[0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.2),inset_1px_1px_1px_2px_#C7FFC7]"
                      : "bg-transparent text-[#111] hover:bg-[#f5f5f5]"
                  }`}
                >
                  <span
                    className={`text-[22px] ${
                      active ? "text-white" : "text-[#111]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom profile */}
      <div
        className="flex items-center justify-between mb-4 w-[248px] h-[56px] mx-auto p-[4px_12px_4px_4px] 
        border border-[#ECEFF3] shadow-sm rounded-full"
      >
        {/* Left side */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#003C00] rounded-full flex items-center justify-center relative">
            <div className="w-8 h-8 bg-[#44E644] rounded-full" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[18px] font-medium text-[#111] leading-[25px]">
              Yunusobod 12
            </span>
            <span className="text-[14px] text-[#6F6F6F] leading-[22px]">
              Main branch
            </span>
          </div>
        </div>

        <ArrowDropDown className="text-[#111]" />
      </div>
    </aside>
  );
};

export default Sidebar;
