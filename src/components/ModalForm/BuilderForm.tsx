// BuilderForm.tsx

import React from 'react';
import { TextField, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';
import { toast } from 'react-toastify';
import { AddLead } from '../../api/services';
import { useMutation } from 'react-query';

interface BuilderFormProps {
  formData: {
    name: string;
    phoneNumber: string;
    email: string;
    message?: string;
  };
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: () => void;
  handleCloseForm: () => void;
}

const BuilderForm: React.FC<BuilderFormProps> = ({
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
    const temp = { ...formData, type: 'builder' };
    mutation.mutate(temp);
  };



  return (
    <DialogContent>
      <Typography variant='h6'  color='primary' mt={1}>
      If You Are a Developer or Builder

      </Typography>
      <Typography variant='caption' paragraph   mt={1} mb={1} sx={{
        textAlign:'justify'
      }}>
      Take your projects to the next level with DPR. We empowers you to showcase your developments to a highly targeted audience, driving visibility and sales like never before. With strategic marketing and unmatched reach, we connect you with serious buyers and trusted channel partners. Elevate your brand and maximize your returns with us.

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

export default BuilderForm;
