import React from 'react';
import { Box, Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import propertyIcon from '../../assets/images/download.svg'; 
import propertyIcon1 from '../../assets/images/download1.svg'; 
import propertyIcon2 from '../../assets/images/download2.svg'; 

const Realton = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4 }}>
      <Container sx={{ height: 'auto', maxWidth: 'lg' }}>
        {/* Top Container */}
        <Box sx={{ flexGrow: 1, padding: { xs: 2, sm: 4, md: 6 } }}>
          {/* Top Centered Text */}
          <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' } }}>
              See how Realton can help
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aliquam lacinia diam quis lacus euismod
            </Typography>
          </Box>

          {/* Cards Container */}
          <Grid container spacing={4}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: { xs: 3, sm: 0 } }}>
              <Card sx={{ 
                textAlign: 'center', 
                padding: 3,  
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              }}>
                <Box
                  component="img"
                  src={propertyIcon}
                  alt="Property Icon"
                  sx={{ width: 110, height: 100, marginBottom: 4 }} 
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ marginBottom: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    Buy a Property
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Find Property
                </Button>
              </Card>
            </Grid>

            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: { xs: 3, sm: 0 } }}>
              <Card sx={{ 
                textAlign: 'center', 
                padding: 3, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              }}>
                <Box
                  component="img"
                  src={propertyIcon1}
                  alt="Property Icon"
                  sx={{ width: 110, height: 100, marginBottom: 4 }} 
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ marginBottom: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    Rent a Property
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Find Rentals
                </Button>
              </Card>
            </Grid>

            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4} sx={{ marginBottom: { xs: 3, sm: 0 } }}>
              <Card sx={{ 
                textAlign: 'center', 
                padding: 3, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'space-between',
              }}>
                <Box
                  component="img"
                  src={propertyIcon2}
                  alt="Property Icon"
                  sx={{ width: 110, height: 100, marginBottom: 4 }} 
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom sx={{ marginBottom: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    Sell a Property
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </CardContent>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  List Property
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Realton;
