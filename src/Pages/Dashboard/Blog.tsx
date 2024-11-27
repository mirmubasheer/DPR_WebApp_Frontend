import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: "Private Contemporary Home Balancing Openness",
    date: "July 28",
    category: "Living Room",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 2,
    title: "Private Contemporary Home Balancing Openness",
    date: "July 28",
    category: "Living Room",
    image: "https://via.placeholder.com/400x300",
  },
  {
    id: 3,
    title: "Private Contemporary Home Balancing Openness",
    date: "July 28",
    category: "Living Room",
    image: "https://via.placeholder.com/400x300",
  },
];

const Blog = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4 }}>
      <Container sx={{ height: 'auto' }}>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            From Our Blog
          </Typography>
          <Typography variant="body2" align="center" sx={{ marginBottom: 4 }}>
            Aliquam lacinia diam quis lacus euismod
          </Typography>
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={4} key={post.id}>
                <Card 
                  sx={{ 
                    boxShadow: 3, 
                    borderRadius: 2, 
                    overflow: 'hidden', 
                    position: 'relative',
                    height: '470px', // Increased overall height of the card
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300" // Keep this height to allow space for content below
                    image={post.image}
                    alt={post.title}
                    sx={{
                      transition: 'transform 0.3s ease', // Smooth transition
                      '&:hover': {
                        transform: 'scale(1.1)', // Zoom effect
                      },
                    }}
                  />
                  {/* Overlay for date */}
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{
                      position: 'absolute',
                      top: 270, // Positioned towards the bottom
                      right: 5,
                      backgroundColor: 'white',
                      padding: '4px 8px',
                      borderRadius: 1,
                    }}
                  >
                    {post.date}
                  </Typography>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                      {post.category}
                    </Typography>
                    <Typography variant="caption" component="div">
                      {post.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
