import React from 'react'
import '../assets/css/Dashboard.css'
import { ProgressObjectifYear } from '../datas/ProgressObjectifYear';
import { MembreDatas } from '../datas/MembreDatas';
import NbMembres from './NbMembres';
import ProgressObjectif from './ProgressObjectif';

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