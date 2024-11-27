import React from 'react'
import Box from '@mui/material/Box';
import { Container, Typography,Grid } from '@mui/material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HouseIcon from '@mui/icons-material/House';

const Mission:React.FC = () => {
  return (
    <Box sx={{background:'white'}}>

    <Container >

      <Grid container spacing={8}  pt={6} pb={8}>
        <Grid item xs={12} md={5} textAlign='justify'>
          <Box>
            <h2>We're on a Mission to Change View of Real Estate Field.</h2>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant='caption' sx={{textAlign:'justify'}} component='div' mb={3}>
                It doesn’t matter how organized you are — a surplus of toys will always ensure your house is a mess waiting to happen. Fortunately, getting kids on board with the idea of ditching their stuff is a lot easier than it sounds.
            </Typography>
            <Typography variant='caption' sx={{textAlign:'justify'}} component='div'>
              Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={6} alignItems="center" mt={1}>
              <Grid item xs={12} md={6} textAlign='start'>
                <Box
                sx={{
                  background:'#30779d',
                  width:'50px',
                  height:'50px',
                  borderRadius:'50%',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  transition: 'background 0.3s ease', 
                  '&:hover': {
                    background: 'black',
                    '& svg': { 
                      color: 'white',
                    },
                  }
                }}
                >
                  <HouseIcon sx={{color:'white'}}/>
                </Box>
                {/* <h5>Modern Villa</h5> */}
                <Typography variant='caption' component='div' sx={{fontSize:'10px',fontWeight:'800',margin:'20px 0px 8px'}}>
                  Modern Villa
                </Typography>
                <Typography variant='caption'>
                  Nullam sollicitudin blandit
                  Nullam maximus.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} textAlign='start'>
                <Box
                  sx={{
                    background:'#30779d',
                    width:'50px',
                    height:'50px',
                    borderRadius:'50%',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    transition: 'background 0.3s ease', 
                    '&:hover': {
                      background: 'black',
                      '& svg': { 
                        color: 'white',
                      },
                    }
                  }}
                >
                  <CreditScoreIcon sx={{color:'white'}}/>
                </Box>
                <Typography variant='caption' component='div' sx={{fontSize:'10px',fontWeight:'800',margin:'20px 0px 8px'}}>
                  Secure Payment
                </Typography>
                <Typography variant='caption'>
                  Nullam sollicitudin blandit
                  Nullam maximus.
                </Typography>
              </Grid>

            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}

export default Mission
