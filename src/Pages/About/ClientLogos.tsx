import React, { useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import { Box, Typography, Card, CardContent } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconsLogos } from "../../assets"; // Assuming IconsLogos is an object with logo values

// Dynamically mapping icons from IconsLogos
const facilities = Object.keys(IconsLogos).map((key, index) => ({
  id: index + 1,
  icon: IconsLogos[key as keyof typeof IconsLogos],
}));

// Custom Arrow Components
const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        width: 40,
        height: 40,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        right: '15px',
        zIndex: 1,
        cursor: 'pointer',
        transform: 'translateY(-50%)',
      }}
    >
      <ArrowForwardIosIcon />
    </Box>
  );
};

const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <Box onClick={onClick} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        width: 40,
        height: 40,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '-20px',
        zIndex: 1,
        cursor: 'pointer',
        transform: 'translateY(-50%)',
      }}
    >
      <ArrowBackIosIcon />
    </Box>
  );
};

const ClientLogos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (current: number, next: number) => {
      setCurrentIndex(next);
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px', // Center the card with padding
        },
      },
    ],
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 5, overflow: 'hidden', mb: 5 }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}>
        Our Facilities
      </Typography>

      <Box sx={{ width: { xs: '100%', md: '90%' }, mt: 2, margin: 'auto' }}>
        {/* Slider */}
        <Slider {...settings}>
          {facilities.map((facility, index) => (
            <Box key={facility.id} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  boxShadow: 'none',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  textAlign: 'center',
                  backgroundColor: currentIndex === index ? 'primary.main' : 'black',
                  color: currentIndex === index ? 'white' : 'text.primary',
                  transform: currentIndex === index ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.3s, background-color 0.3s',
                  width: '100%',
                  maxWidth: { xs: '150px', md: '200px' }, // Adjust maxWidth for mobile
                }}
              >
                <CardContent>
                  {/* Icon */}
                  <Box
                    component="img"
                    src={facility.icon}
                    alt={`Facility ${index + 1}`}
                    sx={{
                      width: 60,
                      height: 60,
                      margin: '0 auto',
                    }}
                  />
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ClientLogos;
