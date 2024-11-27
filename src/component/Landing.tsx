import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import gsap from 'gsap';
import './Landing.css';

const Landing: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const linesRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        navigate('/selector');
      },
    });

    // Ripple Effect on Button
    tl.to(buttonRef.current, {
      duration: 0.6,
      scale: 1.1,
      ease: 'power3.out',
    })
    .to(buttonRef.current, {
      duration: 0.6,
      scale: 1,
      ease: 'power3.out',
      onStart: () => {
        // Create ripple effect
        gsap.to('.ripple', {
          duration: 0.6,
          scale: 1,
          opacity: 0,
          ease: 'power3.out',
          stagger: 0.1,
        });
      },
    });

    // Advanced Line Animation
    tl.to(linesRef.current, {
      duration: 1.5,
      scaleX: 0,
      scaleY: 0,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.05,
      transformOrigin: 'center',
    })
    .to('.background-effect', {
      duration: 1.5,
      opacity: 0.5,
      ease: 'power2.inOut',
    }, '<');
  };

  return (
    <div className="landing-container">
      <video
        src="/video/WEBSITE.mp4"
        autoPlay
        loop
        muted
        className="video-background"
      />
      <Box className="button-container">
        <Button
          variant="contained"
          color="primary"
          className="animated-button"
          ref={buttonRef}
          onClick={handleButtonClick}
        >
          Discover More
        </Button>
        <div className="ripple"></div>
      </Box>
      <div className="lines-container">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className={`line line-${index}`}
            ref={(el) => (linesRef.current[index] = el!)}
          ></div>
        ))}
      </div>
      <div className="background-effect"></div>
    </div>
  );
};

export default Landing;
