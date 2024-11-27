// HomeSeekarForm.tsx

import React from 'react';
import { TextField, DialogContent, DialogActions, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';
import { useMutation } from 'react-query';
import { AddLead } from '../../api/services';
import { toast } from 'react-toastify';

interface HomeSeekarFormProps {
  formData: {
    name: string;
    phoneNumber: string;
    email: string;
    message?: string;
    iAgree: boolean;
    homeLoan: boolean;  
  };
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: () => void;
  handleCloseForm: () => void;
}

const HomeSeekarForm: React.FC<HomeSeekarFormProps> = ({
  formData,
  handleFormChange,
  handleSubmitForm,
  handleCloseForm,
}) => {
  const mutation = useMutation(AddLead, {
    onSuccess: () => {
      toast.success('Successfully submitted!');
      // resetForm();
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
  });


  const submitForm = () => {
    const temp = { ...formData, type: 'contact' };
    mutation.mutate(temp);
  };




  return (
    <DialogContent>
      <Typography variant='h6' color='primary' mt={1}> If You Are a Home Seeker </Typography>
      <Typography variant='caption' paragraph   mt={1} mb={1} sx={{
        textAlign:'justify'
      }}>
      Your search for the perfect home ends here at DPR. With curated property options tailored to your needs, we simplify the journey from exploration to ownership. Whether it’s location, budget, or lifestyle, our platform ensures you find a home that fits your vision. Let us guide you to a decision you’ll cherish for years to come.

      </Typography>
      <CustomInput
        name="name"
        placeholder="Your Name"
        fullWidth
        value={formData.name}
        onChange={handleFormChange}
        required
        sx={{ mb: 2 }}
      />
      <CustomInput
        name="phoneNumber"
        placeholder="Mobile Number"
        fullWidth
        value={formData.phoneNumber}
        onChange={handleFormChange}
        required
        sx={{ mb: 2 }}
      />
      <CustomInput
        name="email"
        placeholder="Your Email"
        fullWidth
        value={formData.email}
        onChange={handleFormChange}
        required
        sx={{ mb: 2 }}
      />
      <CustomInput
        name="message"
        placeholder="Message"
        fullWidth
        value={formData.message}
        onChange={handleFormChange}
        required
        multiline
        rows={4}
      />
      {/* Checkboxes */}
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.iAgree}
            onChange={handleFormChange}
            name="iAgree"
            color="primary"
          />
        }
        label={
          <Typography variant="body2" style={{ fontSize: '14px' }}>
            I agree to be contacted by Housing and agents via WhatsApp, SMS, phone, email etc
          </Typography>
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.homeLoan}
            onChange={handleFormChange}
            name="homeLoan"
            color="primary"
          />
        }
        label={
          <Typography variant="body2" style={{ fontSize: '14px' }}>
            I am interested in Home Loans
          </Typography>
        }
      />  

      {mutation.isLoading && <Typography>Submitting...</Typography>}
      {mutation.isError && <Typography color="error">Submission failed. Please try again.</Typography>}
      {mutation.isSuccess && <Typography color="primary">Form submitted successfully!</Typography>}

      <DialogActions>
        <Button onClick={handleCloseForm}>Cancel</Button>
        <Button onClick={submitForm} color="primary" disabled={mutation.isLoading}>
          Submit
        </Button>
      </DialogActions>
    </DialogContent>
  );
};

export default HomeSeekarForm;
// function resetForm() {
//   throw new Error('Function not implemented.');
// }

