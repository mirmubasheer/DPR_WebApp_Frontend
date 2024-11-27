import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowForward, Instagram, Twitter, Facebook, LinkedIn, YouTube } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProjectsImages } from '../../assets'; // Ensure these images are high quality
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import HomeSearch from './HomeSearch';

const images = [ProjectsImages.projectt, ProjectsImages.projectt0];

const ImageSlider: React.FC = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    appendDots: (dots: React.ReactNode) => (
      <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', bottom: -20 }}>
        {dots}
      </Box>
    ),
    customPaging: () => (
      <Box sx={{ width: '20px', height: '3px', backgroundColor: 'rgba(255, 255, 255, 0.6)', mx: 0.5 }} />
    ),
    beforeChange: () => {
      gsap.to(textRef.current, { opacity: 0, y: -50, duration: 0.6 });
    },
    afterChange: () => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    },
  };

  useEffect(() => {
    imageRefs.current.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1 },
        { scale: 1.05, duration: 4.5, ease: 'ease-in-out', repeat: -1, yoyo: true }
      );
    });
    gsap.to(sidebarRef.current, { x: showSidebar ? 0 : -100, duration: 0.6 });
  }, [showSidebar]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: 'auto', backgroundColor: 'primary.main'}}>
      <Box
        ref={sidebarRef}
        sx={{
          color: '#fff',
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          py: 4,
          width: '5%',
          zIndex: 1,
          position: 'relative',
          transition: 'transform 0.3s ease', 
        }}
      >
        <IconButton onClick={toggleSidebar} sx={{ display: { md: 'none', xs: 'block' }, color: '#fff', mb: 2 }}>
          <ArrowForward />
        </IconButton>
        <Box sx={{ flexDirection: 'column', alignItems: 'center', marginLeft: '200px' }}>
          {[
            {
              icon: <Instagram />,
              link: 'https://www.instagram.com/deccanprogressiverealtyllp',
              label: 'Instagram',
            },
            {
              icon: <XIcon />,
              link: 'https://x.com/DeccanProp/',
              label: 'Twitter',
            },
            {
              icon: <Facebook />,
              link: 'https://www.facebook.com/DPRLLP/',
              label: 'Facebook',
            },
            //linked in icon
            {
              icon: <LinkedIn />, 
              link: 'https://www.linkedin.com/company/deccan-progressive-realty-llp',
              label: 'LinkedIn',
            },
            {
              icon: <YouTube />,
              link: 'https://www.youtube.com/@DeccanProgressiveRealty',
              label: 'YouTube',
            }

          ].map((item) => (
            <Typography
              key={item.label}
              sx={{
                color: '#fff',
                // my: 7,
                textTransform: 'none',
                writingMode: 'vertical-rl',
                textAlign: 'center',
                // transform: 'rotate(180deg)',
                height: '100px',
                width: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => window.open(item.link, '_blank')}
            >              
                <span style={{  }}>
                {item.icon} 
                </span>
            </Typography>
          ))} 
        </Box>
      </Box>
      <Box
        sx={{
          width: '93%',
          borderRadius: '20px 0 20px 20px',
          clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
          position: 'relative',
          height: '100%', 
          mt: 2,
          mr: 2,
        }}
      >



        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
                height: '600px',
                borderRadius: '20px 0 20px 20px',
                clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={src}
                alt={`slider-${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                }}
                ref={(el) => (imageRefs.current[index] = el as HTMLImageElement)}
              />
              <Box
                ref={textRef}
                sx={{
                  position: 'absolute',
                  top: { xs: '50%', sm: '40%' },
                  left: '10%',
                  transform: 'translateY(-50%)',
                  color: '#fff',
                  textAlign: 'left',
                  maxWidth: '80%',
                }}
              >
                <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#f0f0f0' }}>
                  Top Notch
                </Typography>
                <Typography variant="h1" sx={{ fontWeight: 'bold', mb: 4, color: '#f0f0f0' }}>
                  Living Spaces
                </Typography>
                <Typography variant="body2" sx={{ maxWidth: '50%', mb: 4, color: '#f0f0f0', textAlign: 'justify' }}>
                  Bringing together a team with passion, dedication, and resources to help our clients reach their
                  Buying & Selling goals. We are with you way watching your back.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: { xs: 8, sm: 4 },
                    color: '#fff',
                    backgroundColor: 'primary.main',
                    '&:hover': { backgroundColor: 'secondary.main' },
                  }}
                  endIcon={<ArrowForward />}
                  //navigate
                  onClick={() => navigate('/projects')}
                >
                  Explore Properties
                </Button>

              </Box>
              <Box
                ref={textRef}
                sx={{
                  position: 'absolute',
                  bottom: { xs: '10%', sm: '40%' },
                  left: { xs: '10%', sm: '10%' },
                  right: { xs: '10%', sm: '10%' },
                  color: '#fff',
                  textAlign: 'right', // Align text to the right
                  maxWidth: '80%',
                  zIndex: 999, // Ensures it's above other content
                }}
              >
                <Box
                  component="div"
                  sx={{
                    fontFamily: '"Outfit", sans-serif',
                    fontSize: { xs: '120px', sm: '180px' },
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    lineHeight: '1',
                    background: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.65)',
                    margin: '0 0 -0.48em 0',
                    display: 'block',
                    color: '#ffffff',
                  }}
                >
                  DPR
                </Box>
              </Box>

              {/* <Box
                ref={textRef}
                sx={{
                  position: 'absolute',
                  bottom : '7%',
                  left: '10%',
                  transform: 'translateY(-50%)',
                  color: '#fff',
                  textAlign: 'left',
                  maxWidth: '80%',
                }}
              >
               <Box
                    component="div"
                    sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontSize: '180px', 
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        lineHeight: '1',
                        background: 'transparent',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.65)',
                        margin: '-0.67em 0 -0.48em 0',
                        display: 'block',
                        color: '#ffffff',
                    }}
                    >
                    DPR
                    </Box>
                </Box> */}
            </Box>
          ))}
        </Slider>
        
      </Box>
    </Box>
  );
};

export default ImageSlider;
