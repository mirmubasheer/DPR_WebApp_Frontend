import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { backgroundImage1,  } from '../../assets'; 

// Define types for the function parameters
type IncrementFunction = (value: number, setValue: React.Dispatch<React.SetStateAction<number>>, target: number) => void;

const Counter: React.FC = () => {
  // Define target values for each counter
  const targetVisits = 5000;
  const targetSites = 100;
  const targetProjects = 300;

  // Define state variables for each counter
  const [visits, setVisits] = useState(0);
  const [sites, setSites] = useState(0);
  const [projects, setProjects] = useState(0);

  // Function to handle counter increment with type annotations
  const incrementCounter: IncrementFunction = (value, setValue, target) => {
    if (value < target) {
      const increment = Math.ceil(target / 100); // Speed of increment
      setValue((prev: number) => Math.min(prev + increment, target));
    }
  };

  // Effect hook for each counter
  useEffect(() => {
    const interval = setInterval(() => incrementCounter(visits, setVisits, targetVisits), 100);
    return () => clearInterval(interval);
  }, [visits]);

  useEffect(() => {
    const interval = setInterval(() => incrementCounter(sites, setSites, targetSites), 50);
    return () => clearInterval(interval);
  }, [sites]);

  useEffect(() => {
    const interval = setInterval(() => incrementCounter(projects, setProjects, targetProjects), 50);
    return () => clearInterval(interval);
  }, [projects]);

  return (
    <Box
      sx={{
        height: 'auto',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        color: '#fff',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', 
          zIndex: 0, // Make sure the overlay is behind the content
        },
        py: 4
        
      }}
      mt={8}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 4 }}>
          <Box textAlign="center">
            <Typography variant="h4" sx={{color: '#ffffff',fontWeight:'700'}}>{projects}+</Typography>
            <Typography variant="body1" color='white'>No. of Projects</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{color: '#ffffff',fontWeight:'700'}}>{visits}+</Typography>
            <Typography variant="body1" color='white'>No. of Visits</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h4" sx={{color: '#ffffff',fontWeight:'700'}}>{sites}+</Typography>
            <Typography variant="body1" color='white'>No. of Sales</Typography>
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
