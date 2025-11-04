'use client';
import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import StatsSection from '../components/StatsSection';
import ReportAnalytics from '../components/ReportAnalytics';

const Dashboard: React.FC = () => {
  const [showStats, setShowStats] = useState(true);

  return (
    <div className="relative">
      <DashboardHeader showStats={showStats} setShowStats={setShowStats} />
      <StatsSection showStats={showStats} />
      <ReportAnalytics showStats={showStats} />
    </div>
  );
};

export default Dashboard;
