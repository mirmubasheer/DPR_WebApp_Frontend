// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import { Container, Grid, Typography, Button } from '@mui/material';
// import { Team } from '../../assets';

// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import XIcon from '@mui/icons-material/X';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { useNavigate } from 'react-router-dom';

// const agents = [
//   {
//     image: Team.agentsImage1,
//     title: "Rajiv Williams",
//     subTitle: "Real Estate Mentor",
//     whatsapplink: 'https://wa.me/9885420885',
//     facebook: 'https://www.facebook.com/Rajivwilliams',
//     instagram: 'https://www.instagram.com/williams_rajiv/',
//     twitter: 'https://twitter.com/RajivWilliams',
//     linkedin: 'https://www.linkedin.com/in/rajivwilliams/',
//     website: 'https://rajivwilliams.com/',
//   },
//   {
//     image: Team.agentsImage2,
//     title: "Irshad Baig",
//     subTitle: "Director",
//     whatsapplink: 'https://wa.me/9705244786',
//     facebook: 'https://www.facebook.com/mohammed.i.baig',
//     instagram: 'https://www.instagram.com/irshadjaan.123/',
//     twitter: '',
//     linkedin: 'https://www.linkedin.com/in/mohammed-irshad-baig-real-estate/',
//     website: '/',
//   },
//   // {
//   //   image: Team.agentsImage3,
//   //   title: "Priyanka Panda",
//   //   subTitle: "Brand Strategist",
//   //   whatsapplink: 'https://wa.me/7606907551',
//   //   facebook: 'https://www.facebook.com/profile.php?id=61561520102438',
//   //   instagram: 'https://www.instagram.com/_priyankapanda/',
//   //   twitter: '',
//   //   linkedin: 'https://www.linkedin.com/in/priyanka-panda-238451259/',
//   //   website: '/',
//   // },
// ];

// const OurTeam: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const navigate = useNavigate();

//   const handleNavigate = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <Box sx={{ padding: '30px 0' }}>
//       <Container>
//         <h1>Our Team</h1>
//         <Typography variant="caption" sx={{fontSize: { xs: '0.875rem', lg: '0.875rem' }}}>
//           Three dedicated experts ready to guide you in your real estate journey.
//         </Typography>
//         <Box>
//           <Grid container spacing={4} mt={1} pb={8}>
//             {agents.map((agent, index) => (
//               <Grid
//                 item
//                 xs={12}
//                 sm={6}
//                 md={4}
//                 key={index}
//                 textAlign="center"
//                 sx={{ position: 'relative' }}
//               >
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     overflow: 'hidden',
//                     transition: 'transform 0.4s ease-in',
//                     '&:hover .product-detail': {
//                       height: '93%',
//                       paddingTop: '20px',
//                     },
//                   }}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   <img
//                     src={agent.image}
//                     alt={agent.title}
//                     style={{
//                       width: '100%',
//                       height: 'auto',
//                       borderRadius: '20px 0 20px 20px',
//                       clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
//                     }}
//                   />
//                   <Box
//                     className="product-detail"
//                     sx={{
//                       position: 'absolute',
//                       height: '90px',
//                       left: '20px',
//                       right: '20px',
//                       bottom: '20px',
//                       overflow: 'hidden',
//                       padding: '20px',
//                       backgroundColor: 'rgba(28, 45, 55, 0.55)',
//                       textAlign: 'center',
//                       boxSizing: 'border-box',
//                       backdropFilter: 'blur(4px)',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'space-between',
//                       borderRadius: '20px 20px 20px 20px',
//                       clipPath: 'polygon(0 0, 93% 0, 100% 20%, 100% 100%, 0 100%)',
//                       transition: 'all 0.36s ease-in',
//                       '&:hover': {
//                         borderRadius: '20px 20px 20px 20px',
//                         clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
//                       },
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
//                       <Box>
//                         <Typography variant="h6" sx={{ color: 'white', margin: '3px 0',fontSize: { xs: '0.875rem', lg: '1rem' } }}>
//                           {agent.title}
//                         </Typography>
//                         <Typography variant="caption" sx={{ color: 'white',fontSize: { xs: '0.7rem', lg: '0.8rem' } }}>
//                           {agent.subTitle}
//                         </Typography>
//                       </Box>
//                       <Box>
//                         <a href={agent.whatsapplink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', background: '#30779d', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                           <WhatsAppIcon />
//                         </a>
//                       </Box>
//                     </Box>


