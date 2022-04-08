import React from 'react'
import '../assets/css/Sidebar.css'
import Logo from '../assets/img/logo.png'

function Sidebar() {
  return (
    <div className='sidebarContent'>
            <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="logo Othr" />

          <span> community </span>
        </div>
        <div id="pages">
          <div className="membres pages">
            <div className="icon-1"></div>
            <span>Membres</span>
          </div>
          <div className="event pages">
            <i className="bi bi-calendar-week"></i>
            <span>Events</span>
          </div>
          <div className="ca pages">
            <div className="icon">
              <i className="bi bi-currency-euro"></i>
            </div>
            <span>Mon CA</span>
          </div>
          <div className="block-onglet">
            <div className="onglet first">Inviter</div>
            <div className="onglet">évènements</div>
            <div className="onglet">Ajout réseau</div>
            <div className="onglet">Média</div>
          </div>

          <div className="profil-2">
            
            <span> <i className="bi bi-person"></i> Profil</span>
          </div>
          <div className="separator-sidebar"></div>
          <div className="mentions-legales">
            <span>Cookies</span>
          <span>Confidentialité</span>
          </div>
          
        </div>
      </div>
      <div className='separatorContent'></div>

    </div>
  )
}

export default Sidebar