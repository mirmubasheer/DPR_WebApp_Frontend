import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, LinkedIn, YouTube, Email, LocationOn, Phone } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import  dprlogo  from '../../assets/images/dprlogo.png';
import  dprwhitelogo  from '../../assets/images/dpr_white.png';
// import { dprlogo } from '../assets';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
// import './Footer.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// Styled components
const FooterSection = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1.2),
}));

const FooterItem = styled(Typography)(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease',
    textDecoration: 'underline',
  },
}));

const FooterSection1 = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const FooterItem1 = styled('div')({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
      <div>
          <Box sx={{  backgroundColor: '#181a20', }}>
      <Container>
        <footer>
          <Container sx={{ padding: { xs: '20px', sm: '40px' } }}>
            <Grid container spacing={{ xs: 2, sm: 10 }}>
              {/* About Section */}
              <Grid item xs={12} sm={6} md={5} >
                <FooterSection className='footer-top'>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', sm: 'flex-start' }, flexDirection: 'column',alignItems:{xs:'start',lg:'start'} }} >
                    <img src={dprwhitelogo} alt="Logo" style={{ width: '120px' }} />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'left', sm: 'flex-start' },color:'white',gap:'50px'}}>
                    <Box sx={{textAlign:'start'}}>
                      {/* <h5 className='text-grey'>Total Free Customer Care</h5> */}
                      {/* <Box  mt={3}>

                        <Typography variant='caption' color='white' component='div' sx={{fontWeight:'700',fontSize: { xs: '0.82rem', lg: '0.87rem' }}}>
                          Total Free Customer Care
                        </Typography>
                      </Box> */}
                      {/* <Typography variant='caption' color='#BEBDBD' component='div' sx={{fontWeight:'700', a: {
                            color: '#BEBDBD',
                            textDecoration: 'none'
                          },fontSize: { xs: '0.75rem', lg: '0.87rem' }}} mt={1}>
                        <a href="tel:+91 954 954 6568" className="no-underline" >+91 954 954 6568</a>
                      </Typography> */}
                      
                    </Box>
                    
                  </Box>
                  <Box sx={{ display: 'flex', 
                    alignItems: 'left', 
                    marginTop: 1,
                    width: '90%',
                    color:'#BEBDBD',
                    textAlign:{
                      xs:'left',
                      sm:'start'
                    } ,
                    fontSize:'14px'}}>
                      <Typography variant='caption' paragraph  sx={{fontWeight:'600',color:'#BEBDBD',textAlign:'justify'}} mt={1}>
                        Your trusted real estate partner, delivering personalized strategies and proven expertise to ensure project success and help you achieve your goals with confidence.
                      </Typography>
                    
                  </Box>
                  <Box color='white'  sx={{
                    fontSize:'14px',
                    textAlign: {
                      xs: 'left', 
                      sm: 'start' 
                    } ,
                    marginTop:{
                      xs:'10px',
                      sm:'0'
                    }}}>
                    
                    <Typography variant='caption' color='white' component='div' sx={{fontWeight:'700',fontSize: { xs: '0.775rem', lg: '0.87rem' }}} >
                        Follow us on social media
                    </Typography>

                  </Box>
                  <Box sx={{ display: 'flex', 
                    alignItems: {
                      xs: 'center', 
                      sm: 'center' 
                    } ,
                    justifyContent: {
                      xs: 'left', 
                      sm: 'left' 
                    } ,
                    
                    marginTop: 1 }}>
                    
                  <IconButton 
                      sx={{
                        color:'#BEBDBD',
                        fontSize:'20px' ,
                        textAlign:'center',
                        '&:hover': {
                          backgroundColor: '#495057' ,
                          color:'white'
                        }
                      }}  
                      onClick={() => window.open('#', '_blank')} 
                      aria-label="Facebook"
                  >
                      <FaFacebookF />
                    </IconButton>
                    <IconButton 
                      sx={{
                        color:'#BEBDBD',
                        fontSize:'20px' ,
                        textAlign:'center',
                        '&:hover': {
                          backgroundColor: '#495057' ,
                          color:'white'
                        }
                      }}  
                      onClick={() => window.open('#', '_blank')} 
                      aria-label="Twitter">
                      <IoLogoTwitter />
                    </IconButton>
                    <IconButton 
                      sx={{
                        color:'#BEBDBD',
                        fontSize:'20px' ,
                        textAlign:'center',
                        '&:hover': {
                          backgroundColor: '#495057' ,
                          color:'white'
                        }
                      }}  
                      onClick={() => window.open('#', '_blank')} 
                      aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </IconButton>
                    <IconButton 
                      sx={{
                        color:'#BEBDBD',
                        fontSize:'20px' ,
                        textAlign:'center',
                        '&:hover': {
                          backgroundColor: '#495057' ,
                          color:'white'
                        }
                      }}    
                      onClick={() => window.open('#', '_blank')}
                      aria-label="YouTube">
                      {/* <YouTube /> */}
                      <FaYoutube />
                    </IconButton>
                  </Box>
                </FooterSection>
              </Grid>

              {/* Company Section */}
              <Grid item xs={12} sm={6} md={4} sx={{
               
              }}>
                <FooterSection sx={{ 
                  marginBottom: 0,
                  textAlign: {
                      xs: 'left', 
                      sm: 'left' 
                    } ,
                  color:'white', 
                  marginLeft:{
                    xs:'0',
                    lg:'90px'
                  }
                  }}>
                  <FooterTitle sx={{color:'white',marginBottom: '30px', marginTop:'30px'}}>Quick Links</FooterTitle>
                  <FooterItem onClick={() => handleNavigation('/home')}>
                    {/* <ChevronRightIcon/> */}
                    <Typography variant="caption" className='caption' sx={{ fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }} >Home</Typography>
                  </FooterItem>
                  <FooterItem onClick={() => handleNavigation('/about')}>
                    <Typography variant="caption" className='caption' sx={{  fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }}>About</Typography>
                  </FooterItem>
                  <FooterItem >
                    <Typography variant="caption" className='caption' sx={{  fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }}>Gallery</Typography>
                  </FooterItem>
                  <FooterItem onClick={() => handleNavigation('/projects')}>
                    <Typography variant="caption" className='caption' sx={{  fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }}>Projects</Typography>
                  </FooterItem>
                  <FooterItem onClick={() => handleNavigation('/contact')}>
                    <Typography variant="caption" className='caption' sx={{  fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }}>Contact us</Typography>
                  </FooterItem>
                  <FooterItem onClick={() => handleNavigation('/nri')}>
                    <Typography variant="caption" className='caption' sx={{  fontWeight:'700',fontSize:'14px' ,color:'#BEBDBD' }}>NRI</Typography>
                  </FooterItem>
                </FooterSection>
              </Grid>

              {/* Services Section */}
              <Grid item xs={12} sm={6} md={3}>
                <FooterSection sx={{ marginBottom: 0, textAlign: {
                      xs: 'left', 
                      sm: 'left' 
                    } }}>
                  <FooterTitle sx={{color:'white',marginBottom: '30px', marginTop:'30px'}}>Contact Us</FooterTitle>
                  {/* <Typography variant="caption" paragraph sx={{ textAlign: 'justify', fontWeight: '500',color:'#BEBDBD' }}>
                    <LocationOn sx={{ verticalAlign: 'middle', marginRight: '8px', color:'#BEBDBD' }} /> Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Film Nagar, Hyderabad, Telangana 500008
                  </Typography> */}
                  <Box sx={{  color:'#BEBDBD',fontSize:'14px' }} >
 
                    <Typography variant='caption' color='#BEBDBD' component='div' sx={{fontWeight:'600',fontSize: { xs: '0.775rem', lg: '0.87rem' },display: 'flex',justifyContent: 'space-between', }} mb={2}>
                      <LocationOn sx={{ verticalAlign: 'middle', marginRight: '8px', color:'#BEBDBD' }} />Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Film Nagar, Hyderabad, Telangana 500008
                    </Typography>
                  </Box>
                  <Typography variant="caption" paragraph 
                    sx={{
                    fontWeight: '500',
                    color:'#BEBDBD' ,
                    textAlign: {
                      xs: 'start', 
                      sm: 'left' 
                    }
                    }}>
                    <Phone sx={{ verticalAlign: 'middle', marginRight: '8px', color:'#BEBDBD' }} />
                    <a href="tel:++91 954 954 6568" style={{ textDecoration: 'none', }}>
                      <Typography variant="caption" color="#BEBDBD" sx={{fontWeight:'600',fontSize:'14px' }}>
                       +91 954 954 6568
                      </Typography>
                    </a>
                  </Typography>
                  <Typography variant="caption" paragraph sx={{
                    fontWeight: '500',
                    color:'#BEBDBD',
                    textAlign: {
                      xs: 'left', 
                      sm: 'left' 
                    } 
                    }}
                    >
                    <Email sx={{ verticalAlign: 'middle', marginRight: '8px', color:'#BEBDBD' }} />
                    <Typography variant="caption" color="#BEBDBD">
                      <a href="mailto:info@dprprop.com" style={{ textDecoration: 'none', color: 'inherit' ,fontWeight:'600',fontSize:'14px' }}>
                        info@dprprop.com
                      </a>
                    </Typography>
                  </Typography>
                </FooterSection>
              </Grid>
            </Grid>
          </Container>

          {/* Copyright Area */}
          <Container sx={{  padding: { xs: '8px', sm: '10px' }, height: 'auto',borderTop: '1px solid #BEBDBD' }}>
            <Grid display='flex' justifyContent="space-between" alignItems="center">
              <Grid item xs={12} sm={4} sx={{ textAlign: 'left',color: '#BEBDBD', fontSize:"15px" }}>
                <Typography variant='caption' color="#BEBDBD" sx={{fontWeight:'600',fontSize:'14px' }}>
                  © DPRPROP,All Right Reserved.<span className="current-year"></span>
                </Typography>
                
              </Grid>
              <Grid item xs={12} sm={4} sx={{ textAlign: 'left',color: '#BEBDBD', fontSize:"15px" }}>
              <Typography variant='caption' color="#BEBDBD" sx={{fontWeight:'600',fontSize:'14px' }}>
                Developed by <a href="https://dezignshark.com" style={{ color: '#fff', textDecoration: 'underline' }}><b>Dezign Shark</b></a>
                </Typography>
                
              </Grid>

             
            </Grid>
          </Container> 
        </footer>
      </Container>
    </Box>
      </div>
  );
};

export default Footer;