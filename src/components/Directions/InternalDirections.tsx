import React, { useEffect, useRef, useState } from 'react';
import { IconButton, Box, Button, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { CgUserList } from "react-icons/cg";

const InternalDirections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const urlToShare = 'https://dprprop.com';
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
    setIsVisible(scrollTop > 100);
    setIsMenuVisible(scrollTop > 100); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const navigate = useNavigate();



  const [isActive, setIsActive] = useState(false);
  const homeSeekarRef = useRef(null);
  const builderRef = useRef(null);
  const channelPartnerRef = useRef(null);

  const handleClickMe = () => {
    setIsActive((prev) => !prev);
  };

  const handleButtonClick = (formType: string) => {
    console.log("Setting userType to:", formType); // Add this line for debugging
    localStorage.setItem("userType", formType);
    navigate("/projects"); // Navigate to the Projects page
  };

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        homeSeekarRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: 'power2.out' }
      );
      gsap.fromTo(
        builderRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        channelPartnerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5, ease: 'power2.out' }
      );
    }
  }, [isActive]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);

  const handleCloseDialog = () => setIsDialogOpen(false);
  
  const handleSubmitForm = () => {
    // Perform form submission logic (e.g., call mutation, etc.)
    handleCloseDialog(); // Close dialog after submission
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      {isMenuVisible && (
        <IconButton
          onClick={handleClickMe}
          sx={{
            position: 'fixed',
            bottom: 96,
            right: 30,
            width: isSmallScreen ? 38 : 50,
            height: isSmallScreen ? 38 : 50,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            border: '2px solid #30779d',
            borderRadius: '50%',
          }}
        >
          {isActive ? <CloseIcon /> : <CgUserList />}
        </IconButton>
      )}
      {isMenuVisible && isActive && (
        <Box>
          <Button
            ref={homeSeekarRef}
            sx={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 93% 93%, 50% 75%, 0% 75%)',
              position: 'fixed',
              top: {
                md: 425,
                xs: 462,
              },
              right: {
                md: '-3%',
                xs: '-17%',
              },
              transform: 'translate(-50%, 0)',
              width: '215px',
              height: '70px',
              background: 'linear-gradient(135deg, rgba(50, 98, 153, 1) 49%, rgba(125, 185, 232, 0.7) 100%)',
              borderRadius: '8px 15px 30px 60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '23px',
              gap: '10px',
              textAlign: 'center',
            }}
            // onClick={() => handleButtonClick('homeSeeker')} 
            onClick={() => {
              handleButtonClick('homeSeeker');
              setIsActive(false);
            }}
          >
            Home Seeker
          </Button>
          <Button
            ref={builderRef}
            sx={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 93% 93%, 50% 75%, 0% 75%)',
              position: 'fixed',
              top: {
                md: 356,
                xs: 386,
              },
              right: {
                md: '-3%',
                xs: '-17%',
              },
              transform: 'translate(-50%, 0)',
              width: '215px',
              height: '70px',
              background: 'linear-gradient(135deg, rgba(50, 98, 153, 1) 49%, rgba(125, 185, 232, 0.7) 100%)',
              borderRadius: '8px 15px 30px 60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '23px',
              gap: '10px',
              textAlign: 'center',
            }}
            // onClick={() => handleButtonClick('builder')}
            onClick={() => {
              handleButtonClick('builder');
              setIsActive(false);
            }}
          >
            Developer/Builder
          </Button>
          <Button
            ref={channelPartnerRef}
            sx={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 93% 93%, 50% 75%, 0% 75%)',
              position: 'fixed',
              top: {
                md: 283,
                xs: 307,
              },
              right: {
                md: '-3%',
                xs: '-17%',
              },
              transform: 'translate(-50%, 0)',
              width: '215px',
              height: '70px',
              background: 'linear-gradient(135deg, rgba(50, 98, 153, 1) 49%, rgba(125, 185, 232, 0.7) 100%)',
              borderRadius: '8px 15px 30px 60px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '23px',

              gap: '10px',
              textAlign: 'center',
            }}
            // onClick={() => handleButtonClick('channelPartner')}
            onClick={() => {
              handleButtonClick('channelPartner');
              setIsActive(false);
            }}
             // Updated to call handleButtonClick with 'channelPartner'
          >
            Channel Partner
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default InternalDirections;
