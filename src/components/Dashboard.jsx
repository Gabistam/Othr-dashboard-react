import React from 'react'
import '../assets/css/Dashboard.css'
import NbMembres from './NbMembres';
import ProgressObjectif from './ProgressObjectif';
import "../assets/css/NbMembres.css";

const Dashboard = () => {
  return (
    <div className="dashboardContent">
      <NbMembres />
      <div class="separator-column"></div>
      <ProgressObjectif />
    </div>
  );
}

export default Dashboard