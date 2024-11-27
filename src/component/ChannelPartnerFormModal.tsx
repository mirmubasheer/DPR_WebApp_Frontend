import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ChannelPartnerFormModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <Box>
      <Typography variant="h6">Channel Partner Form</Typography>
      <Typography variant="body1">Form content goes here...</Typography>
      <Button onClick={onClose}>Close</Button>
    </Box>
  );
};

export default ChannelPartnerFormModal;
