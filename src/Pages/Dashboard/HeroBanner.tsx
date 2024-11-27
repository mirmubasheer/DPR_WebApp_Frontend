import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab, TextField } from '@mui/material';

interface HeroBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ imageUrl, title, subtitle }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '800px', sm: '800px', md: '900px' }, // Responsive height
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <Box
        sx={{
          position: 'relative', 
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h6" component="h1" sx={{ color: 'white', marginTop: -2 }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="h4" component="h2" sx={{ color: 'white' }}>
            {subtitle}
          </Typography>
        )}
      </Box>

      {/* Tabs Section (Left-Aligned) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'white',
          borderRadius: '10px 10px 0 0',
          padding: { xs: '5px', sm: '10px' },
          width: { xs: '80%', sm: '30%' }, 
          marginTop: '20px',
          marginLeft: { xs: '-20px', sm: '', md: '-475px' }, 
          display: 'flex',
          justifyContent: 'flex-start', 
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start', 
            '& .MuiTabs-flexContainer': {
              justifyContent: 'flex-start', 
            },
          }}
        >
          <Tab label="Buy" />
          <Tab label="Rent" />
          <Tab label="Sold" />
        </Tabs>
      </Box>

      {/* Search Bar Section */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'white',
          padding: { xs: '15px', sm: '20px' },
          borderRadius: '0px 10px 10px 10px',
          marginTop: '1px',
          width: { xs: '80%', sm: '60%' },
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            sx={{ flex: 1, marginBottom: { xs: '10px', sm: 0 }, marginRight: { sm: '10px' } }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '15px 25px',
              fontSize: '16px',
              backgroundColor: '#30779d',
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBanner;