//                     {/* Social Media Icons */}
//                     {hoveredIndex === index && (
//                       <Box sx={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
//                         {/* Social Media Icons */}
//                         <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
//                           <a href={agent.facebook} target="_blank" rel="noopener noreferrer">
//                             <FacebookIcon sx={{ color: 'white', cursor: 'pointer' }} />
//                           </a>
//                           <a href={agent.instagram} target="_blank" rel="noopener noreferrer">
//                             <InstagramIcon sx={{ color: 'white', cursor: 'pointer' }} />
//                           </a>
//                           {agent.twitter && (
//                             <a href={agent.twitter} target="_blank" rel="noopener noreferrer">
//                               <XIcon sx={{ color: 'white', cursor: 'pointer' }} />
//                             </a>
//                           )}
//                           <a href={agent.linkedin} target="_blank" rel="noopener noreferrer">
//                             <LinkedInIcon sx={{ color: 'white', cursor: 'pointer' }} />
//                           </a>
//                         </Box>

//                         {/* Website Button */}
//                         <Box sx={{ marginBottom: '10px' }}>
//                           <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
//                             <button style={{ background: '#30779d', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
//                               Visit Website
//                             </button>
//                           </a>
//                         </Box>
//                       </Box>
//                     )}

//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default OurTeam;







import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import { Team } from '../../assets';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const agents = [
  {
    image: Team.agentsImage1,
    title: "Rajiv Williams",
    subTitle: "Real Estate Mentor",
    whatsapplink: 'https://wa.me/9885420885',
    facebook: 'https://www.facebook.com/Rajivwilliams',
    instagram: 'https://www.instagram.com/williams_rajiv/',
    twitter: 'https://twitter.com/RajivWilliams',
    linkedin: 'https://www.linkedin.com/in/rajivwilliams/',
    website: 'https://rajivwilliams.com/',
    description: "Mr. Rajiv Williams is a renowned best real estate mentor in Hyderabad with over 14 years of expertise in marketing, sales, brand strategy, leadership mentoring, and go-to-market strategies. As a licensed RERA Realtor, HRA & NAR India member, and entrepreneur, he has distinguished himself in the industry. An MBA in International Business from California, USA, his strong academic background enhances his credibility."
  },
  {
    image: Team.agentsImage2,
    title: "Irshad Baig",
    subTitle: "Director",
    whatsapplink: 'https://wa.me/9705244786',
    facebook: 'https://www.facebook.com/mohammed.i.baig',
    instagram: 'https://www.instagram.com/irshadjaan.123/',
    twitter: '',
    linkedin: 'https://www.linkedin.com/in/mohammed-irshad-baig-real-estate/',
    website: '/',
    description: "Mr. Irshad Baig is a seasoned real estate professional with over a decade of experience in the industry. As a Director, he expertly navigates the complexities of real estate management, leveraging his extensive knowledge to lead successful projects. Irshad is dedicated to fostering client satisfaction through innovative strategies and tailored solutions. His commitment to excellence and strategic vision has not only driven the success of numerous projects but has also established him as a trusted leader in the real estate community"
  },
];

