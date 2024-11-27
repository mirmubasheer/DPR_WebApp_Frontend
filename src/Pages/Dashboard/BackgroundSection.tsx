import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bannerbackground, ProjectImagesNew } from '../../assets';

const cardData = [
  { id: 1, img: ProjectImagesNew.projects1, hoverImg: ProjectImagesNew.plan },
  { id: 2, img: ProjectImagesNew.projects2, hoverImg: ProjectImagesNew.plan },
  { id: 3, img: ProjectImagesNew.projects3, hoverImg: ProjectImagesNew.plan },
  { id: 4, img: ProjectImagesNew.projects2, hoverImg: ProjectImagesNew.plan },
];

const BackgroundSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect if the view is mobile
  const navigate = useNavigate()


  const handleExploreClick = () => {
    navigate('/projects'); // Navigate to /projects when clicked
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2, // Show 1 slide at a time on mobile
    slidesToScroll: isMobile ? 1 : 2, // Scroll 1 slide at a time on mobile
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i: number) => (
      <Box
        sx={{
          width: '20px',
          height: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          mx: 0.5,
        }}
      />
    ),
    arrows: false,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '100vh', md: '100vh' }, // Ensures full height in mobile
        backgroundImage: `url(${bannerbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for mobile, row for desktop
        alignItems: 'center',
        justifyContent: { xs: 'space-between', md: 'flex-start' },
        color: '#fff',
        overflow: 'hidden',
        mt: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(48, 119, 157, 0.3)',
          zIndex: 0,
        },
      }}
    >
      {/* Left Side Text Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          p: 4,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mt: 8,
        }}
      >
      <Box
          component="div"
          sx={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: { xs: '36px', md: '80px' }, // Smaller font on mobile
            fontWeight: '500',
            textTransform: 'uppercase',
            lineHeight: '1',
            background: 'transparent',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.65)',
            margin: { xs: '0 0 0.5em 0', md: '-0.67em 0 -0.48em 0' }, // Adjusted margins
            display: 'block',
            color: '#ffffff',
            textAlign:'left',
          }}
        >
          Projects
        </Box>
        <Box sx={{ width: '100%' }}>
          <Typography
            variant="h4"
            sx={{
              color: 'white',
              mb: 2,
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '24px', md: '36px' },
            }}
          >
            Discover Your Dream Home
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              mb: 2,
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' },
              width: { xs: '100%', md: '500px' },
              fontSize: { xs: '14px', md: '16px' },
            }}
          >
            Where modern living meets sustainability, maximizing natural sunlight for a brighter future.
          </Typography>
        </Box>
      </Box>

      {/* Right Side Image Slider */}
      <Box
        sx={{
          width: { xs: '100%', md: '45%' },
          display: { xs: 'block', md: 'block' },
          p: { xs: 0, md: 4 }, // Reduce padding in mobile view
          pt: { xs: 0, md: 4 }, // Reduce padding-top in mobile view
          mb: { xs: 0, md: 4 },
          mt: 12,
        }}
      >
        <Slider {...settings}>
          {cardData.map((card) => (
            <SliderImage key={card.id} card={card} />
          ))}
        </Slider>
      </Box>

      {/* Explore More Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' }, // Center on mobile, start on desktop
          position: { xs: 'relative', md: 'absolute' }, // Bottom for mobile, absolute for desktop
          bottom: { xs: '0', md: '100px' }, // Align at the bottom for mobile
          left: { md: '40px' }, // Adjust positioning for desktop
          width: '100%', // Full width for mobile view
          p: { xs: 2, md: 0 }, // Padding for mobile view
          mb: { xs: 2, md: 0 }, // Bottom margin for mobile view
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: '220px',
            color: '#fff',
            backgroundColor: 'primary.main',
            borderRadius: '10px 0 10px 10px',
            clipPath: 'polygon(0 0, 93% 0, 100% 30%, 100% 100%, 0 100%)',
            '&:hover': { backgroundColor: 'secondary.main' },
            textAlign: 'center',
          }}
          endIcon={<ArrowForward />}
          onClick={handleExploreClick}
        >
          Explore More
        </Button>
      </Box>
    </Box>
  );
};

const SliderImage: React.FC<{ card: { id: number; img: string; hoverImg: string } }> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '10px',
        cursor: 'pointer',
        margin: '10px',
        height: { xs: '300px', md: '300px' },
        '&:hover .shine': {
          transform: 'translateX(100%)',
        },
        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease-in-out',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={card.img}
        alt={`project-${card.id}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'opacity 0.8s ease',
          borderRadius: '15px 0 15px 15px',
          clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          overflow: 'hidden',
          borderRadius: '20px 0 20px 20px',
          clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s ease',
          backgroundColor: 'rgba(28, 117, 156, 0.9);',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <img src={card.hoverImg} alt={`hover-project-${card.id}`} />
      </Box>
    </Box>
  );
};

export default BackgroundSection;
