import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Talk = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4, color: 'white' }}>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: { xs: '20px', sm: '40px' },
            boxShadow: { xs: 0, sm: '0px 4px 12px rgba(0, 0, 0, 0.1)' },
            borderRadius: '16px',
            bgcolor: 'background.paper',
          }}
        >
          {/* Text Section */}
          <Box textAlign={{ xs: 'center', sm: 'left' }} mb={{ xs: 3, sm: 0 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Need help? Talk to our expert.
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Reach out to our team or explore more properties to find your perfect match.
            </Typography>
          </Box>

          {/* Button Section */}
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            gap={{ xs: 2, sm: 3 }}
            sx={{ mt: { xs: 3, sm: 0 } }}
          >
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 'bold',
                width: { xs: '100%', sm: 'auto' },
                color: 'primary.main',
                borderColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  borderColor: 'primary.main',
                },
              }}
              onClick = {() => {
                window.location.href = '/contact';
              }}
              
            >
              Contact Us
            </Button>

            <a href="tel:+919549546568" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                sx={{
                  backgroundColor: 'primary.main',
                  color: '#fff',
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  width: { xs: '100%', sm: 'auto' },
                  '&:hover': {
                    backgroundColor: 'white',
                  },
                }}
              >
                +91 954 954 6568
              </Button>
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Talk;
