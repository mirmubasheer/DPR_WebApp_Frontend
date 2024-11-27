import React, { useState } from 'react';
import { Box, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CustomInput from '../../../../../components/Inputs/CustomInput'; // Assuming you saved your CustomInput component in the same directory

const ScheduleForm: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agreeToTerms: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, agreeToTerms: event.target.checked }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Tour Request submitted:', formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        width: '100%',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* Title */}
      <Typography variant="h6" component="h1" gutterBottom sx={{ fontSize: { xs: '20px', md: '24px' } }}>
        Schedule a tour
      </Typography>

      {/* Subtext */}
      <Typography variant="body2" sx={{ marginBottom: '20px', fontSize: { xs: '14px', md: '16px' } }}>
        Choose your preferred day
      </Typography>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '100%',
          fontSize: { xs: '14px', md: '16px' }, // Adjusted font size
        }}
      >
        {/* Name Field */}
        <CustomInput
          id="name"
          name="name"
          placeholder="Name"
          fullWidth
          required
          value={formData.name}
          onChange={handleInputChange}
        />

        {/* Phone Field */}
        <CustomInput
          id="phone"
          name="phone"
          placeholder="Phone"
          fullWidth
          required
          value={formData.phone}
          onChange={handleInputChange}
        />

        {/* Email Field */}
        <CustomInput
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          fullWidth
          required
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* Message Field */}
        <CustomInput
          id="message"
          name="message"
          placeholder="Enter Your Message"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
        />

        {/* Checkbox for Terms */}
        <FormControlLabel
          control={
            <Checkbox
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleCheckboxChange}
            />
          }
          label="I agree to Terms of Use"
          sx={{ fontSize: { xs: '14px', md: '16px' } }} // Adjusted font size
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="error"
          type="submit"
          fullWidth
          endIcon={<SendIcon />}
          sx={{ padding: '12px 0', fontWeight: 'bold', fontSize: { xs: '14px', md: '16px' } }} // Adjusted font size
        >
          Submit a Tour Request
        </Button>
      </Box>
    </Box>
  );
};

export default ScheduleForm;
