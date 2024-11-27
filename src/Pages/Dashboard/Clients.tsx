
import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import { ClientLogos } from '../../assets';

const logos = [
  ClientLogos.client1,
  ClientLogos.client2,
  ClientLogos.client3,
  ClientLogos.client4,
  ClientLogos.client5,
  ClientLogos.client6,
  ClientLogos.client6,
  ClientLogos.client6,
  ClientLogos.client6, 
  ClientLogos.client6,
];

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = logos.length;
  const autoSlideTime = 3000; // Time for automatic slide in milliseconds
  const logoRef = useRef<HTMLDivElement | null>(null);

  // Create an extended array for infinite scrolling
  const extendedLogos = [...logos, ...logos]; // Duplicate the logos for infinite scrolling

  // Automatic sliding effect every 3000 milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, autoSlideTime);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalItems]);

  // Update scroll position based on current index
  useEffect(() => {
    if (logoRef.current) {
      const itemWidth = logoRef.current.scrollWidth / totalItems;
      logoRef.current.scrollLeft = currentIndex * itemWidth; // Scroll to current index
    }
  }, [currentIndex, totalItems]);

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4, mt: { xs: 20, sm: 0 } }}> {/* Added margin-top for mobile */}
      <Container sx={{ height: 'auto' }}> {/* Adjusted height */}
        <Box sx={{ position: 'relative', textAlign: 'center', padding: '20px' }}>
          <h3>Trusted by the world’s best</h3>

          <Box
            ref={logoRef}
            sx={{
              overflow: 'hidden',
              width: '100%',
              maxWidth: '1200px', // Max width of the entire section
              margin: 'auto',
              display: 'flex',
              alignItems: 'center', // Center logos vertically
              justifyContent: 'flex-start', // Align logos to start
              scrollBehavior: 'smooth', // Enable smooth scrolling
            }}
          >
            <Box
              sx={{
                display: 'flex',
                transition: 'scroll-left 0.5s ease',
                width: `${extendedLogos.length * 120}px`, // Adjusted based on logo size
              }}
            >
              {extendedLogos.map((logo, idx) => (
                <Box
                  key={idx}
                  component="img"
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  sx={{
                    width: '120px', // Adjusted width of each logo
                    height: '60px', // Adjusted height of each logo
                    objectFit: 'contain', // Ensures logos maintain their aspect ratio
                    margin: '0 30px', // Increased gap of 30px between logos
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
