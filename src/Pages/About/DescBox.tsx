import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface DescBoxProps {
  description: string;
  visible: boolean;
  hoverPosition: { top: number; left: number };
}

const DescBox: React.FC<DescBoxProps> = ({ description, visible, hoverPosition }) => {
  return (
    <Box
      sx={{
        display: visible ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: 'white',
        padding: { xs: '8px', sm: '10px' }, // Adjust padding for smaller screens
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        top: hoverPosition.top,
        left: hoverPosition.left,
        zIndex: 10,
        width: { xs: '150px', sm: '200px' }, // Responsive width
        border: '2px solid #30779d',
        transform: 'translate(-50%, -100%)',
      }}
    >
      <Typography 
        variant="caption" 
        sx={{ color: 'black', fontSize: { xs: '0.7rem', sm: '0.8rem' } }} // Responsive font size
      >
        {description}
      </Typography>
    </Box>
  );
};

export default DescBox;
