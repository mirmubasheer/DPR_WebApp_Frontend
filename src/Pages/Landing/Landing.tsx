import React, { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showButton, setShowButton] = useState<boolean>(true); // Track button visibility

  // Function to handle the animation and navigation
  const handleAnimationAndNavigate = () => {
    // First, hide the button
    setShowButton(false);

    // Start the animation after the button is hidden
    const tl = gsap.timeline();

    tl.to('.landing-triangle', {
      scaleX: 2,
      scaleY: 3,
      backgroundColor: '#30779d',
      borderLeft: '30vw solid transparent',
      borderRight: '30vw solid transparent',
      borderTop: '50vh solid transparent',
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.landing-triangle', {
          backgroundColor: '#30779d',
          duration: 0.4,
          ease: 'power2.out',
          onComplete: () => navigate('/selector') 
        });
      }
    });
  };

  // Handle swipe up gesture on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const startY = e.touches[0].clientY;
    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentY = moveEvent.touches[0].clientY;
      if (startY - currentY > 50) { // Swipe threshold
        handleAnimationAndNavigate();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    document.addEventListener('touchmove', handleTouchMove);
  };

  // Detect if the device is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation on component mount
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate triangle appearance
    tl.fromTo('.landing-triangle',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    )    
    .fromTo('.landing-button',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.5)' },
      "-=1"
    );

    if (isMobile && arrowsRef.current) {
      const arrowsTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      arrowsTimeline.to(arrowsRef.current, {
        scale: 1.2,
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: 0.2
      });
    }

    // Auto redirect after 24 seconds
    const timeout = setTimeout(() => {
      navigate('/selector');
    }, 24000);

    return () => clearTimeout(timeout);
  }, [navigate, isMobile]);

  return (
    <Box 
      ref={containerRef}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
    >
      {/* Background Video */}
      <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        <source src={"https://dprstorage.b-cdn.net/dprstorage/mainvideodpr.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Landing Content */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        zIndex: 2 // Ensure the content appears above the video
      }}>
        {/* Triangle */}
        <Box className="landing-triangle" sx={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: 0,
          height: 0,
          borderLeft: { xs: '60vw solid transparent', md: '27vw solid transparent' },
          borderRight: { xs: '60vw solid transparent', md: '27vw solid transparent' },
          borderTop: { xs: '25vh solid #ffffff25', md: '23vh solid #ffffff25' },
          opacity: 0.8,
          transform: 'translateX(-50%) rotate(180deg)',
          zIndex: 1
        }} />

        {/* Pulsing Arrows (for mobile swipe gesture) */}
        {isMobile && (
          <Box ref={arrowsRef} sx={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 3 // Ensure arrows are clickable on mobile
          }}>
            <div style={{ width: '70px', height: '70px', border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '1px', transform: 'rotate(225deg)', marginBottom: '-50px' }} />
            <div style={{ width: '60px', height: '60px', border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '1px', transform: 'rotate(225deg)', marginBottom: '-40px' }} />
            <div style={{ width: '50px', height: '50px', border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '1px', transform: 'rotate(225deg)' }} />
          </Box>
        )}

        {/* Button (for desktop click interaction) */}
        {!isMobile && showButton && (
          <Button
            variant="contained"
            color="primary"
            className="landing-button"
            onClick={handleAnimationAndNavigate}
            sx={{
              padding: '12px 35px',
              position: 'absolute',
              bottom: { xs: '75px', md: '55px' },
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',  // Prevents text from wrapping
              zIndex: 3,
            }}
          >
            Let's Dive In
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Landing;
