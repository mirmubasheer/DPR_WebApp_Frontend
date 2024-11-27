import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import BathtubIcon from '@mui/icons-material/Bathtub';
import GarageIcon from '@mui/icons-material/Garage';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Project } from '../../ProjectInterface';

interface IOverviewProps {
  projectData: Project;
}


const Overview: React.FC<IOverviewProps> = ({ projectData }) => {

  const formatNumberIndian = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
};


  const overviewData = [
    { icon: <BedroomParentIcon fontSize="large" sx={{color:"#30779d"}}/>, label: 'Bedroom', value: projectData?.projectBHK?.join(', ') },
    { icon: <BathtubIcon fontSize="large" sx={{color:"#30779d"}}/>, label: 'Bath', value: projectData?.projectBHK?.join(', ') },
    { icon: <GarageIcon fontSize="large"sx={{color:"#30779d"}} />, label: 'Car Parking', value: projectData?.parkingArea }, 
    { icon: <SquareFootIcon fontSize="large" sx={{color:"#30779d"}}/>, label: 'Size', value: `${formatNumberIndian(projectData?.minSize)} - ${formatNumberIndian(projectData?.maxSize)} sqft`  },
    { icon: <CalendarTodayIcon fontSize="large" sx={{color:"#30779d"}}/>, label: 'Posession Year', value: projectData?.establishedYear},
    { icon: <HomeWorkIcon fontSize="large" sx={{color:"#30779d"}}/>, label: 'Property Type', value: projectData?.propertyType },
  ];

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        border: '1px solid #ddd',
        maxWidth: '100%',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '18px' } }}>
        Overview
      </Typography>
      <Grid container spacing={2}>
        {overviewData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '15px', // Gap between icon and text
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50px',
                  height: '50px',
                //   backgroundColor: '#fff',
                  borderRadius: '8px',
                //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                {item.icon}
              </Box>

              {/* Text */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '12px', md: '13px' },
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: '400',
                    fontSize: { xs: '14px', md: '15px' },
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Overview;
