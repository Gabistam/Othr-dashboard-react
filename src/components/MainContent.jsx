import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import '../assets/css/MainContent.css'

function MainContent() {
  return (
    <div className='mainContent'>
        <Navbar/>
        <Dashboard/>

    </div>
  )
}

export default MainContent