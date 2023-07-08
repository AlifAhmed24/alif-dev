'use client'

import React, { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import "./skill.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./animated-progress/animated-progress";
import VisibilitySensor from "react-visibility-sensor";

function Skill({percentages, logo, name, animate, index, getter}) {
  const percentage = percentages || 0;
  const [inViewport, setInViewport] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const skillRef = useRef(null);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setInViewport(true);
        setHasAnimated(true); 
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);

      }
    };
  }, []);

  useEffect(() => {
    if (inViewport) {
      let startValue = 0;
      const endValue = percentage;
      const duration = 500;
      let startTime = null;

      const animateProgress = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = easeQuadInOut(Math.min(progress / duration, 1));
        setCurrentPercentage(startValue + Math.floor(percentage * (endValue - startValue)));
        if (progress < duration) {
          requestAnimationFrame(animateProgress);
        }
      };

      requestAnimationFrame(animateProgress);
    } else {
      setCurrentPercentage(0);
    }

    
  }, [inViewport]);

  useEffect(() => {
    if (typeof getter === "function") {
      getter(inViewport);
    }
  }, [inViewport, getter]);
  

  return (
    <div className={`skill ${
      inViewport ? "programmingSkillAnimate" : ""
    }`} ref={skillRef}>
      <span className="skill-percentage">{currentPercentage}%</span>
      <div className="skill-body">
        <div className="skill-bar">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={percentage}
            duration={0.2}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={inViewport ? value : 0}
                  styles={{
                    root: {},
                    path: {
                      stroke: `rgba(255, 255, 255, ${percentage / 100})`,
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease 0.5s",
                    },
                    trail: {
                      stroke: "#BBDEFC",
                    },
                    text: {
                      fill: "#fff",
                      fontSize: "16px",
                    },
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                  strokeWidth="19"
                >
                  <div className="skill-logo">
                    <div className="logo-holder">
                    <Image 
                      src={logo || 'https://e7.pngegg.com/pngimages/225/716/png-clipart-computer-icons-computer-programming-logo-bing-search-engine-people-angle-text-thumbnail.png'} width={300} height={300}
                      alt="</>"
                    />
                    </div>
                  </div>
                </CircularProgressbarWithChildren>
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
      <span className="skillName">{name}</span>
    </div>
  );
}

export default Skill;
