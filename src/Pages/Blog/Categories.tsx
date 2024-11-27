import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Categories:React.FC = () => {
  return (
    <Box 
    sx={{
        textAlign:'start',
        background:'white',
        padding:'30px',
        borderRadius:'20px'
    }}>
        <h4>Categories</h4>
        <Box sx={{
            display:'flex', 
            flexDirection:"column",
            textAlign:'start', 
            justifyContent:'center',
        
            }}>
            <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >Houses</Link>
            <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}}>Apartments</Link>
            <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}}>Office</Link>
            <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}}>Villa</Link>
            <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}}>Townhome</Link>
        </Box>
    </Box>
  )
}

export default Categories