"use client";

import Image from "next/image";
import Link from "next/link";
import "./nav.css";
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
      <div className="logo">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-menu">
        <Link href="/">Home</Link>
        <Link href="/">Services</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Project</Link>
        <Link href="/">Reviews</Link>
      </div>
      <div className="menu-button">
        <span className="contact-button">Contact</span>
        <span className="menu-icon-wrapper" style={{display: "none"}}>
         <MenuIcon className="menu-icon"/>
        </span>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
