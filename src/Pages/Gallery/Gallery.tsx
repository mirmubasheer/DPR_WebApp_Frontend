import React, {useState} from 'react';
import { Box, Typography, Button, Container, Card } from "@mui/material";
import Slider from "react-slick"; // slick-carousel is used for the slider
import EastIcon from '@mui/icons-material/East';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { tiles } from './GalleryData';
const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

// Settings for the outer tile slider
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: isMobile ? 1 : 2, // Show 1 slide on mobile, 2 on larger screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: false,
};

// Settings for the inner small image slider
const smallSliderSettings = {
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  centerMode: false,
};
  // const smallSliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1, // Show one image at a time
  //   slidesToScroll: 1,
  //   centerMode: false, // Disable center mode to avoid showing part of the next image
  // };
  



  

  const handleNavigate = (id: any) => {
    navigate(`/gallery/${id}`); 
  };
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 12, lg: 12 }, py: 2, bgcolor: '#30779d', height: '900px' }}>
      <Container>
        <Typography variant="h3" color="white" textAlign="center" mb={3}>
          Our Works
        </Typography>
        <Slider {...settings}>
          {tiles.map((tile, index) => {
            const isHovered = hoveredCardIndex === index;

            return (
              <div key={index}>
                <Box
                  sx={{
                    height: '800px',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: '20px',
                    justifyContent: 'center',
                    // padding: '10px',
                    
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      padding: '20px',
                      backgroundColor: 'transparent',
                      borderRadius: 3,
                      height: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      width: '500px',
                      cursor:'pointer'
                    }}

                  >
                    <Card
                      sx={{
                        padding: '8px',
                        height: '400px',
                        width: '100%',
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                        position: 'relative',
                        overflow: 'hidden',
                        clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                      }}
                      onMouseEnter={() => setHoveredCardIndex(index)} // Set hovered card index
                      onMouseLeave={() => setHoveredCardIndex(null)} // Reset hovered card index
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          position: 'absolute',
                          top: isHovered ? '50%' : '10px', // Move title to center when hovered
                          left: '50%', // Center horizontally
                          transform: isHovered ? 'translate(-50%, -50%)' : 'translate(-50%, 0)', // Center the title
                          color: 'white',
                          zIndex: 2,
                          transition: 'top 0.2s ease, transform 0.2s ease', // Smooth transition
                        }}
                      >
                        {tile.title}
                      </Typography>

                      <Slider {...smallSliderSettings}>
                        {tile.smallImages.map((image, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              position: 'relative',
                              height: '400px',
                              width: '100%',
                              overflow: 'hidden', 
                              margin: '0 10px',
                              clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                            }}
                          >
                            <img
                              src={image}
                              alt={`Tile ${idx}`}
                              style={{
                                width: 'calc(100% - 20px)',
                                height: '100%',
                                margin: 'auto',
                              }}
                            />
                            <Box
                              className="overlay"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '&:hover': {
                                  opacity: 1,
                                },
                              }}
                            >
                             <Box
                                sx={{
                                  position: 'absolute',
                                  bottom: 0, 
                                  left: isMobile ? '50%' : 0, 
                                  transform: isMobile ? 'translateX(-50%)' : 'none', 
                                  display: 'flex', 
                                  alignItems: isMobile ? 'center' : 'flex-start',
                                  justifyContent: isMobile ? 'center' : 'flex-start', 
                                  padding: '16px',
                                  width: isMobile ? '100%' : 'auto', 
                                }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: 'yellow',
                                    color: 'black',
                                    '&:hover': {
                                      backgroundColor: 'darkgoldenrod',
                                    },
                                  }}
                                  onClick={() => handleNavigate(tile.id)}
                                  endIcon={<EastIcon />}
                                >
                                  See More Work
                                </Button>
                              </Box>
                            </Box>
                          </Box>
                        ))}
                      </Slider>
                    </Card>
                  </Box>
                </Box>
              </div>
            );
          })}
        </Slider>
      </Container>
    </Box>
  );
};

export default Gallery;