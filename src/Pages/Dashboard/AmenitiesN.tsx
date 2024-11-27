import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, CardContent, Container, Grid } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PetsIcon from '@mui/icons-material/Pets';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DeckIcon from '@mui/icons-material/Deck';
import SpaIcon from '@mui/icons-material/Spa';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import WifiIcon from '@mui/icons-material/Wifi';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import Slider from 'react-slick';

interface AmenityProps {
  imageSrc1: string;
}
const amenitiesData = [
    { 
      label: 'Pet Friendly', 
      icon: <PetsIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1683141074663-45370e679db9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for pet-friendly
    },
    { 
      label: 'Playground', 
      icon: <DirectionsRunIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1661630650779-9bcdcf5d714f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for playground
    },
    { 
      label: 'Car Parking', 
      icon: <LocalParkingIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1673886205989-24c637783c60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for car parking
    },
    { 
      label: 'Fitness Center', 
      icon: <FitnessCenterIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1663011447205-ae70222ea780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for fitness center
    },
    { 
      label: 'Rooftop Garden', 
      icon: <DeckIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1713991088877-ec5df174a0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for rooftop garden
    },
    { 
      label: 'Indoor Pool', 
      icon: <PoolIcon fontSize="large" />, 
      image: 'https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for indoor pool
    },
    { 
      label: 'Spa', 
      icon: <SpaIcon fontSize="large" />, 
      image: 'https://images.unsplash.com/photo-1728404259075-209cfb5bb89c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for spa
    },
    { 
      label: 'Tennis Court', 
      icon: <SportsTennisIcon fontSize="large" />, 
      image: 'https://plus.unsplash.com/premium_photo-1708119178895-633036643da2?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Real image for tennis court
    },
    { 
      label: 'Free Wi-Fi', 
      icon: <WifiIcon fontSize="large" />, 
      image: 'https://images.unsplash.com/photo-1608881682485-b4c9f17cc0f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDExfHx3aSVDMyVBMSUyMGZlZWxpbmd8ZW58MHx8fHwxNjgzMDc0ODIx&ixlib=rb-4.0.3&q=80&w=250' // Real image for free Wi-Fi
    },
    { 
      label: 'Entertainment Room', 
      icon: <TheaterComedyIcon fontSize="large" />, 
      image: 'https://images.unsplash.com/photo-1559580682-8167d0f2532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVudGVydGFpbm1lbnR8ZW58MHx8fHwxNjgzMDc0ODI2&ixlib=rb-4.0.3&q=80&w=250' // Real image for entertainment room
    },
  ];
  
  



