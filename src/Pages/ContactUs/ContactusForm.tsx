import React, { useState } from 'react';
import { Box, Button, CircularProgress, Container, DialogContent, FormHelperText, Typography } from '@mui/material';
import { useMutation } from 'react-query';
import { AddLead } from '../../api/services'; // Adjust the import accordingly
import { MdArrowOutward } from 'react-icons/md';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from '../../components/Inputs/CustomInput';
import { toast } from 'react-toastify';

// Define the validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Mobile number must be numeric')
    .required('Mobile number is required'),
  message: yup.string().optional(),
});

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
}

const ContactusForm: React.FC = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '', // Optional field can default to an empty string
  });

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (newFormData: FormData) => AddLead(newFormData),
    onSuccess: () => {
      toast.success('Successfully submitted!');
      resetForm(); // Reset form on successful submission
    },
    onError: (error: any) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  const resetForm = () => {
    // Reset form state in react-hook-form
    reset({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
    // Reset local state
    setFormValues({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  const onSubmit = (data: FormData) => {
    const temp = { ...data, type: 'contact' };
    mutation.mutate(temp);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 2, bgcolor: 'white' }}>
      <Container>
        <Box
          className="contact-container"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            '@media (max-width:600px)': {
              flexWrap: 'wrap',
            },
            left: '30%',
          }}
        >
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contactform-container"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              width: {
                xs: '100%',
                lg: '380px',
              },
              marginTop: {
                xs: '-190px',
                lg: '-307px',
              },
              zIndex: 1,
              background: 'white',
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: '800', fontSize: '10px' }}>
              Have questions? Get in touch!
            </Typography>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '16px' }}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    placeholder="Your Name"
                    fullWidth
                    {...field}
                    error={!!errors.name}
                    required
                  />
                )}
              />
              <FormHelperText error>{errors.name?.message}</FormHelperText>

              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    placeholder="Mobile Number"
                    fullWidth
                    {...field}
                    error={!!errors.phoneNumber}
                  />
                )}
              />
              <FormHelperText error>{errors.phoneNumber?.message}</FormHelperText>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    placeholder="Your Email"
                    fullWidth
                    {...field}
                    error={!!errors.email}
                  />
                )}
              />
              <FormHelperText error>{errors.email?.message}</FormHelperText>

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <CustomInput
                    placeholder="Message"
                    fullWidth
                    multiline
                    rows={4}
                    {...field}
                    error={!!errors.message}
                  />
                )}
              />
              <FormHelperText error>{errors.message?.message}</FormHelperText>
            </DialogContent>

            <Box mt={2} className="full-width-button">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={mutation.isLoading}
                endIcon={mutation.isLoading ? <CircularProgress size={20} /> : <MdArrowOutward />}
              >
                Submit
              </Button>
            </Box>
          </Box>

          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'left', maxWidth: '455px', py: 7 }} className="container">
              <Typography variant="h5" mb={1} sx={{ fontWeight: '800' }}>
                Get Expert Real Estate Guidance
              </Typography>
              <Typography variant="caption" sx={{ fontSize: { xs: '0.775rem', lg: '0.87rem' } }}>
                Whether you're looking to invest, sell, or need strategic advice for your property, our team is here to help you every step of the way.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactusForm;
