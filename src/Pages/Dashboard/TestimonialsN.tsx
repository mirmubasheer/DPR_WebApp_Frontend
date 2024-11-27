import React from 'react';
import { Box, Container, Grid, Typography, Avatar } from '@mui/material';
import { keyframes } from '@mui/material/styles';
import Slider from 'react-slick';
import StarIcon from '@mui/icons-material/Star';
import { Testimo } from '../../assets'; // Assuming ProjectImagesNew and rajiv are not used

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the bounce animation using MUI's keyframes
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Star rating component
interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          sx={{
            color: index < rating ? '#FFD700' : '#E0E0E0',
          }}
        />
      ))}
    </Box>
  );
};

const TestimonialsN: React.FC = () => {
  const testimonials = [
    {
      clientImageSrc: 'https://via.placeholder.com/60',
      clientName: 'Fatima Mary',
      clientRole: 'Google Review',
      testimonial:
        'I cannot thank the team at Deccan Progressive Reality enough for their exceptional service! From helping me find the perfect home to negotiating a great deal, they were with me every step of the way. Highly recommend their services to anyone in need of expert real estate advice.',
      rating: 5,
    },
    {
      clientImageSrc: 'https://via.placeholder.com/60',
      clientName: 'Vincent Thyagarajan',
      clientRole: 'Google Review',
      testimonial:
        'I\'ve worked with several real estate agents in the past, but none compare to the service I received from Deccan Progressive Realty. Their proactive approach, attention to detail, and market knowledge truly set them apart. I highly recommend their services to anyone in need of reliable real estate advice.',
      rating: 4,
    },
    {
      clientImageSrc: 'https://via.placeholder.com/60',
      clientName: 'Malla Reddy',
      clientRole: 'Google Review',
      testimonial:
        'I was referred to Deccan Progressive Realty by a friend, and I\'m so grateful for the recommendation. Their team\'s professionalism and expertise made the home buying process smooth and enjoyable. They listened to my needs and found me the perfect property. I couldn\'t be happier with the outcome.',
      rating: 5,
    },
    {
      clientImageSrc: 'https://via.placeholder.com/60',
      clientName: 'Carolyn Mary',
      clientRole: 'Google Review',
      testimonial:
        'Working with Deccan Progressive Realty was a breeze! Their knowledge of the local market and attention to detail made the buying process seamless. I appreciated their professionalism and dedication to finding me the right property. Thank you!',
      rating: 4,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4, bgcolor: 'white', color: 'white' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Testimonial slider */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ mb: 2, mt: 6, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              What Our Clients Say
            </Typography>

            {/* Add overflow hidden to the slider container */}
            <Box
              sx={{
                overflow: 'hidden',  // Prevents overflow from testimonials
                width: '100%',       // Ensure the container spans the full width
                textAlign: 'center',
                mt: 6,
              }}
            >
              <Slider {...sliderSettings}>
                {testimonials.map((testimonial, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: { xs: 2, md: 4 },  // Adjust the padding for better spacing
                      width: { xs: '100%', md: '550px' },  // Make sure each testimonial takes up its own space
                      boxSizing: 'border-box',     // Ensures padding is included in the width
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: 'rgba(0, 0, 0, 0.05)',
                        position: 'absolute',
                        top: '-30px',
                        left: '-10px',
                        zIndex: -1,
                      }}
                    >
                      &rdquo;
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: '1rem', md: '1rem' },
                        marginBottom: 2,
                        whiteSpace: 'normal',  // Allow text to wrap within the slide
                        textAlign: 'justify',  // Ensure the text is readable and fits properly
                        overflow: 'hidden',    // Make sure the text does not overflow outside its box
                        padding: { xs: '10px', md: '20px' },
                      }}
                    >
                      {testimonial.testimonial}
                    </Typography>

                    <StarRating rating={testimonial.rating} />
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar
                        src={testimonial.clientImageSrc}
                        alt={testimonial.clientName}
                        sx={{ width: 50, height: 50, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                          {testimonial.clientName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'gray', fontSize: '0.8rem' }}>
                          {testimonial.clientRole}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>

          </Grid>

          {/* Right side - Images */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              {/* Large image with polygon and shine effect */}
              <Box
                sx={{
                  mb: 6,
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px 0 20px 20px',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                  '&:hover .shine': {
                    transform: 'translateX(100%)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={Testimo.testimonialN}
                  alt="Property"
                  sx={{
                    width: { xs: '100%', md: '80%' }, // Full width on mobile
                    height: { xs: 'auto', md: '80%' }, // Auto height on mobile
                    display: 'block',
                    borderRadius: '10px',
                  }}
                />
                {/* Shining layer for large image */}
                <Box
                  className="shine"
                  sx={{
                    content: '""',
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

              {/* Small image with polygon and shine effect */}
              <Box
                sx={{
                  width: { xs: '60%', md: '40%' }, // Adjust size for mobile
                  position: 'absolute',
                  bottom: -50,
                  right: -30,
                  borderRadius: '10px',
                  animation: `${bounceAnimation} 2s infinite`,
                  overflow: 'hidden',
                  clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                  '&:hover .shine': {
                    transform: 'translateX(100%)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={Testimo.testimonialN1}
                  alt="Interior"
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    borderRadius: '10px',
                  }}
                />
                {/* Shining layer for small image */}
                <Box
                  className="shine"
                  sx={{
                    content: '""',
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsN;
