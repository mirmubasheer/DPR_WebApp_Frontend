import React, { useRef } from 'react';
import { Box, Typography, Button, Grid, Card, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ServiceImages, whychooseus1, whychooseus2, whychooseus3 } from '../../assets';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';


const servicesData = [
  {
    title: "Custom Designed Sales Mechanisms",
    description: "Establishing an Efficient Tailormade Sales Mechanism to Suit each Project based on the Product & Location",
    icon: ServiceImages.service1,
  },
  {
    title: "Brand Consulting & Enhanced Customer Experience",
    description: "Boosting confidence in customers and teams with friendly policies and incentives for loyalty, performance, and exceptional customer experience through HR",
    icon: ServiceImages.service2,
  },
  {
    title: "Tech Tools & Automation Systems Implementation",
    description: "Identify & Match the Project requirement with the Best suited HRM & CRM Tools for Reporting & Tracking & to ensure enforceability across the organization",
    icon: ServiceImages.service3,
  },
  {
    title: "Vendor Management Services",
    description: "Engage vendors in various spheres in the organization wrt Sales, Marketing & Business Development",
    icon: ServiceImages.service4,
  },
  {
    title: "Networking & Visibility Enhancement",
    description: "Align Channel Partner network to the organization to increase word of mouth marketing/ branding & Sales Mobilisation",
    icon: ServiceImages.service5,
  },{
    title: "Tracking & Reporting Systems",
    description: "Drive the teams & track workforce performance weekly/monthly to make sure the set processes are being followed in order to achieve the desired output",
    icon: ServiceImages.service6,
  },{
    title: "Marketing Campaigns & Strategies",
    description: "To prepare a Marketing Calendar & Run regular campaigns both ATL & BTL activities",
    icon: ServiceImages.service7,
  },
  {
    title: "Strategic Alliances & Associations",
    description: "Creating strategic alliances & establishing tie-ups with the organization with Bankers, Investors, Marketers, Vendors & Associations that help in quick turn around",
    icon: ServiceImages.service8,
  },
  {
    title: "Management Consulting Services",
    description: "Optimizing practices for organizational growth, refining functions, and implementing end-to-end improvements for operational excellence across the organization",
    icon: ServiceImages.service9,
  },
];

const aboutImages = [whychooseus1, whychooseus2, whychooseus3];

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 960, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const WhyChooseUs = () => {
  const sliderRef = useRef<Slider | null>(null);
  
  const navigate = useNavigate();
  // const handleSeeAllBlogClick = () => {
  //   navigate('/blog'); 
  // };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 8, bgcolor: '#30779d', color: 'white' }}>
      <Container>
        <Grid container spacing={2}>
          {/* Header Section */}
          <Grid item xs={12} md={8} mt={8}>
            <Box
              sx={{
                fontFamily: '"Outfit", sans-serif',
                fontSize: { xs: '40px', md: '60px' },
                fontWeight: '400',
                textTransform: 'uppercase',
                lineHeight: '1',
                WebkitTextFillColor: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                textAlign: 'left',
              }}
            >
              Why Choose Us
            </Box>
            <Typography variant="h2" sx={{ fontWeight: '600', mb: 2, color: 'white', textAlign: 'left' }}>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'white', textAlign: 'justify' }}>
            At DPR, we believe in a client-first approach, ensuring that each service we offer is tailored to meet specific objectives. Our process is simple, effective, and focused on delivering results for all our clients – whether you’re a buyer, builder, or channel partner.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{display: { xs: 'none', lg: 'flex' },alignItems:'center',justifyContent:{ xs: 'center', md: 'flex-end' }}} >
            <Button
              variant="contained"
              sx={{ bgcolor: '#F2C94C', color: '#000', px: 4, py: 1.5, borderRadius: '10px' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/blog')}
            >
              Learn More
            </Button>
          </Grid>

          {/* Slider Section */}
          <Grid item xs={12} mt={4}>
            <Slider ref={sliderRef} {...settings}>
              {servicesData.map((service, index) => (
                <Box key={index} sx={{ px: 1 }}>
               <Card
                    sx={{
                      textAlign: 'center',
                      bgcolor: '#E6F0F3',
                      p: 3,
                      mx: 2,
                      my:2,
                      display: 'flex',
                      flexDirection: 'column',
                      // justifyContent: 'space-between', 
                      height: {
                        xs:'300px',
                        lg:"350px"
                      }, 
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                      transition: 'background-color 0.3s ease, color 0.3s ease',
                      '&:hover': {
                        bgcolor: ' #30779d',
                        '& .MuiTypography-root': { color: 'white' },
                      },
                    }}
                  >

                    <Box
                      sx={{
                        mb: 2,
                        border: '2px solid white',
                        borderRadius: '50%',
                        width: 80,
                        height: 80,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                      }}
                    >
                      <img src={service.icon} alt={`${service.title} icon`} style={{ width: '60%', height: '60%' }} />
                    </Box>
                    <Typography variant="h6" sx={{ color: 'black', mb: 1 , fontSize: { xs: '0.875rem', lg: '1.1rem' } }} mt={3}>{service.title}</Typography>
                    <Typography variant="caption" sx={{ color: 'black',fontSize: { xs: '0.7rem', lg: '0.875rem' },textAlign:'justify' }} mt={3}>{service.description}</Typography>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Grid>

          {/* Image Section */}
          {/* <Grid container item xs={12} spacing={2} mt={4}>
            {aboutImages.map((imageSrc, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px 0 20px 20px',
                    clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                    '&:hover .shine': { transform: 'translateX(100%)' },
                  }}
                >
                  <Box component="img" src={imageSrc} alt={`House ${index + 1}`} sx={{ width: '100%' }} />
                  <Box
                    className="shine"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.6s ease',
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
        <Grid item xs={12} md={4} sx={{display: { xs: 'flex', lg: 'none' },alignItems:'center',justifyContent:{ xs: 'center', md: 'flex-end' },mt:{xs:5,lg:0}}} >
            <Button
              variant="contained"
              sx={{ bgcolor: '#F2C94C', color: '#000', px: 4, py: 1.5, borderRadius: '10px' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate('/blog')}
            >
              Learn More
            </Button>
          </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
