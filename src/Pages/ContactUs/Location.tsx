import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import map from '../../assets/images/map.png'; 
import communication from '../../assets/images/communication.png'; 
import phone from '../../assets/images/phone.png'; 


const Location:React.FC = () => {
  return (

    <Box sx={{ mt: 0, pt: 20, pb:4, bgcolor: 'white' }} className="location">
  <Container sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, mt: -16 }}> {/* Increase negative margin */}
    <Box className='container'>
      <h1>Visit Our Office</h1>
      <h5>Let’s connect enter your details and we’ll be in touch.</h5>
    </Box>

    <Box sx={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }} mt={4}>
      {/* Phone Card */}
      <Box>
        <Card sx={{ width: '320px',height:'230px',
          transition: 'background-color 0.3s, color 0.3s', 
          '&:hover': {
            backgroundColor: '#30779d', 
            color: 'white',
            '& a': {
              color: 'white !important',
            },
            '& img': { 
              filter: 'invert(1)', 
            }
          },
         }}>
          <CardActionArea>
            <CardMedia 
              component="img"
              image={phone}
              alt="phone contact"
              sx={{ width: 'auto', objectFit: 'contain', display: 'inline', paddingTop: '30px' }}
            />
            <CardContent>
              <Box>
                <h3><a href="tel:+91 954 954 6568" style={{ color: 'black', textDecoration: 'none' }}>+91 954 954 6568</a></h3>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      {/* Email Card */}
      <Box>
        <Card sx={{ width: '320px',height:'230px',
         transition: 'background-color 0.3s, color 0.3s', 
         '&:hover': {
           backgroundColor: '#30779d', 
           color: 'white',
           '& a': {
             color: 'white !important',
           },
           '& img': { 
             filter: 'invert(1)', 
           }
         },
          }}>
          <CardActionArea>
            <CardMedia 
              component="img"
              image={communication}
              alt="email contact"
              sx={{ width: 'auto', objectFit: 'contain', display: 'inline', paddingTop: '30px' }}
            />
            <CardContent>
              <Box pb={2} pt={2} sx={{ fontWeight: '700' }}>
                <a href="mailto:info@dprprop.com" style={{ color: 'black', textDecoration: 'none' }}>info@dprprop.com</a>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>

      {/* Address Card */}
      <Box>
        <Card sx={{ width: '320px',height:'230px',
          transition: 'background-color 0.3s, color 0.3s', 
          '&:hover': {
            backgroundColor: '#30779d', 
            color: 'white',
            '& a': {
              color: 'white !important',
            },
            '& img': { 
              filter: 'invert(1)', 
            }
          },
         }}>
          <CardActionArea>
            <CardMedia 
              component="img"
              image={map}
              alt="map location"
              sx={{ width: 'auto', objectFit: 'contain', display: 'inline', paddingTop: '30px' }}
            />
            <CardContent>
              <Box sx={{ fontSize: '12px' }}>
                <h4>Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Film Nagar, Hyderabad, Telangana 500008</h4>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  </Container>
</Box>

  )
}

export default Location
