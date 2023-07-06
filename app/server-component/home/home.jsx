"use server";

import React from 'react'
import Image from "next/image";
import "./home.css";
import Link from "next/link";

import SliderIcon from "../../../public/asset/slider-icon.svg";
import homeBg from "../../../public/asset/bg-design.svg";
import dot from "../../../public/asset/dot.svg";
import HeadingAnimation from '../../client-component/type-animation/heading-animation'
import SocialIcon from '../../client-component/social-icons/social-icon'



function Home() {
  return (
    <div className="home">
      <div className='hero-section'>
      <Image className="dot primary-dot" src={dot} alt='bg' width='100' height='100' quality={100}/>
      <Image className="dot secondary-dot" src={dot} alt='bg' width='100' height='100' quality={100}/>
      <Image className="homeBg" src={homeBg} alt='bg' width='' height='' quality={100}/>
      <div className="container">
        <div className="slider-icon">
          <Image src={SliderIcon}  alt='slider' width={1200} height={800} quality={100}/>
        </div>
        <div className="slider-info">
          <div className="description">
            <h1>
              Professional Full Stack Web{" "}
              <span>
                <HeadingAnimation />
              </span>
            </h1>
            <p>
              As a skilled Full Stack Web Developer with expertise in the MERN
              stack and diverse technologies, I deliver innovative solutions
              that exceed expectations. With a passion for exceptional web
              experiences, I bring a collaborative mindset, problem-solving
              skills, and a commitment to on-time project delivery. Let's create
              impactful digital solutions together.
            </p>
          </div>
          <div className="slider-buttons">
            <Link className="secondary-button" href="/">
              Hire Me
            </Link>
            <Link className="primary-button" href="/">
              Project
            </Link>
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
      <div className="social-icon">
        <Link href='/'><SocialIcon classId='social' name='stack-overflow' /></Link>
        <Link href='/'><SocialIcon classId='social' name='facebook' /></Link>
        <Link href='/'><SocialIcon classId='social' name='medium' /></Link>
        <Link href='/'><SocialIcon classId='social' name='linkedin' /></Link>
        <Link href='/'><SocialIcon classId='social' name='twitter' /></Link>
        <Link href='/'><SocialIcon classId='social' name='github' /></Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
