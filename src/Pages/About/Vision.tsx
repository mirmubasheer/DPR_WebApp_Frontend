import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { mission, vision,mission1 } from '../../assets';

const Vision: React.FC = () => {
  return (
    <Box sx={{ background: 'white', padding: { xs: '10px 0', md: '20px 0' } }}>
      <Container>
        <Box sx={{ width: '100%', padding: { xs: '10px 0', md: '20px 0' } }}>
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
            {/* Text Section */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ textAlign: { xs: 'center', md: 'start' }, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: '600', mb: 2,fontSize: { xs: '0.875rem', md: '1.2rem' } }}
                >
                  We are the leading property consultant company.
                </Typography>
              </Box>
              <Typography 
                variant="caption" 
                paragraph 
                sx={{ textAlign: { xs: 'justify', md: 'justify' }, fontSize: { xs: '0.875rem', md: '1rem' } }}
              >
                DPR Understands That Every Project Is Unique. That's Why We Offer Personalized Strategies And Support To Meet Your Specific Needs And Goals. Proven Expertise: Backed By Years Of Experience And A Track Record Of Success, Dpr Brings Unparalleled Industry Knowledge And Insights To The Table, Ensuring You Stay Ahead Of The Competition.
              </Typography>
              <Typography 
                variant="caption" 
                paragraph 
                mt={2} 
                sx={{ textAlign: { xs: 'justify', md: 'justify' }, fontSize: { xs: '0.875rem', md: '1rem' } }}
              >
                End-to-end Support: From Initial Planning To Final Execution, Dpr Is Committed To Being Your Reliable Partner Every Step Of The Way, Providing Comprehensive Support For Your Sales And Marketing Endeavors.
              </Typography>
            </Grid>
            
            {/* Image Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ height: '100%', width: '100%' }}>
                <img 
                  src={vision} 
                  alt="discription"  
                  style={{ 
                    borderRadius: '20px 0 20px 20px', 
                    clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)', 
                    height: 'auto', 
                    width: '100%', 
                    maxHeight: '330px' 
                  }}
                />
              </Box>
            </Grid>

            {/* Second Image Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', width: '100%', mt: { xs: 4, md: 8 } }}>
                <img 
                  src={mission1} 
                  alt="discription"  
                  style={{ 
                    borderRadius: '20px 0 20px 20px', 
                    clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)', 
                    height: 'auto', 
                    width: '100%', 
                    maxHeight: '350px' 
                  }}
                />
              </Box>
            </Grid>
            
            {/* Philosophy and Approach Section */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ textAlign: { xs: 'center', md: 'start' }, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: '600', mb: 2 ,fontSize: { xs: '0.875rem', md: '1.2rem' }}}
                >
                  Our Philosophy
                </Typography>
              </Box>
              <Typography 
                variant="caption" 
                paragraph 
                sx={{ textAlign: { xs: 'justify', md: 'justify' }, fontSize: { xs: '0.875rem', md: '1rem' } }}
              >
                Our philosophy at DPR is simple: every project is unique, and so are its needs. We believe in offering personalized strategies and support to help you achieve your specific goals. With years of experience and a proven track record of success, DPR brings unparalleled industry knowledge and insights to every partnership. We are committed to providing end-to-end support, from initial planning to final execution, ensuring that your sales and marketing operations are optimized for maximum success.
              </Typography>
              <Box>
                <Typography 
                  variant="h6" 
                  sx={{ textAlign: { xs: 'center', md: 'start' }, fontWeight: '600', mb: 2 ,fontSize: { xs: '0.875rem', md: '1.2rem' }}}
                >
                  Our Approach
                </Typography>
              </Box>
              <Typography 
                variant="caption" 
                paragraph 
                mt={2} 
                sx={{ textAlign: { xs: 'justify', md: 'justify' }, fontSize: { xs: '0.875rem', md: '1rem' } }}
              >
                At DPR, we specialize in optimizing sales operations through a comprehensive range of services. Our expertise in digital marketing, lead conversion, and marketing strategy development allows us to create winning campaigns tailored to your unique goals and audience. We provide strategic consulting, sales training, and SOP review and enhancement to equip your team with the skills and knowledge they need to excel.
              </Typography>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Vision;