const OurTeam: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box sx={{ padding: '30px 0', position: 'relative' }}>
      <Container>
        <h1>Our Team</h1>
        <Typography variant="caption" sx={{ fontSize: { xs: '0.875rem', lg: '0.875rem' } }}>
          Two dedicated experts ready to guide you in your real estate journey.
        </Typography>
        <Box sx={{
          display:
             {
              xs:'none',
              md:'block'
             }
          }}>
          <Grid container spacing={4} mt={1} pb={8}>
            {agents.map((agent, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                textAlign="center"
                sx={{
                  position: 'relative',
                  display: hoveredIndex === null || hoveredIndex === index ? 'block' : 'none',
                  marginLeft: index === 1 ? 'auto' : '0', // Place Irshad's tile to the right
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.4s ease-in',
                    '&:hover .product-detail': {
                      height: '93%',
                      paddingTop: '20px',
                    },
                  }}
                >
                  <img
                    src={agent.image}
                    alt={agent.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '20px 0 20px 20px',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                    }}
                  />
                  <Box
                    className="product-detail"
                    sx={{
                      position: 'absolute',
                      height: '90px',
                      left: '20px',
                      right: '20px',
                      bottom: '20px',
                      overflow: 'hidden',
                      padding: '20px',
                      backgroundColor: 'rgba(28, 45, 55, 0.55)',
                      textAlign: 'center',
                      boxSizing: 'border-box',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: '20px 20px 20px 20px',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                      transition: 'all 0.36s ease-in',
                      
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'white', margin: '4px 0', fontSize: { xs: '0.875rem', lg: '1rem' } }}>
                          {agent.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'white', fontSize: { xs: '0.7rem', lg: '0.8rem' } }}>
                          {agent.subTitle}
                        </Typography>
                      </Box>
                      <Box>
                        <a href={agent.whatsapplink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', background: '#30779d', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <WhatsAppIcon />
                        </a>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                      <a href={agent.facebook} target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                      <a href={agent.instagram} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                      {agent.twitter && (
                        <a href={agent.twitter} target="_blank" rel="noopener noreferrer">
                          <XIcon sx={{ color: 'white', cursor: 'pointer' }} />
                        </a>
                      )}
                      <a href={agent.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                    </Box>
                         {/* Website Button */}
                           <Box sx={{ marginBottom: '10px' }}>
                             <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                               <button style={{ background: '#30779d', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                                 Visit Website
                               </button>
                             </a>
                           </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Display description beside the hovered tile */}
          {hoveredIndex !== null && (
            <Box
              sx={{
                position: 'absolute',
                top: '30%',
                [hoveredIndex === 0 ? 'right' : 'left']: '10%', // Dynamic positioning based on agent index
                width: '40%',
                padding: '20px',
                backgroundColor: 'transparent',
                transition: 'all 0.4s ease',
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                About {agents[hoveredIndex].title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {agents[hoveredIndex].description}
              </Typography>
            </Box>
          )}
        </Box>
        <Box sx={{
          display:
             {
              xs:'block',
              md:'none'
             }
          }}>
          <Grid container spacing={4} mt={1} pb={8}>
            {agents.map((agent, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                textAlign="center"
                // sx={{
                //   position: 'relative',
                //   display: hoveredIndex === null || hoveredIndex === index ? 'block' : 'none',
                //   marginLeft: index === 1 ? 'auto' : '0', 
                // }}
                // onMouseEnter={() => setHoveredIndex(index)}
                // onMouseLeave={() => setHoveredIndex(null)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.4s ease-in',
                    '&:hover .product-detail': {
                      height: '93%',
                      paddingTop: '20px',
                    },
                  }}
                >
                  <img
                    src={agent.image}
                    alt={agent.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '20px 0 20px 20px',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                    }}
                  />
                  <Box
                    className="product-detail"
                    sx={{
                      position: 'absolute',
                      height: '90px',
                      left: '20px',
                      right: '20px',
                      bottom: '20px',
                      overflow: 'hidden',
                      padding: '20px',
                      backgroundColor: 'rgba(28, 45, 55, 0.55)',
                      textAlign: 'center',
                      boxSizing: 'border-box',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      borderRadius: '20px 20px 20px 20px',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)',
                      transition: 'all 0.36s ease-in',
                      
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h6" sx={{ color: 'white', margin: '4px 0', fontSize: { xs: '0.875rem', lg: '1rem' } }}>
                          {agent.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'white', fontSize: { xs: '0.7rem', lg: '0.8rem' } }}>
                          {agent.subTitle}
                        </Typography>
                      </Box>
                      <Box>
                        <a href={agent.whatsapplink} target="_blank" rel="noopener noreferrer" style={{ color: 'white', background: '#30779d', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <WhatsAppIcon />
                        </a>
                      </Box>
                      
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                      <a href={agent.facebook} target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                      <a href={agent.instagram} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                      {agent.twitter && (
                        <a href={agent.twitter} target="_blank" rel="noopener noreferrer">
                          <XIcon sx={{ color: 'white', cursor: 'pointer' }} />
                        </a>
                      )}
                      <a href={agent.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: 'white', cursor: 'pointer' }} />
                      </a>
                    </Box>
                         {/* Website Button */}
                           <Box sx={{ marginBottom: '10px' }}>
                             <a href={agent.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                               <button style={{ background: '#30779d', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
                                 Visit Website
                               </button>
                             </a>
                           </Box>
                    </Box>
                </Box>
                    <Box>
                        <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                            {agent.title}
                        </Typography>
                      <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                        {agent.description}
                      </Typography>
                      </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Container>
    </Box>
  );
};

export default OurTeam;