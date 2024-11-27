import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';
import blogsmall from '../../assets/images/blogsmall.jpg'; 
import Link from '@mui/material/Link';
import {blogsmalls} from '../../assets'

const blogPosts = [
  {
    title: "How Hyderabad’s IT Boom is Driving Real Estate Demand in 2024",
    date: "11 Dec 2024",
    image: blogsmalls,
  },
  // {
  //   title: "Exploring the Best Coffee Shops",
  //   date: "10 Aug 2022",
  //   image: blogsmall,
  // },
  // {
  //   title: "Travel Guide: Discover Hidden Gems",
  //   date: "15 Sep 2022",
  //   image: blogsmall,
  // }
];

const LatestBlogs: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '30px',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box textAlign='start'>
        <h4>Latest Posts</h4>
      </Box>

      {blogPosts.map((post, index) => (
        <Paper
          key={index}
          sx={{
            marginBottom: 3,
            boxShadow: 'none',
            borderRadius: '10px',
          }}
        >
          <Grid
            container
            spacing={2} // Adds space between the Grid items
            alignItems="center" // Vertically center the content
            sx={{ flexDirection: { xs: 'row', sm: 'row' } }} // Ensure flex direction is row for all sizes
          >
            {/* Image Section */}
            <Grid item xs={4} sm={4}> {/* Adjust width for different screen sizes */}
              <ButtonBase>
                <img
                  alt={post.title}
                  src={post.image}
                  style={{
                    width: '100%', // Allow the image to take full width of the grid cell
                    height: 'auto', // Maintain aspect ratio
                    borderRadius: '10px',
                    objectFit: 'cover' // Cover to fill the space
                  }} 
                />
              </ButtonBase>
            </Grid>

            {/* Text Section */}
            <Grid item xs={8} sm={8}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Link
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '14px', 
                      fontWeight: '600',
                      marginBottom: '8px',
                    }}
                  >
                    {post.title}
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: { xs: '0.7rem', lg: '0.7rem' } }}>
                    {post.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default LatestBlogs;
