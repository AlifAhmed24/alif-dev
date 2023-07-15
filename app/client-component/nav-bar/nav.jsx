"use client";

import {useState, useEffect, useRef} from 'react'
import Link from "next/link";
import "./nav.css";
import MenuIcon from '@mui/icons-material/Menu';
import SocialIcon from "../social-icons/social-icon";



function Navbar() {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen)
  const menuRef = useRef();
  const sidebarRef = useRef();


  const menuClick = () => {
    if(!isOpen){
      setOpen(true);
    }else{
      setOpen(false);
    }
  }


  return (
    <nav className="nav" id='home'>
      <div className="container">
      <div className="logo">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-menu">
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Project</Link>
          <Link href="#reviews">Reviews</Link>
      </div>
      <div className="menu-button">
        <span className="contact-button">Contact</span>
        <span className="menu-icon-wrapper" onClick={menuClick} ref={menuRef}>
         <MenuIcon className="menu-icon"/>
        </span>
      </div>   
     <div className={`side-menu ${isOpen ? 'menuOpen' : 'menuClose'}`} ref={sidebarRef} >
           <div className='side-menu-list'>
          <Link href="#home">Home</Link>
          <Link href="#services">Services</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Project</Link>
          <Link href="#reviews">Reviews</Link>
          <span></span>
          <Link href="/">Contact</Link>
           </div>
           <div className="side-menu-social">
            <Link href='/'><SocialIcon classId='social' name='stack-overflow' /></Link>
            <Link href='/'><SocialIcon classId='social' name='facebook' /></Link>
            <Link href='/'><SocialIcon classId='social' name='medium' /></Link>
            <Link href='/'><SocialIcon classId='social' name='linkedin' /></Link>
            <Link href='/'><SocialIcon classId='social' name='twitter' /></Link>
            <Link href='/'><SocialIcon classId='social' name='github' /></Link>
           </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
