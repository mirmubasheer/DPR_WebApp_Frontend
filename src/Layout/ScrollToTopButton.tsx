import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  CircularProgress,
  useMediaQuery,
  Popover,
  Tooltip,
  Button,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import InternalDirections from '../components/Directions/InternalDirections';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  // const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const urlToShare = 'https://dprprop.com';
  const [isOpen, setIsOpen] = useState(false);

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
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Now compatible
  };
  
  const handleClose = () => {
    setAnchorEl(null); // Reset to null when closed
  };
  


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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



  const handleButtonClick = (formType: string) => {
    localStorage.setItem("userType", formType);
    navigate("/projects"); // Navigate to the Projects page
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 30,
          zIndex: 1000,
          borderRadius: '50%',
          width: isSmallScreen ? 38 : 50,
          height: isSmallScreen ? 38 : 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          border: '2px solid #30779d',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(-10px)' : 'translateY(50px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={scrollProgress}
          size={isSmallScreen ? 38 : 50}
          thickness={3}
          sx={{
            color: '#30779d',
            position: 'absolute',
          }}
        />
        <IconButton
          onClick={scrollToTop}
          sx={{
            color: '#30779d',
            bgcolor: 'white',
            borderRadius: '50%',
            zIndex: 2,
            '&:hover': {
              bgcolor: 'rgba(48, 119, 157, 0.1)',
            },
          }}
        >
          <ArrowUpwardIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
        </IconButton>
      </Box>

      {/* <Box
        sx={{
          position: 'fixed',
          bottom: 88,
          right: 30,
          zIndex: 1000,
          borderRadius: '50%',
          width: isSmallScreen ? 38 : 50,
          height: isSmallScreen ? 38 : 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          border: '2px solid #30779d',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(-10px)' : 'translateY(50px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <IconButton
          onClick={handleClick}
          sx={{ color: '#30779d', bgcolor: 'white', borderRadius: '50%', zIndex: 2 }}
        >
          <ShareIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
        </IconButton>
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
          <Tooltip title="Share on WhatsApp">
            <a
              href={`https://wa.me/?text=Check out this awesome website: ${urlToShare}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <WhatsAppIcon color="success" />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Share on Twitter">
            <a
              href={`https://twitter.com/intent/tweet?text=Check out this awesome website!&url=${urlToShare}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <TwitterIcon sx={{ color: '#1DA1F2' }} />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Share on Instagram">
            <a
              href={`https://www.instagram.com/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <InstagramIcon sx={{ color: '#E1306C' }} />
              </IconButton>
            </a>
          </Tooltip>
          <Tooltip title="Visit YouTube Channel">
            <a
              href={`https://www.youtube.com/`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <IconButton>
                <YouTubeIcon sx={{ color: '#FF0000' }} />
              </IconButton>
            </a>
          </Tooltip>
        </Box>
      </Popover> */}

      {/* {isMenuVisible && (
        <IconButton
          onClick={handleClickMe}
          sx={{
            position: 'fixed',
            bottom: 165,
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
            // bgcolor: isActive ? '#30779d' : 'white',
            // color: isActive ? 'white' : '#30779d',
          }}
        >
          {isActive ? <CloseIcon /> : <MenuIcon />}
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
          md:338,
          xs:399
        },
        right: {
          md:'-3%',
          xs:'-17%'
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
        padding: '10px',
        gap: '10px',
        textAlign: 'center',
      }}
      onClick={() => {
        navigate('/projects');
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
          md:264,
          xs:329
        },
        right: {
          md:'-3%',
          xs:'-17%'
        },
        transform: 'translate(-50%, 0)',
        width: '215px',
        height: '70px',
        background: 'linear-gradient(135deg, rgba(50, 98, 153, 1) 49%, rgba(125, 185, 232, 0.7) 100%)',
        borderRadius: '8px 15px 30px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        gap: '10px',
        textAlign: 'center',
      }}
      onClick={() => {
        navigate('/projects');
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
          md:194,
          xs:255
        },
        right: {
          md:'-3%',
          xs:'-17%'
        },
        transform: 'translate(-50%, 0)',
        width: '215px',
        height: '70px',
        background: 'linear-gradient(135deg, rgba(50, 98, 153, 1) 49%, rgba(125, 185, 232, 0.7) 100%)',
        borderRadius: '8px 15px 30px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        gap: '10px',
        textAlign: 'center',
      }}
      onClick={() => {
        navigate('/projects');
        setIsActive(false);
      }}
    >
      Channel Partner
    </Button>
  </Box>
)} */}


<Box>
  <InternalDirections/>
</Box>
      
    </Box>
  );
};

export default ScrollToTopButton;
