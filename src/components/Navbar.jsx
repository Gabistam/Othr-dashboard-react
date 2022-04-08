import React from 'react'
import AvatarImage from '../assets/img/profile-1.jpg'
import '../assets/css/Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='profil'>
            <div className='pseudo'>Bonjour Patrick !</div>
            <img src={AvatarImage}/>
          </div>
    </div>
  )
}

export default Navbar