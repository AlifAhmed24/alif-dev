'use client'

import React,{useState, useEffect, useRef} from 'react'
import './portfolio.css'

function Portfolio({thumbnail, type, desc}) {
    const [inViewport, setInViewport] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const portfolioRef = useRef(null);

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
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <div className={`portfolio ${inViewport ? 'animate-portfolio' : ''}`} ref={portfolioRef}>
        <div className='thumbnail'>
            <img src={thumbnail} alt='' />
        </div>
        <div className='portfolio-info'>
            <span>{type}</span>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Portfolio