'use client'

import React, {useEffect, useState} from "react";
import Link from "next/link";
import './footer.css'
import 'boxicons'

function Footer() {
  const [year, setYear] = useState();
  
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYear(year)
  }, []);

  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
        <div className="footerHeading">
          <div className="logo">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>Alif Ahmed</h1>
          <p>PROFESSIONAL FULL STACK WEB <br /> <span>DEVELOPER</span> AND <span>DESIGNER</span></p>
          <Link href="/">Hire me</Link>
        </div>
        <div className="footerNavigate section">
            <h2 className="naviagteHeader">Navigate</h2>
            <div className="navigateBody">
              <Link href="#home">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Project</Link>
              <Link href="#reviews">Reviews</Link>
            </div>
        </div>
        <div className="footerConnect section">
            <h2 className="connectHeader">Connect With Me</h2>
            <div className="connectBody">
                <Link href='/'>
                <box-icon className='linkedin' name='linkedin' type='logo'></box-icon>
                <span>Linkedin</span>
                </Link>
                <Link href='/'>
                <box-icon className='twitter' name='twitter' type='logo'></box-icon>
                <span>Twitter</span>
                </Link>
                <Link href='/'>
                <box-icon className='whatsapp' name='whatsapp' type='logo'></box-icon>
                <span>Whatsapp</span>
                </Link>
                <Link href='/'>
                <box-icon className='github' name='github' type='logo'></box-icon>
                <span>Github</span>
                </Link>
                <Link href='/'>
                <box-icon className='telegram' name='telegram' type='logo'></box-icon>
                <span>Telegram</span>
                </Link>
            </div>
        </div>      
        <div className="footerContact section">
            <h2 className="contactHeader">Contact</h2>
            <div className="contactBody">
                <Link  href="mailto:example@example.com">
                <box-icon className='gmail' name='gmail' type='logo'></box-icon>
                <span>Mail</span>
                </Link>
                <Link href='/'>
                <box-icon className='twitter' name='twitter' type='logo'></box-icon>
                <span>Twitter</span>
                </Link>
                <Link href='/'>
                <box-icon className='whatsapp' name='whatsapp' type='logo'></box-icon>
                <span>Whatsapp</span>
                </Link>
                <Link href='/'>
                <box-icon className='telegram' name='telegram' type='logo'></box-icon>
                <span>Telegram</span>
                </Link>
            </div>
        </div>  

        </div>
        <div className="copyrightWrapper">
          <span>&copy; {year} Alif. All rights reserved</span>
          <span>Designed and developed by Alif</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
