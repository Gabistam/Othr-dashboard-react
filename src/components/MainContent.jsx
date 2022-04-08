import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import '../assets/css/MainContent.css'

function MainContent() {
  return (
    <div className='mainContent'>
        <div className='separatorContent'></div>
        <Navbar/>
        <Dashboard/>

    </div>
  )
}

export default MainContent