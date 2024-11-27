import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import contactbanner from '../../assets/images/AboutUss.png'; 


const Banner:React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Box sx={{ background: 'white' }}>
  <Box
    sx={{
      position: 'relative', 
      width: '100%',
      height: '500px',
      marginTop: '10px',
      overflow: 'hidden',
    }}
  >
    
    <img src={contactbanner} alt="" style={{
        width: '100%', 
        height: isMobile ? '50%' : '550px', 
        objectFit: 'cover' 
      }}  />

    
    <Box
      sx={{
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: {
          xs:'50%',
          lg:'100%'
        },
        backgroundColor: 'rgba(48, 119, 157, 0.6)', 
        zIndex: 1, 
      }}
    />
  </Box>
</Box>

  )
}

export default Banner
