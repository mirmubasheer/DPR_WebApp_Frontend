import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSpring, animated, config as springConfig } from 'react-spring';

const SiteVisits: React.FC = () => {
  // Animation configuration for a smooth increment
  const { number } = useSpring({
    from: { number: 0 },
    number: 3500,
    delay: 300,
    config: springConfig.molasses, // Smoothest configuration available in react-spring
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 'calc(0% - 110px)',
        transform: 'rotate(-90deg)',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        padding: '10px 16px',
        borderRadius: '0 0 15px 15px',
        boxShadow: '4px 8px 15px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        height: 'fit-content',
        width: 'fit-content',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#fff',
          fontWeight: '600',
          marginRight: '10px',
        }}
      >
        Total Site Visits :
      </Typography>

      {/* Animated Counter */}
      <Typography
        variant="h6"
        sx={{
          color: '#ffeb3b',
          fontWeight: '600',
        }}
      >
        <animated.span>
          {number.to((n: number) => Math.floor(n))}
        </animated.span>
        +
      </Typography>
    </Box>
  );
};

export default SiteVisits;