const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const AmenitiesN: React.FC<AmenityProps> = ({ imageSrc1 }) => {
  const [flipped, setFlipped] = useState(false);

  // Flip the section every 3000ms
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: 4,
        bgcolor: '#E6F0F3',
        borderRadius: '20px 0 20px 20px',
        height: '900px',
      }}
    >
      <Container>

      <Box
    component="div"
    sx={{
      position: 'absolute', // Overlap the text
      left: '15%', // Center horizontally
      transform: 'translateX(-50%)', // Center alignment adjustment
      fontFamily: '"Outfit", sans-serif',
      fontSize: '50px',
      fontWeight: '500',
      textTransform: 'uppercase',
      lineHeight: '0.85',
      WebkitTextFillColor: 'transparent',
      WebkitTextStroke: '1px rgba(0, 0, 0, 1)', // Black stroke
      margin: '0', // Remove margins
      display: 'block',
      color: 'black',
      mt:-3
    }}
  >
    Realar
  </Box>

  {/* Realar Amenities (base text) */}
  <Typography
    variant="h4"
    align="left"
    sx={{ mb: 2, color: '#333', fontSize: { xs: '1.5rem', md: '2rem' }, mt: 6 }}
  >
    Realar Amenities
  </Typography>

  {/* Description text */}
  <Typography
    variant="body2"
    align="center"
    sx={{ mb: 4, fontSize: { xs: '0.875rem', md: '1rem' } }}
  >
    We are a real estate firm with over 20 years of expertise, and our main goal is to
    provide amazing locations to our partners and clients.
  </Typography>

      <Slider {...sliderSettings}>
        {amenitiesData.map((amenity, index) => (
            <Box key={index} sx={{ px: 2 }}>
            <Box
                sx={{
                height: '250px',
                width: '70%',
                backgroundColor: '#30779d',
                color: 'white',
                borderRadius: '20px 0 20px 20px',
                clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                textAlign: 'center',
                p: 3,
                boxShadow: 3,
                overflow: 'hidden',
                position: 'relative',
                perspective: '1000px', // Add perspective for the 3D effect
                }}
            >
                {/* Container for the fade effect */}
                <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 0.6s ease',
                    // Handle fade effect on hover
                    '&:hover .front': {
                    opacity: 0, // Fade out front side
                    },
                    '&:hover .back': {
                    opacity: 1, // Fade in back side
                    },
                }}
                >
                {/* Front Side */}
                <CardContent
                    className="front"
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden', // Hide backface
                    zIndex: 2, // Ensure it is on top
                    opacity: 1, // Fully visible by default
                    transition: 'opacity 0.6s ease', // Smooth transition
                    }}
                >   
                    {amenity.icon}
                    <Typography variant="subtitle2" sx={{ mt: 2, fontSize: '0.875rem' }}>
                    {amenity.label}
                    </Typography>
                </CardContent>

                {/* Back Side (Image) */}
                <Box
                    className="back"
                    sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px 0 20px 20px', // Ensure the image has the same border radius
                    opacity: 0, // Start invisible
                    transition: 'opacity 0.6s ease', // Smooth transition
                    overflow: 'hidden',
                    }}
                >
                    {/* Image */}
                    <Box
                    component="img"
                    src={amenity.image} // Replace with your image source
                    alt={amenity.label} // Optional: provide an alt text
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        backfaceVisibility: 'hidden', // Hide front face when flipped
                    }}
                    />
                    {/* Dark Overlay */}
                    <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent black
                        opacity: 1, // Start invisible
                        transition: 'opacity 0.6s ease', // Smooth transition
                        '&:hover': {
                        opacity: 1, // Show overlay on hover
                        },
                    }}
                    />
                </Box>
                </Box>
            </Box>
            </Box>
  ))}
</Slider>

{/* Next Section */}
<Box sx={{ mt: 8 }}>
  <Box
    sx={{
      perspective: '1000px', // Creates the 3D effect
      position: 'relative',
      width: '100%',
      height: { xs: '700px', md: '300px' }, // Increased height for mobile view
    }}
  >
    {/* Front Section */}
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'white',
        borderRadius: '20px 10px 20px 20px',
        clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
        textAlign: 'center',
        p: { xs: 2, md: 3 }, // Adjust padding for smaller screens
        boxShadow: 3,
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s ease-in-out',
        transform: flipped ? 'rotateX(180deg)' : 'rotateX(0deg)', // Flips based on state
      }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ color: '#000', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            Take A Look At Our Modern Apartment
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: '#555', fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            We are a real estate firm with over 20 years of expertise, and our main goal is
            to provide amazing locations for our partners and clients.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 4, px: 4, py: 1.5 }}>
            Request A Visit
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: '250px', md: '250px' }, // Adjust height for smaller screens
              width: '100%',
              textAlign: 'center',
              p: 1, // Adjust padding for smaller screens
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={imageSrc1} // Replace with your image URL
              alt="Apartment"
              sx={{
                height: '100%',
                width: '100%', // Ensure it uses full width
                borderRadius: '20px 20px 20px 20px',
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* Back Section */}
    <Box
      sx={{
        backgroundColor: 'white',
        color: 'white',
        borderRadius: '20px 10px 20px 20px',
        clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
        textAlign: 'center',
        p: { xs: 2, md: 3 }, // Adjust padding for smaller screens
        boxShadow: 3,
        overflow: 'hidden',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s ease-in-out',
        transform: flipped ? 'rotateX(0deg)' : 'rotateX(180deg)', // Only one transform property
      }}
    >
      <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{ color: '#000', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            Modern and Unique Designs
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: '#555', fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            We are a real estate firm with over 20 years of expertise, and our main goal is
            to provide amazing locations for our partners and clients.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 4, px: 4, py: 1.5 }}>
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: '250px', md: '250px' }, // Adjust height for smaller screens
              width: '100%',
              textAlign: 'center',
              p: 1, // Adjust padding for smaller screens
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={imageSrc1} // Replace with your image URL
              alt="Apartment"
              sx={{
                height: '100%',
                width: '100%', // Ensure it uses full width
                borderRadius: '20px 20px 20px 20px',
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Box>


      </Container>
    </Box>
  );
};

export default AmenitiesN;
