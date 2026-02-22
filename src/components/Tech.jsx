import React, { useState, useEffect } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';



const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {isMobile ? (
            <div className="w-full h-full flex justify-center items-center bg-tertiary rounded-full p-4 shadow-card hover:scale-105 transition-transform">
              <img src={technology.icon} alt={technology.name} className="w-[80%] h-[80%] object-contain" />
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech, "");