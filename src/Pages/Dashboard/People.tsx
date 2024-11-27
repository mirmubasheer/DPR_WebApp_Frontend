import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton, Container } from '@mui/material';
import { Star, FormatQuote } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Leslie Alexander',
    company: 'Nintendo',
    text: 'Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Floyd Miles',
    company: 'Bank of America',
    text: 'Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    name: 'Dianne Russell',
    company: 'Facebook',
    text: 'Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. And we didn’t on our original designs.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Arlene McCoy',
    company: 'Microsoft',
    text: 'The performance is outstanding, and the team provides excellent support whenever we need it. I’m absolutely delighted with the product!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    name: 'Marvin McKinney',
    company: 'Spotify',
    text: 'Great design with seamless functionality. The team exceeded my expectations and delivered on time. I highly recommend their services.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Eleanor Pena',
    company: 'Netflix',
    text: 'The quality of service was exceptional. They helped us improve our processes, and the design exceeded all expectations.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const People: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4, mt: { xs: 6, sm: 0 } }}>
      <Container sx={{ height: 'auto' }}>
        <Box sx={{ py: 6, px: 3, textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '16px', md: '22px' },
              mb: 1,
            }}
          >
            People Love Living with Realton
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#999', fontSize: { xs: '12px', md: '14px' }, mb: 6 }}
          >
            Aliquam lacinia diam quis lacus
          </Typography>

          {/* Testimonial Section */}
          <Grid container spacing={3} justifyContent="center">
            {visibleTestimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ fontSize: { xs: '14px', md: '16px' } }}
                    >
                      Great Work
                    </Typography>
                    <FormatQuote sx={{ fontSize: 40, color: '#f8d7da' }} />
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '12px', md: '14px' } }}
                    >
                      {testimonial.text}
                    </Typography>
                    <FormatQuote sx={{ fontSize: 40, color: '#f8d7da' }} />

                    <Box sx={{ mb: 2 }}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} sx={{ color: '#ffb400', fontSize: { xs: 18, md: 20 } }} />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 48, height: 48, mr: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 400, fontSize: { xs: '12px', md: '14px' } }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ fontSize: { xs: '10px', md: '12px' } }}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Carousel Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <IconButton onClick={handlePrevClick}>
              <ArrowBackIosNewIcon />
            </IconButton>
            {testimonials.map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: currentIndex === i ? '#ffb400' : '#ccc',
                  mx: 0.5,
                }}
              />
            ))}
            <IconButton onClick={handleNextClick}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default People;
