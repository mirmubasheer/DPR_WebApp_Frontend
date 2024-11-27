import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, InputAdornment, Select, MenuItem, Typography, FormControl, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface HomeSearchProps {}

const HomeSearch: React.FC<HomeSearchProps> = () => {
  const [tabValue, setTabValue] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const searchOptions = [
    'Hyderabad',
    'Manikonda',
    'Puppalguda',
    'Kondapur',
    'Gachibowli',
    'Banjara Hills',
    'Jubilee Hills',
    'Hitech City',
  ];

  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: '160px', md: '140px' },
        backgroundColor: 'rgba(48, 119, 157, 0.6)',
        p: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
        position: 'relative',
        borderRadius: '10px 0 10px 10px',
        clipPath: 'polygon(0 0, 97% 0, 100% 10%, 100% 100%, 0 100%)',
        boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.9)',
        width: '100%',
        maxWidth: { xs: '100%', sm: '700px', md: '800px' },
        backdropFilter: 'blur(10px)',
        overflow: 'visible',
      }}
    >
      {/* Tabs Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 2,
          boxShadow: 4,
          borderRadius: '10px 0 10px 10px',
          clipPath: 'polygon(0 0, 95% 0, 100% 20%, 100% 100%, 0 100%)',
          bgcolor: 'white',
          width: { xs: '100%', sm: '60%' },
          padding: '6px',
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="property types"
          textColor="inherit"
          TabIndicatorProps={{
            style: { backgroundColor: '#000', height: 3, borderRadius: '50px' },
          }}
          sx={{
            '& .MuiTabs-flexContainer': {
              gap: { xs: 1, sm: 2 },
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              justifyContent: { xs: 'space-around', sm: 'center' },
            },
            '& .MuiTab-root': {
              minWidth: 'auto',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: { xs: '10px', sm: '14px' },
              color: '#000',
              '&.Mui-selected': {
                color: '#000',
                fontWeight: 'bold',
              },
            },
          }}
        >
          <Tab label="Apartments" />
          <Tab label="Ultra Luxury" />
          <Tab label="Commercial" />
          <Tab label="Villa" />
        </Tabs>
      </Box>

      {/* Search Bar Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: '10px 0 10px 10px',
          clipPath: 'polygon(0 0, 96% 0, 100% 20%, 100% 100%, 0 100%)',
          padding: { xs: '5px', sm: '10px', md: '15px' },
          gap: { xs: 1, sm: 2 },
          width: '100%',
          maxWidth: { xs: '100%', sm: '900px' },
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {/* Location Dropdown */}
        <FormControl
          sx={{
            width: { xs: '90%', sm: '30%', md: '25%' },
            borderRadius: '20px',
            backgroundColor: '#fff',
            boxShadow: 3,
          }}
          size="small"
        >
          <Select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            displayEmpty
            sx={{ borderRadius: '20px', height: 40 }}
            inputProps={{
              'aria-label': 'Location',
            }}
          >
            <MenuItem value="" disabled>
              <Typography variant="caption" color="textSecondary">
                Location
              </Typography>
            </MenuItem>
            {searchOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Search Input */}
        <FormControl
          sx={{
            width: { xs: '90%', sm: '30%', md: '60%' },
            borderRadius: '20px',
            backgroundColor: '#fff',
            boxShadow: 3,
          }}
          size="small"
        >
          <Autocomplete
            freeSolo
            options={searchOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Search for locality, landmark, project, or builder"
                size="small"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: { borderRadius: '10px' },
                }}
              />
            )}
          />
        </FormControl>

        {/* Search Button */}
        <Button
          variant="contained"
          color="success"
          sx={{
            borderRadius: '20px',
            paddingX: { xs: '20px', sm: '24px' },
            height: '40px',
            width: { xs: '90%', sm: 'auto' },
            backgroundColor: '#30779d',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default HomeSearch;
