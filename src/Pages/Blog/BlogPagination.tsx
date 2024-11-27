import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box,Container } from '@mui/material';

const BlogPagination:React.FC = () => {
  return (
    <Container className='container'> 
    <Box sx={{display:'flex',justifyContent:'center', alignItems:'center'}}>
      <Stack spacing={2}>
        {/* Correct usage of Pagination with count and color */}
        <Pagination count={1} color="primary" />
      </Stack>
    </Box>

    </Container>
  )
}

export default BlogPagination