import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Grid, Card, Container, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import { AboutNew, dprlogo, dprwhite, ProjectImagesNew, ServiceImages } from '../../assets';

const About = [
    ProjectImagesNew.projects6,
    ProjectImagesNew.Aboutimage
    
];

const AboutusN: React.FC = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnHover: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const totaldata = [
    {
      title: "Custom Designed Sales Mechanisms",
      description: "Establishing an Efficient Tailormade Sales Mechanism to Suit each Project based on the Product & Location",
      logo: ServiceImages.service1,
    },
    {
      title: "Brand Consulting & Enhanced Customer Experience",
      description: "Boosting confidence in customers and teams with friendly policies and incentives for loyalty, performance, and exceptional customer experience through HR",
      logo: ServiceImages.service2,
    },
    {
      title: "Tech Tools & Automation Systems Implementation",
      description: "Identify & Match the Project requirement with the Best suited HRM & CRM Tools for Reporting & Tracking & to ensure enforceability across the organization",
      logo: ServiceImages.service3,
    },
    {
      title: "Vendor Management Services",
      description: "Engage vendors in various spheres in the organization wrt Sales, Marketing & Business Development",
      logo: ServiceImages.service4,
    },
    {
      title: "Networking & Visibility Enhancement",
      description: "Align Channel Partner network to the organization to increase word of mouth marketing/ branding & Sales Mobilisation",
      logo: ServiceImages.service5,
    },{
      title: "Tracking & Reporting Systems",
      description: "Drive the teams & track workforce performance weekly/monthly to make sure the set processes are being followed in order to achieve the desired output",
      logo: ServiceImages.service6,
    },{
      title: "Marketing Campaigns & Strategies",
      description: "To prepare a Marketing Calendar & Run regular campaigns both ATL & BTL activities",
      logo: ServiceImages.service7,
    },
    {
      title: "Strategic Alliances & Associations",
      description: "Creating strategic alliances & establishing tie-ups with the organization with Bankers, Investors, Marketers, Vendors & Associations that help in quick turn around",
      logo: ServiceImages.service8,
    },
    {
      title: "Management Consulting Services",
      description: "Optimizing practices for organizational growth, refining functions, and implementing end-to-end improvements for operational excellence across the organization",
      logo: ServiceImages.service9,
    },
  ];

  const text = 'Deccan Progressive Realty ';
  return (
    <Box 
      sx={{ 
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        bgcolor: '#30779d',
        color: 'white',
        minHeight: '100vh',
        mt: { xs: '20px', md: '50px' },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
    {/* Title and Description Section */}
    <Grid item xs={12} md={8} mt={6}>
      <Box
        component="div"
        sx={{
          fontFamily: '"Outfit", sans-serif',
          fontSize: '50px',
          fontWeight: '500',
          textTransform: 'uppercase',
          lineHeight: '1.05',
          background: 'transparent',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.45)',
          margin: '-0.67em 0 -0.48em 0',
          display: 'block',
          color: '#ffffff',
          textAlign: 'left',
        }}
      >
        About
      </Box>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'white', textAlign: 'left' }}>
        About Us
      </Typography>
    </Grid>

    {/* Description Section */}
    <Grid item xs={12} md={6}>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          textAlign: { xs: 'justify', md: 'justify' },
          mt: { xs: 2, md: 4 },
          padding: { xs: 2, md: 0 },
        }}
      >
        At Deccan Progressive Realty (DPR), we don’t just offer real estate consulting – we provide tailored mentorship and
        strategies designed to drive success in an ever-evolving market. With a commitment to innovation and expertise, we
        collaborate with developers, helping them boost sales and enhance marketing efforts through our personalized,
        results-driven approach. Whether you're looking to maximize a single project’s potential or scale your business for
        long-term growth, DPR is your trusted partner every step of the way.
      </Typography>
    </Grid>

    {/* Image Section */}
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={About[1]}
        alt="House"
        sx={{
          width: { xs: '100%', md: '80%' },
          height: { xs: 'auto', md: '400px' },
          borderRadius: '20px 0 20px 20px',
          overflow: 'hidden',
          clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
          transition: 'transform 0.6s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
    </Grid>

    {/* Learn More Button */}
    <Grid
      item
      xs={12}
      md={4}
      textAlign={{ xs: 'center', md: 'right' }}
      sx={{
        display: { xs: 'block', md: 'block' }, // Flex on mobile to align the button
        justifyContent: { xs: 'center', md: 'initial' }, // Center the button on mobile
        mt: { xs: 4, md: 0 }, // Add margin on top for mobile
        order: { xs: 3, md: '5' }, 
        textAlign:'left'// Move the button to the bottom on mobile (order property)
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: '#F2C94C',
          color: '#000',
          px: 4,
          py: 1.5,
          borderRadius: '10px',
         
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => navigate('/about')}  // Navigate to /about
      >
        Learn More
      </Button>
    </Grid>
        </Grid>


        {/* Services Section */}
        <Grid container spacing={2} mt={4}>
          <Grid item xs={12}>
        <Box
          component="div"
          sx={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: '50px', 
              fontWeight: '500',
              textTransform: 'uppercase',
              lineHeight: '1.05',
              background: 'transparent',
              WebkitTextFillColor: 'transparent',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.45)',
              margin: '-0.67em 0 -0.48em 0',
              display: 'block',
              color: '#ffffff',
              textAlign:'left',
              mt:4
          }}
          >
            Services
          </Box>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'white',
              textAlign: 'left',
            }}
          >
            Our Services
          </Typography>
          </Grid>

          {/* Slider Section */}
          <Grid item xs={12}>
          <Slider ref={sliderRef} {...settings}>
  {totaldata.map((data, index) => (
    <Box sx={{ textAlign: 'center' }} key={index}>
      <Card
        sx={{
          m: 2, // Reduced margin
          textAlign: 'left',
          bgcolor: '#E6F0F3',
          padding: { xs: 2, md: 4 }, // Responsive padding
          borderRadius: 3,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: { xs: 'auto', md: '300px' }, // Adjust height for mobile
          '&:hover': {
            bgcolor: '#30779d',
            '& .MuiTypography-root': { color: 'white' },
          },
        }}
      >
        <Box
          component="img"
          src={data.logo}
          alt={`${data.title} logo`}
          sx={{ width: { xs: '50px', md: '80px' }, mb: 1 }} // Responsive image size
        />
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
            color: 'black', 
            mb: 0.5 
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: { xs: '0.75rem', md: '0.875rem' }, // Responsive caption size
            color: 'black',
          }}
        >
          {data.description}
        </Typography>
      </Card>
    </Box>
  ))}
          </Slider>

        </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default AboutusN;
