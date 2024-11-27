import React from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius:'30px',
  border:'1px solid black',
  boxShadow:'none',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const PopularTags:React.FC = () => {
  return (
    <Box sx={{ background:'white',padding:'30px',borderRadius:'20px' }} >
      <Box sx={{textAlign:'start',}}>
        <h4>Popular Tags</h4>
      </Box>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
      <Grid item xs={6}>
        <Item>
        <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >For Sale</Link>

        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          
        <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >Houses</Link>
        </Item>
      </Grid>
      {/* <Grid item xs={6}>
        <Item>

          <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >Realton</Link>
        </Item>

      </Grid> */}
      <Grid item xs={6}>
        <Item>
          <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >Apartments</Link>
          
        </Item>
        
      </Grid>
      <Grid item xs={6}>
        <Item>

          <Link href="#" sx={{textDecoration:'none',color:"black",fontSize:'15px', fontWeight:'300', marginBottom:'8px'}} >Villa</Link>
        </Item>

      </Grid>
    </Grid>
  </Box>
  )
}

export default PopularTags
