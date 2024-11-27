import React from 'react'
import {Box,Container} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import blog from '../../assets/images/blog.jpg'; 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import BlogPagination from './BlogPagination';
import TopHeading from '../../components/Top/TopHeading';
import SearchBar from './SearchBar';
import Categories from './Categories';
import PopularTags from './PopularTags';
import LatestBlogs from './LatestBlogs';
import {blogcontent} from '../../assets';


const blogPosts = [
  {
    
    // title: "Home Improvement",
    subTitle: "How Hyderabad’s IT Boom is Driving Real Estate Demand in 2024",
    description: "Hyderabad, often referred to as “Cyberabad” due to its rapid growth in the IT sector, has swiftly become one of India’s leading technology hubs. This transformation has had a profound impact on the city’s real estate market, positioning it as a prime destination for both investors and homebuyers. ",
    date: { month: "Dec", day: 11 },
    image: blogcontent
  },
  // {
  //   title: "Home Improvement",
  //   subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
  //   description: "Curabitur aliquis nibhquamamet intey rdum. when an unknown printer took a galley of type and scrambled it to make a type specimen are book has survived not only.",
  //   date: { month: "July", day: 28 },
  //   image: blog,
  // },
  // {
  //   title: "Home Improvement",
  //   subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
  //   description: "Curabitur aliquis nibhquamamet intey rdum. when an unknown printer took a galley of type and scrambled it to make a type specimen are book has survived not only.",
  //   date: { month: "July", day: 28 },
  //   image: blog,
  // },
  // {
  //   title: "Home Improvement",
  //   subTitle: "Regain Your Garage: Simple Tricks for Getting Organized",
  //   description: "Curabitur aliquis nibhquamamet intey rdum. when an unknown printer took a galley of type and scrambled it to make a type specimen are book has survived not only.",
  //   date: { month: "July", day: 28 },
  //   image: blog,
  // },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const BlogItem1 = styled('div')({
  cursor: 'pointer',
  '&:hover': {
    color:'#30779d',
  },
});

const BlogItems:React.FC = () => {
  const navigate = useNavigate();

  // Navigation handler
  // const handleNavigation = (path: string) => {
  //   navigate(path);
  // };
  const handleNavigation = (id: string) => {
    navigate(`/blog/${id}`);
  };
  return (
   

    <Container>

    <Grid container spacing={6} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
      <Grid item xs={12} md={8} mt={6}>
        {/* Map through blogPosts array */}
        {blogPosts.map((post, index) => (
          <Box key={index} mt={index > 0 ? 4 : 0} >
            <Card>
              <Box sx={{ position: 'relative' ,cursor: 'pointer'}} onClick={() => handleNavigation((index + 1).toString())}>
                <CardMedia
                  component="img"
                  image={post.image}  
                  alt="blog image"
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1) rotate(-1deg)',
                      background: 'white',
                    },
                  }}
                />

                <Typography
                  variant="caption"
                  sx={{
                    position: 'absolute',
                    bottom: -50,
                    left: '90%',
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
                <Box sx={{ textAlign: 'left', color: '#BEBDBD' }}>
                  {/* <h4>{post.title}</h4> */}
                </Box>
                <BlogItem1 onClick={() => handleNavigation((index + 1).toString())} sx={{ fontSize: "12px" }}>
                  <h2>{post.subTitle}</h2>
                </BlogItem1>
                <Typography variant="caption" sx={{ color: 'text.secondary',fontSize: { xs: '0.775rem', lg: '0.87rem' } }}>
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}

        <Box mt={4}>
          <BlogPagination />
        </Box>
      </Grid>

      
      <Grid item xs={12} md={4}  mt={6}>
        <Box>
          <SearchBar />
        </Box>
        <Box mt={4}>
          <Categories />
        </Box>
        <Box mt={4} >
          <LatestBlogs/>
        </Box>
        <Box mt={4} mb={4}>
          <PopularTags />
        </Box>
      </Grid>
    </Grid>
    </Container>

  )
}

export default BlogItems