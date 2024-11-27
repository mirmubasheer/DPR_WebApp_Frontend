
import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { MdArrowOutward } from "react-icons/md";



const Map: React.FC = () => {
  return (
    <Box sx={{background:'white'}}>

      <Box 
      sx={{
        position: 'relative', 
        width: '100%',
        height: '450px',
        marginTop: '10px',
        overflow: 'hidden',
      }}
    >
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.04974648455!2d78.401675!3d17.4111908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973180e2f643%3A0xc49980f17ee4d523!2sDeccan%20Progressive%20Realty%20LLP.!5e0!3m2!1sen!2sin!4v1727783667063!5m2!1sen!2sin"
      width="100%"
        height="550"
        allowFullScreen
        loading="lazy" 
        >

      </iframe>
      <img src="" alt="" />
    </Box>   
    
    </Box>
  )
}

export default Map