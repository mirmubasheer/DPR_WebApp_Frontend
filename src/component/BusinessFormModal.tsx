import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface BusinessFormModalProps {
  onClose: () => void;
}

const BusinessFormModal: React.FC<BusinessFormModalProps> = ({ onClose }) => {
  return (
    <Box component="form" noValidate autoComplete="off" className="form-container">
      <Typography variant="h6" gutterBottom>
        Builder/Developer Form
      </Typography>
      <TextField
        required
        fullWidth
        label="Company Name"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label="Contact Person"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label="Email Address"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label="Phone Number"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label="Project Location"
        margin="normal"
      />
      <TextField
        required
        fullWidth
        label="Project Details"
        multiline
        rows={4}
        margin="normal"
      />
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default BusinessFormModal;
