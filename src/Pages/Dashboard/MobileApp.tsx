import React from 'react';
import { Box, Typography, Button,Container } from '@mui/material';
import { backgroundImage1, mobileapp } from '../../assets'; // Ensure the path is correct

const MobileApp: React.FC = () => {
  return (
   

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column layout on small screens
          alignItems: 'center',
          height: 'auto',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: `url(${backgroundImage1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(48, 119, 157, 0.4)', // Add the overlay color here
            zIndex: 0, // Make sure the overlay is behind the content
          },
        }}
      >
        {/* Left Side Text Content */}
        <Container sx={{display:'flex', flexDirection:{
          xs:'column',
          md:'row'
        }}}>

          <Box
            sx={{
              width: { xs: '100%', md: '80%' },
              py: { xs: 2, md: 12 }, // Reduced padding on mobile
              px: { xs: 2, md: 8 }, // Reduced padding on mobile
              zIndex: 1, // Content above the background image and overlay
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
            }}
          >
            <Box
              component="div"
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: { xs: '36px', md: '60px' }, // Smaller font on mobile
                fontWeight: '500',
                textTransform: 'uppercase',
                lineHeight: '1',
                background: 'transparent',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.65)',
                margin: { xs: '0 0 0.5em 0', md: '-0.67em 0 -0.48em 0' }, // Adjusted margins
                display: 'block',
                color: '#ffffff',
              }}
            >
              Discover Your Dream Home
            </Box>
            <Typography 
              variant="h4" 
              sx={{ color: 'white', mb: 2, fontWeight: 500, textAlign: { xs: 'center', md: 'left' } }} // Center text on mobile
            >
              Luxury Living, Just a Tap Away
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: 'white', mb: 4, textAlign: { xs: 'center', md: 'justify' }, opacity: 0.8 }}
            >
              Explore an exclusive collection of luxury homes across India, all at your fingertips. Whether you’re looking for a new home, a smart investment, or an exquisite retreat, our app brings the best properties directly to you with ease and convenience.
            </Typography>
            <Box
              sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }} // Center button on mobile
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '220px',
                  mt: 2,
                  color: '#fff',
                  backgroundColor: 'primary.main',
                  borderRadius: '10px 0 10px 10px',
                  clipPath: 'polygon(0 0, 93% 0, 100% 30%, 100% 100%, 0 100%)',
                  '&:hover': { backgroundColor: 'secondary.main' },
                }}
              >
                Download App
              </Button>
            </Box>
            <Typography 
              variant="h6" 
              sx={{ color: 'white', mt: 2, textAlign: { xs: 'center', md: 'left' }, opacity: 0.9 }}
            >
              Coming Soon!
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ color: 'white', mt: 1, textAlign: { xs: 'center', md: 'left' }, opacity: 0.8 }}
            >
              Your gateway to premium real estate is launching soon. Stay tuned for a seamless, digital home-buying experience like never before.
            </Typography>
          </Box>

          {/* Right Side Image */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' }, 
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' }, // Center image on mobile
              alignItems: 'center',
              p: { xs: 2, md: 4 },
              zIndex: 1,
            }}
          >
            <img
              src={mobileapp} // Mobile app screenshot
              alt="Mobile App Screenshot"
              style={{
                width: '70%', // Larger image on mobile
                height: 'auto',
                borderRadius: '10px',
                maxWidth: '400px',
              }}
            />
          </Box>
        </Container>
      </Box>
    
  );
};

export default MobileApp;
