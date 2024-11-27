import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useTheme, keyframes } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { GImages } from '../../assets'; // Using GImages that contains g1, g2

// Define the bounce animation using MUI's keyframes
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Adjust the height of the bounce */
  }
`;

const SellingGroup: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 7, md: 10 }, bgcolor: 'white' }}>
      <Container sx={{ height: 'auto' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} lg={5}>
            <Box sx={{ textAlign: { xs: 'center', lg: 'left' }, mt: 8 }}>
              <Typography 
                variant="h4" 
                sx={{ mb: 2, fontWeight: '550' }} // Smaller text on large screens
              >
                Let’s find the right selling option for you
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ mb: 3, color: 'black', fontSize: { xs: '1rem', lg: '0.875rem' } }} // Smaller text on large screens
              >
                Building Tomorrow’s Landmarks Today
              </Typography>
              <Typography 
                variant="caption" 
                paragraph 
                sx={{ textAlign: { xs: 'center', lg: 'justify' }, mb: 2, fontSize: { xs: '0.875rem', lg: '0.75rem' } }}
              >
                With over 30 years of excellence in the real estate industry
              </Typography>

              {/* New check points listed section */}
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                  {[
                    { text: 'Personalized real estate services.' },
                    { text: 'Luxurious living experience.' },
                    { text: 'Expertise in real estate development.' },
                  ].map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'left', lg: 'flex-start' } }}>
                        <CheckCircleIcon
                          sx={{
                            fontSize: '20px',
                            backgroundColor: 'black',
                            color: 'white',
                            borderRadius: '50%',
                            padding: '8px',
                            marginRight: '16px',
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'black', flexGrow: 1, fontSize: { xs: '1rem', lg: '0.875rem' } }}>
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} mb={5}>
            {/* Wrapper for images */}
            <Box sx={{ p: 2, position: 'relative', display: 'flex', justifyContent: 'end', mb: 12 }}>
              {/* First Image */}
              <Box
                component="img"
                src={GImages.g1}  // Use GImages.g1 here
                alt="About Us"
                sx={{
                  width: '60%',
                  borderRadius: '10px',
                  position: 'absolute',
                  bottom: { xs: '-180px', md: '-350px' }, 
                  left: '73%',
                  transform: 'translateX(-50%)', 
                }}
              />

              {/* Second Image */}
              <Box
                component="img"
                src={GImages.g2}  // Use GImages.g2 here
                alt="Overlay Image"
                sx={{
                  width: '40%',
                  borderRadius: '10px',
                  position: 'absolute',
                  bottom: { xs: '-200px', md: '-330px' },
                  left: '35%',
                  transform: 'translateX(-50%)',
                }}
              />

              {/* Third Image with bounce animation */}
              <Box
                component="img"
                src={GImages.g3}  // Use GImages.g1 again for the third image (or change as needed)
                alt="Feed4 Image"
                sx={{
                  width: '40%',
                  borderRadius: '10px',
                  position: 'absolute', 
                  bottom: { xs: '-220px', md: '-350px' },
                  left: '15%',
                  transform: 'translateX(-50%)',
                  animation: `${bounceAnimation} 3s infinite`,
                }}
              />
            </Box>
          </Grid>

        </Grid>

        {/* Move the Learn More button outside the grid for mobile placement */}
        <Box sx={{ p: 4, mt: { xs: 2, lg: 0 }, display: 'flex', justifyContent: 'left' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'transparent',
              color: 'black',
              padding: '8px 15px',
              '&:hover': {
                backgroundColor: '#30779d',
                color: 'white',
              },
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
              mt:8
            }}
            onClick={() => navigate('/contact')}
          >
            Learn More
            <ArrowOutwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SellingGroup;
