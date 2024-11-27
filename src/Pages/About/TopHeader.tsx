import React from 'react';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface TopHeaderProps {
  value: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string; // Add backgroundImage to the props
}
const TopHeader: React.FC<TopHeaderProps> = ({ value, breadcrumbs = [], backgroundImage }) => {
    const theme = useTheme();
  return (
    <Box 
      sx={{ 
        position: 'relative', // For positioning the overlay
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        // backgroundPosition: 'center',   
        height: '400px', // Adjust the height as needed
        display: 'flex',
        alignItems: 'center', // Vertically center content
        backgroundPosition: { xs: '60% center', md: 'center' },
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(48, 119, 157, 0.7)', // #30779d color with transparency
          zIndex: 1, // Make sure it's layered above the background image
        }}
      />

      <Container 
        maxWidth="lg"
        sx={{ 
          position: 'relative', // Ensure the content is above the overlay
          zIndex: 2, // Higher z-index to make sure the content is visible above the overlay
          textAlign: 'left', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          marginTop: theme.spacing(6), 
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: '600', 
            mb: theme.spacing(2),
            color: 'white', 
          }}
        >
          {value}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Breadcrumbs aria-label="breadcrumb" separator=">">
            {/* Home Breadcrumb */}
            <Link 
              to="/home"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
            >
              <HomeIcon sx={{ fontSize: 20, marginRight: '5px', color: '#fff' }} />
              <Typography variant="body2" color="text.primary" sx={{ fontWeight: 560, color: 'white', '&:hover': { color: '#fff' } }}>
                Home
              </Typography>
            </Link>

            {/* Dynamically render breadcrumb items */}
            {breadcrumbs.map((breadcrumb, index) => (
              breadcrumb.path ? (
                <Link 
                  key={index} 
                  to={breadcrumb.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600, color: 'white', '&:hover': { color: '#fff' } }}>
                    {breadcrumb.label}
                  </Typography>
                </Link>
              ) : (
                <Typography key={index} color="white">
                  {breadcrumb.label}
                </Typography>
              )
            ))}

            {/* Current page */}
            <Typography color="white">{value}</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  )
}

export default TopHeader
