import React from 'react'
import {Box,Container, Typography} from '@mui/material'
import {blogbanner,singleblogauthor,user} from '../../../assets';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
// import singleblogauthor from '../../assets/images/singleblogauthor.png'


const Banner:React.FC = () => {
  return (
    <Box>

        <Container >
            <Box mt={7} textAlign='start'>
                <Typography variant='h4' component='div' sx={{  fontWeight: '600', color: 'primary.main' }}>
                How Hyderabad’s IT Boom is Driving Real Estate Demand in 2024
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '15px', // Add some space between the items if needed
                alignItems: 'center', // To align items vertically centered if they are of different heights
                }}
                mt={2}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Align items vertically centered */}
                        <img 
                            src={user} 
                            alt="Leslie Alexander" 
                            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} 
                        /> {/* Add margin-right to create space between the image and text */}
                        
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Typography variant='body2' sx={{ color: 'black', pr: 2, borderRight: '2px solid #ccc' }}>
                            Shekar
                            </Typography>
                        </Link>
                    </Box>


                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography variant='body2' sx={{ color: 'black',pr: 2, borderRight: '2px solid #ccc' }}>
                    Shekar
                    </Typography>
                </Link>

                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Typography variant='body2' sx={{ color: 'black',pr: 2, borderRight: '2px solid #ccc' }}>
                    December 11, 2024
                    </Typography>
                </Link>
            </Box>
            

        </Container>
        <Box 
    sx={{ 
        width: '100%', 
        overflow: 'hidden', 
        mt: 7, 
        height: { 
            xs: '300px', // Mobile view height
            md: '500px'  // Desktop view height
        } 
    }}
>
    <img
        src={blogbanner}
        alt=""
        style={{ width: '100%', height: '100%' }}
    />
</Box>

    </Box>
  )
}

export default Banner