
import React, { useState } from 'react';
import { Box, FormControl, InputAdornment, OutlinedInput, InputLabel,TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const SearchBar:React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };
  return (
    <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems:'center' ,
        justifyContent:'center',
        background:'white',
        padding:'25px',
        borderRadius:'10px'
        }}>
    <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">

      <OutlinedInput
        id="outlined-adornment-search"
        value={searchValue} 
        onChange={handleChange} 
        placeholder="What are you looking for ?"
        sx={{
            border:'2px solid black',
        }}
        inputProps={{
            style: {
              fontSize: '16px', 
            },
          }}
        endAdornment={
          <InputAdornment position="end" >
            <SearchIcon />
          </InputAdornment>
        }
        
      />
    </FormControl>
  </Box>
  )
}

export default SearchBar