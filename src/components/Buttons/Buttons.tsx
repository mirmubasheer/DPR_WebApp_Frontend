import { Button, Typography } from '@mui/material';

export const ContainedButton = ({ Title, type }: any) => {
  return (
    <Button
      sx={{
        height: '40px',
        width: 'auto',
        background: '#7643EB',
        borderRadius: '8px',
        opacity: 1,
        padding: '0px 30px',
        color: 'white',
        '&:hover': {
          backgroundColor: '#5C2EB8', 
        },
      }}
      variant="contained"
      type={type}
    >
      <Typography variant="body1" sx={{ color: 'white' }}>
        {Title}
      </Typography>
    </Button>
  );
};
