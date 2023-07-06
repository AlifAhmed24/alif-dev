'use client'

import { useState, useRef, useEffect } from 'react';
import './service.css';

function Service({ logo, title, desc }) {
  const [inViewport, setInViewport] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred
  const serviceRef = useRef(null);

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
        setHasAnimated(true); // Set hasAnimated to true to prevent further animations
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, [hasAnimated]); // Add hasAnimated as a dependency

  return (
    <div
      className={`service ${inViewport ? "serviceAnimate" : ""}`}
      ref={serviceRef}
    >
      <div className='service-icon'>
        <img src={logo} alt='service' />
      </div>
      <div className='service-info'>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <button>select</button>
    </div>
  );
}

export default Service;
