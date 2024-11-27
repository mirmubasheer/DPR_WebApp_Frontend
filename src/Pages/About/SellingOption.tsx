import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import  aboutside  from '../../assets/images/aboutside.jpg';
import KeyIcon from '@mui/icons-material/Key';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const SellingOption:React.FC = () => {
  return (


        <Box >
            <Grid container rowSpacing={20} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
                <Grid item xs={12} md={6}
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column',
                    
                }}
                >
                    <Box sx={{
                            textAlign:'start',
                            justifyContent:'center',
                            padding: '0px 76px',
                            '@media (max-width:600px)': {
                               padding:'0px 20px'
                            },
                            
                            }}>

                        <Box sx={{
                            textAlign:'start',
                            
                            }}>
                            <h1>Let’s find the right
                            selling option for you</h1>
                        </Box>
                        <Box sx={{
                            display:'flex',
                            // justifyContent:'center',
                            alignItems:'center',
                            gap: '20px',
                            transition: 'background 0.3s ease', 
                            '&:hover .icon-container': { 
                            backgroundColor: 'black',
                            '& svg': {
                                color: 'white', 
                            }
                            }
                        }}  mt={4}>
                            <Box className="icon-container"
                            sx={{
                                background:'#30779d',
                                width:'50px',
                                height:'50px',
                                borderRadius:'50%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                transition: 'background 0.3s ease', 
                                
                            }}
                            >
                                <LocalPoliceIcon sx={{color:'white',}}/>
                            </Box>
                            <Box sx={{textAlign:'start',}}>
                                {/* <h5>Property Management</h5> */}
                                
                                <Typography variant='caption' sx={{fontWeight:'800', marginBottom:'5px'}} component='div'>
                                    Property Management
                                </Typography>
                                <Box>

                                    <Typography variant='caption' >
                                        Nullam sollicitudin blandit eros eu pretium. <br/>Nullam sollicitudin blandit eros eu pretium. 
                                    </Typography>
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box sx={{
                            display:'flex',
                            // justifyContent:'center',
                            alignItems:'center',
                            gap: '20px',
                            transition: 'background 0.3s ease', 
                            '&:hover .icon-container': { 
                            backgroundColor: 'black',
                            '& svg': {
                                color: 'white', 
                            }
                            }
                        }}  mt={4}>
                            <Box className="icon-container"
                            sx={{
                                background:'#30779d',
                                width:'50px',
                                height:'50px',
                                borderRadius:'50%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                transition: 'background 0.3s ease', 
                                
                            }}
                            >
                                <KeyIcon sx={{color:'white'}}/>
                            </Box>
                            <Box sx={{textAlign:'start'}}>
                                {/* <h5>Mortgage Services</h5> */}
                                <Typography variant='caption' sx={{fontWeight:'800', marginBottom:'5px'}} component='div'>
                                     Mortgage Services
                                </Typography>
                                <Box>

                                    <Typography variant='caption'>
                                        Nullam sollicitudin blandit eros eu pretium. <br/>Nullam sollicitudin blandit eros eu pretium. 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            display:'flex',
                            // justifyContent:'center',
                            alignItems:'center',
                            gap: '20px',
                            transition: 'background 0.3s ease', 
                            '&:hover .icon-container': { 
                            backgroundColor: 'black',
                            '& svg': {
                                color: 'white', 
                            }
                            }
                        }} mt={4}>
                            <Box className="icon-container"
                            sx={{
                                background:'#30779d',
                                width:'50px',
                                height:'50px',
                                borderRadius:'50%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                transition: 'background 0.3s ease', 
                                
                            }}
                            >
                                <CurrencyRupeeIcon sx={{color:'white'}}/>
                            </Box>
                            <Box sx={{textAlign:'start'}}>
                                {/* <h5>Currency Services</h5> */}
                                <Typography variant='caption' sx={{fontWeight:'800', marginBottom:'5px'}} component='div'>
                                    Currency Services
                                </Typography>
                                <Box>

                                    <Typography variant='caption'>
                                        Nullam sollicitudin blandit eros eu pretium. <br/>Nullam sollicitudin blandit eros eu pretium. 
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                
                </Grid>
                <Grid item  xs={12} md={6}>
                    <img src={aboutside} alt="Description" style={{ width: '100%', height: '100%' }}/>
                </Grid>
                
            </Grid>
        </Box>
    
  )
}

export default SellingOption
