import React from "react";
import { icons } from "react-icons";
import "../assets/css/Sidebar.css";
import Logo from "../assets/img/logo.png";
import LogoMini from "../assets/img/logo1.png";
import { BsCalendar4Week } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { AiOutlineUsergroupAdd, AiFillEuroCircle } from "react-icons/ai";
import { MdAddLink, MdMediation, MdOutlinePrivacyTip } from "react-icons/md";
import { BiCookie } from 'react-icons/bi'

function Sidebar() {
  return (
    <div className="sidebarContent">
      <div className="sidebar">
        <div className="logo">
          <div className="logoInt">
            <img src={Logo} alt="logo Othr" />
          </div>
          <span> community </span>
          <div className="logoMini">
            <img src={LogoMini} alt="logo Othr" />
          </div>
        </div>

        <nav>
          <ul className="ul-item">
            <li>
              <GrGroup className="icon" />
              <div className="navLink">Membres</div>
            </li>
            <li>
              <BsCalendar4Week className="icon" />
              <div className="navLink">Events</div>
            </li>
            <li>
              <AiFillEuroCircle className="icon" />
              <div className="navLink">Mon CA</div>
            </li>
            <li>
              <MdAddLink className="icon" />
              <div className="navLink">Inviter</div>
            </li>
            {/* <li>
              <GrGroup className="icon" />
              <div className='navLink'>évènements</div>
            </li> */}
            <li>
              <AiOutlineUsergroupAdd className="icon" />
              <div className="navLink">Ajout réseau</div>
            </li>
            <li>
              <MdMediation className="icon" />
              <div className="navLink">Média</div>
            </li>
          </ul>
        </nav>

        {/* <div id="navLinks">
          <div className="membres navLinks">
            <div className="icon-1"></div>
            <span>Membres</span>
          </div>
          <div className="event navLinks">
            <BsCalendar4Week className='icon' />
            <span>Events</span>
          </div>
          <div className="ca navLinks">
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
            <span>
              {" "}
              <i className="bi bi-person"></i> Profil
            </span>
          </div>

        </div> */}
        <div className="separator-sidebar"></div>
        <ul className="mentions-legales">
          <li>
            <BiCookie className="icon" />
            <div className="navLink">Cookies</div>
          </li>
          <li>
            <MdOutlinePrivacyTip className="icon" />
            <div className="navLink">Privacy</div>
          </li>
        </ul>
      </div>
      <div className="separatorContent"></div>
    </div>
  );
}

export default Sidebar;
