import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LocationCityIcon from '@mui/icons-material/LocationCity';
import VillaIcon from '@mui/icons-material/Villa';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

// Define the property types with images and icons
const propertyTypes = [
  { name: 'Apartments', image: <LocationCityIcon />, properties: 22 },
  { name: 'Villas', image: <VillaIcon />, properties: 22 },
  { name: 'Plots', image: <MapsHomeWorkIcon />, properties: 22 },
  { name: 'Commercial', image: <HomeWorkIcon />, properties: 22 },
  { name: 'Lands', image: <VillaIcon />, properties: 22 },
  { name: 'Ultra Luxury', image: <MapsHomeWorkIcon />, properties: 22 },
];

const PropertyTypeExplorer: React.FC = () => {
  // Slick slider settings for property type cards
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 14, sm: 6, md: 8, lg: 10 }, bgcolor: 'transparent', mt: 12 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" align="left" sx={{ mb: 2, fontWeight: '600', color: 'primary.main' }}>
              Explore Property Types
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 4, color: '#00000099' }}>
              Discover 200+ projects with inspiring options tailored just for you.
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Box sx={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Slider {...settings}>
                {propertyTypes.map((type, index) => (
                  <Box key={index}>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                      <Card
                        sx={{
                          bgcolor: 'white',
                          borderRadius: '12px',
                          boxShadow: 3,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center', // Center items horizontally
                          justifyContent: 'center', // Center items vertically
                          minHeight: '180px',
                          position: 'relative',
                          overflow: 'hidden',
                          margin: '20px',
                          transition: '0.3s',
                          '&:hover': {
                            bgcolor: '#30779d',
                            color: 'black',
                            boxShadow: 6,
                          },
                        }}
                      >
                        <CardContent sx={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Box
                            sx={{
                              bgcolor: '#f0f0f0',
                              borderRadius: '50%',
                              width: '60px',
                              height: '60px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 2,
                              transition: '0.3s',
                              '&:hover': {
                                transform: 'rotate(360deg)',
                                filter: 'drop-shadow(0 0 0.75rem #f2c94c)',
                              },
                            }}
                          >
                            {type.image}
                          </Box>
                          <Typography variant="body2" sx={{ fontWeight: '600', color: 'inherit', textAlign: 'center' }}>
                            {type.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyTypeExplorer;
