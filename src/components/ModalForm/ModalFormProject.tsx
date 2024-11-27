import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Grid,
  IconButton,
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from '../Inputs/CustomInput';
import { useTheme } from '@mui/material/styles';
import { useMutation } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { emailForm } from '../../api/services'; // Importing emailForm from services
import { dpr_brchure } from '../../assets';

interface ModalFormProjectProps {
  open: boolean;
  handleClose: () => void;
  projectImage: string; // Image URL passed as prop
  projectId: string; // Project ID
  projectName: string; // Project Name
}

const ModalFormProject: React.FC<ModalFormProjectProps> = ({ open, handleClose, projectImage, projectId, projectName }) => {
  const theme = useTheme();
  
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form fields on formValues change
  useEffect(() => {
    const isValid =
      formValues.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) &&
      /^[0-9]{10}$/.test(formValues.mobile) &&
      formValues.message.trim() !== '';
    setIsFormValid(isValid);
  }, [formValues]);

  // Update form values on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'mobile') {
      if (/^\d*$/.test(value) && value.length <= 10) {
        setFormValues({
          ...formValues,
          [name]: value,
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  // Mutation to handle form submission
  const { mutate, isLoading } = useMutation(emailForm, {
    onSuccess: () => {
      toast.success('Brochure request sent successfully!');
      downloadBrochure();
      handleClose();
      resetForm();
    },
    onError: () => {
      toast.error('Failed to send the brochure request.');
    },
  });

  // Trigger brochure download
  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = dpr_brchure; 
    link.download = `${projectName}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset form values
  const resetForm = () => {
    setFormValues({ name: '', email: '', mobile: '', message: '' });
    setIsFormValid(false);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!isFormValid) {
      toast.error('Please fill out all fields correctly.');
      return;
    }

    mutate({
      name: formValues.name,
      email: formValues.email,
      phoneNumber: formValues.mobile,
      message: formValues.message,
      type: 'project',
      projectName : projectName,
    });
  };

  return (
    <>
      <ToastContainer />
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md" // Increased width for side-by-side layout
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(8px)',
            width: '100%',
            boxShadow: 'none',
            color: '#000',
            position: 'relative',
            padding:2,
          },
        }}
      >
        <Box sx={{ position: 'absolute', zIndex: 1, right: '20px', top: '10px' }}>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container>
          <Grid item xs={12} md={5}>
          <Box sx={{ width: '100%', height: { xs: 250, md: 430 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${projectImage}`} 
              alt="Project Image" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="body2" sx={{ textAlign: 'center', padding: theme.spacing(2) }}>
              Please fill in your details to download the brochure for {projectName}.
            </Typography>
            <DialogContent dividers sx={{ padding: theme.spacing(2) }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomInput
                    name="name"
                    placeholder="Your Name"
                    value={formValues.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    name="mobile"
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={formValues.mobile}
                    onChange={handleChange}
                    fullWidth
                    required
                    inputProps={{
                      maxLength: 10,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomInput
                    name="message"
                    placeholder="Your Message"
                    value={formValues.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={4}
                    inputProps={{
                      maxLength: 500,
                    }}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ padding: theme.spacing(1) }}>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="secondary"
                sx={{ marginRight: 'auto', marginLeft: 2 }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
                disabled={!isFormValid || isLoading}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.8rem',
                    padding: theme.spacing(1),
                  },
                }}
              >
                {isLoading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Submit & Download'}
              </Button>
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default ModalFormProject;
