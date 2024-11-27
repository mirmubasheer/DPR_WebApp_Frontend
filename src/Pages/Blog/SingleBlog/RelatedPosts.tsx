import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blog } from '../../../assets';
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: "Home Improvement",
    subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
    date: { month: "July", day: 28 },
    image: blog,
  },
  {
    title: "Home Improvement",
    subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
    date: { month: "July", day: 28 },
    image: blog,
  },
  {
    title: "Home Improvement",
    subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
    date: { month: "July", day: 28 },
    image: blog,
  },
];

const BlogItem1 = styled('div')({
  cursor: 'pointer',
  '&:hover': {
    color: '#30779d',
  },
});

const RelatedPosts: React.FC = () => {
  const navigate = useNavigate();

 // Navigation handler
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box mt={6}>
      <Container>
        <Typography variant='h4' sx={{fontWeight:'600'}}>
             Related Posts
        </Typography>
        <Grid container spacing={4} mt={4} mb={4}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box>
                <Card>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt="blog image"
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(-1deg)',
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        bottom: -40,
                        left: '80%',
                        backgroundColor: 'white',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontSize: '12px',
                        zIndex: '1',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                        '@media (max-width:600px)': {
                          left: '77%',
                          bottom: '-31px',
                        },
                      }}
                    >
                      <Box sx={{ fontWeight: '800', padding: '5px' }}>
                        <div>{post.date.month}</div>
                        <div>{post.date.day}</div>
                      </Box>
                    </Typography>
                  </Box>

                  <CardContent sx={{ background: 'white', textAlign: 'left', padding: '30px' }}>
                    <Box sx={{ textAlign: 'left',  }}>
                        <Typography variant='h6'sx={{fontSize: { xs: '0.875rem', md: '0.8rem', color: '#BEBDBD',fontWeight:'600'}}}>
                            {post.title}
                        </Typography>
                      
                    </Box>
                    <BlogItem1 onClick={() => handleNavigation('/blog')} sx={{ fontSize: '12px' }}>
                        <Typography variant='caption'sx={{fontSize: { xs: '0.875rem', md: '0.875rem' }}}>
                            {post.subTitle}
                        </Typography>
                      
                    </BlogItem1>
                    
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RelatedPosts;
