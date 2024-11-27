import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button, Card, CardContent, CardActions,
  Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Inputs/CustomInput';
import { AddLead } from '../../api/services';

const Selector: React.FC = () => {

  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(45deg, #073F8C 30%, #30779d 90%)');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.selector-background', {
      opacity: 1,
      scale: 1.5,
      duration: 0.75,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.selector-background', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            setBackgroundColor('#FFFFFF');
            setShowButtons(true);
          }
        });
      }
    });
  }, []);

  const handleButtonClick = (formType: string) => {
    localStorage.setItem("userType", formType);
    navigate("/projects"); // Navigate to the Projects page
  };

  const cardStyles = {
    flex: '1 1 300px',
    backgroundColor: 'transparent',
    textAlign: 'center',
    backdropFilter: 'blur(30px)',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.6s ease, box-shadow 0.3s ease',
    clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)', 
    '&:hover': {
      transform: 'scale(1.05)', 
      boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.6)',
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)',
    },
  };

  const headerStyles = {
    color: 'white',
    paddingBottom: '8px',
    marginBottom: '16px',
  };

  

  
  // const navigate = useNavigate();
  // const [showButtons, setShowButtons] = useState(false);
  // const [backgroundColor, setBackgroundColor] = useState('linear-gradient(45deg, #073F8C 30%, #30779d 90%)');

  // const [openSecondModal, setOpenSecondModal] = useState(false);
  // const [openThirdModal, setOpenThirdModal] = useState(false);
  // const [formData, setFormData] = useState({ name: '', mobile: '', email: '', message: '' });

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.selector-background', {
      opacity: 1,
      scale: 1.5,
      duration: 0.75,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to('.selector-background', {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            setBackgroundColor('#FFFFFF');
            setShowButtons(true);
          }
        });
      }
    });

    if (showButtons) {
      gsap.fromTo(
        '.selector-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: 'power2.out' }
      );
    }
  }, [showButtons]);

 

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        backdropFilter: 'blur(10px)',
        p: 2,
        '@media (min-width:600px)': {
          p: 4,
        },
        '@media (min-width:900px)': {
          p: 6,
        },
      }}
    >
      
          {/* Video Background */}
          <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="https://dprstorage.b-cdn.net/dprstorage/mainvideodpr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      <Box
        className="selector-background"
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#30779d',
          zIndex: 0,
          opacity: 0,
        }}
      />

      <Box
        sx={{
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          gap: '20px',
          flexWrap: 'wrap',
          p: 2,
          '@media (min-width:600px)': {
            p: 4,
          },
          '@media (min-width:900px)': {
            p: 6,
          },
        }}
      >
        {showButtons && (
          <Box sx={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                  𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 Home Seeker
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                {/* <Button size="small" variant="contained" color="primary" sx={{mt:4}} onClick={() => handleButtonClick('/projects')}>
                  Find Your Home
                </Button> */}
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 4 }}
                  // onClick={() => handleButtonClick('/projects?showHomeSeekerForm=true')}
                  onClick={() => handleButtonClick('homeSeeker')} // Store 'homeSeeker' in localStorage
                >
                  Find Your Home
                </Button>
              </CardActions>
            </Card>

            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                  𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 Developer/Builder
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="secondary" 
                // onClick={() => handleButtonClick('/projects')}
                // onClick={() => handleButtonClick('builder')}
                onClick={() => handleButtonClick('builder')} // Store 'homeSeeker' in localStorage

                >
                   Showcase Projects

                </Button>
              </CardActions>
            </Card>

            <Card className="selector-card" sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" sx={headerStyles}>
                𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶  Channel Partner
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="success" 
                // onClick={() => handleButtonClick('/projects')}
                onClick={() => handleButtonClick('channelPartner')}
                >
                 Partner Today
                </Button>
              </CardActions>
            </Card>
          </Box>
        )}
      </Box>

    
    </Box>
  );
};

export default Selector;
