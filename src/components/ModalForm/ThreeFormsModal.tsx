import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button, Card, CardContent, CardActions, IconButton,
  Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import CustomInput component
import CustomInput from '../Inputs/CustomInput';

interface ThreeFormsModalProps {
  open: boolean;
  onClose: () => void;
}

const ThreeFormsModal: React.FC<ThreeFormsModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  // Modal state
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [openThirdModal, setOpenThirdModal] = useState(false);
  const [openHomeSeekerModal, setOpenHomeSeekerModal] = useState(false); // For Home Seeker
  const [formData, setFormData] = useState({ name: '', mobileNumber: '', email: '', message: '', category: '', subject: '' });
  const [loading, setLoading] = useState(false);

  // Handle navigation
  const handleButtonClick = (path: string) => {
    navigate(path);
  };

  // GSAP animation for background and modal cards
  useEffect(() => {
    if (open) {
      gsap.to('.selector-background', { opacity: 1, duration: 0.5 });
      gsap.fromTo(
        '.selector-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.5 }
      );
    }
  }, [open]);

  // Handle input changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for both modals
  const handleSubmitForm = async (category: string) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post('https://api.realtyyards.com/emailform', {
        ...formData,
        category,
        subject: category === 'developer' ? 'Schedule a Call' : category === 'homeSeeker' ? 'Home Seeker Inquiry' : 'Channel Partner Enrollment',
      });

      if (response.status === 201) {
        toast.success('Form submitted successfully!');
        resetForm();
        handleCloseModals();
        onClose();
      } else {
        toast.error('Failed to submit the form.');
      }
    } catch (err) {
      toast.error('An error occurred while submitting the form.');
    } finally {
      setLoading(false); // End loading
    }
  };

  // Handle modal opening and closing
  const handleOpenSecondModal = () => setOpenSecondModal(true);
  const handleCloseSecondModal = () => setOpenSecondModal(false);
  const handleOpenThirdModal = () => setOpenThirdModal(true);
  const handleCloseThirdModal = () => setOpenThirdModal(false);
  const handleOpenHomeSeekerModal = () => setOpenHomeSeekerModal(true); // For Home Seeker
  const handleCloseHomeSeekerModal = () => setOpenHomeSeekerModal(false); // For Home Seeker
  const handleCloseModals = () => {
    handleCloseSecondModal();
    handleCloseThirdModal();
    handleCloseHomeSeekerModal(); // Close Home Seeker Modal
  };

  // Reset form values
  const resetForm = () => {
    setFormData({ name: '', mobileNumber: '', email: '', message: '', category: '', subject: '' });
  };

  // Card styles for responsiveness
  const cardStyles = {
    flex: '1 1 250px',
    backgroundColor: '#ffffff',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #30779d',
    boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '6px 12px 12px rgba(0, 0, 0, 0.6)'
    },
    '&:active': {
      transform: 'translateY(0px)',
      boxShadow: '4px 10px 10px rgba(0, 0, 0, 0.4)'
    }
  };

  const headerStyles = {
    color: '#30779d',
    borderBottom: '2px solid #30779d',
    paddingBottom: '8px',
    marginBottom: '16px'
  };

  // Spacing for form fields and dialogs
  const dialogContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', // Adds gap between form fields
    paddingTop: '16px', // Adds padding at the top of the dialog
  };

  const buttonStyles = {
    marginTop: '16px',
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <ToastContainer />
      {/* Background Box */}
      <Box
      sx={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        p: 2,
        '@media (min-width:600px)': {
          p: 4,
        },
        '@media (min-width:900px)': {
          p: 6,
        },
      }}
    >
      {/* Close Icon */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 2,
          color: '#30779d',
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Scrollable Card Section */}
      <Box
        sx={{
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
          maxWidth: '1200px',
          gap: '20px',
          flexWrap: 'wrap',
          overflowY: 'auto', // Enable vertical scroll
          maxHeight: '80vh', // Limit the height to ensure scrolling
          p: 2,
          '&::-webkit-scrollbar': {
            width: '6px', // Width of the scrollbar
            background: 'transparent', // Background of the scrollbar
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888', // Color of the scrollbar thumb
            borderRadius: '10px', // Rounded edges for the scrollbar thumb
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555', // Color on hover
          },
          '@media (min-width:600px)': {
            p: 4,
          },
          '@media (min-width:900px)': {
            p: 6,
          },
        }}
      >
        {/* Home Seeker Card */}
        <Card className="selector-card" sx={cardStyles}>
          <CardContent>
            <Typography variant="h6" sx={headerStyles}>
              𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 Home Seeker
            </Typography>
            <Typography variant="caption" sx={{ textAlign: 'justify' }}>
              Whose problem is finding your DREAM HOME at a FABULOUS LOCATION, with a GREAT VALUE, by a renowned DEVELOPER.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" variant="contained" color="primary" onClick={handleOpenHomeSeekerModal}>
              Find Your Home
            </Button>
          </CardActions>
        </Card>

        {/* Developer/Builder Card */}
        <Card className="selector-card" sx={cardStyles}>
          <CardContent>
            <Typography variant="h6" sx={headerStyles}>
              𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 Developer/Builder
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
              Who is finding it hard to hire skilled Sales Professionals, Struggling to Train & Upskill them, and Market and sell your Inventory.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" variant="contained" color="secondary" onClick={handleOpenSecondModal}>
              Schedule a Call
            </Button>
          </CardActions>
        </Card>

        {/* Channel Partner Card */}
        <Card className="selector-card" sx={cardStyles}>
          <CardContent>
            <Typography variant="h6" sx={headerStyles}>
              𝐼𝒻 𝓎𝑜𝓊'𝓇𝑒 𝒶 AGENT, BROKER, BANKER, or VENDOR
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'justify' }}>
              Click to provide details, connect, and enter your information.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button size="small" variant="contained" color="warning" onClick={handleOpenThirdModal}>
              Enroll Now
            </Button>
          </CardActions>
        </Card>
      </Box>

      {/* Skip Button */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Button variant="contained" onClick={onClose}>
          Skip
        </Button>
      </Box>
    </Box>
      {/* Home Seeker Modal */}
      <Dialog open={openHomeSeekerModal} onClose={handleCloseHomeSeekerModal} fullWidth>
        <DialogTitle>Home Seeker Form</DialogTitle>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleCloseHomeSeekerModal}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={dialogContentStyles}>
          <CustomInput
            name="name"
            autoFocus
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="mobileNumber"
            placeholder="Your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleFormChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmitForm('homeSeeker')}
            variant="contained"
            color="primary"
            sx={buttonStyles}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Developer/Builder Modal */}
      <Dialog open={openSecondModal} onClose={handleCloseSecondModal} fullWidth>
        <DialogTitle>Developer/Builder Form</DialogTitle>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleCloseSecondModal}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={dialogContentStyles}>
          <CustomInput
            name="name"
            autoFocus
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="mobileNumber"
            placeholder="Your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleFormChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmitForm('developer')}
            variant="contained"
            color="secondary"
            sx={buttonStyles}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Channel Partner Modal */}
      <Dialog open={openThirdModal} onClose={handleCloseThirdModal} fullWidth>
        <DialogTitle>Channel Partner Form</DialogTitle>
        <IconButton
          sx={{ position: 'absolute', top: '10px', right: '10px' }}
          onClick={handleCloseThirdModal}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={dialogContentStyles}>
          <CustomInput
            name="name"
            autoFocus
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="mobileNumber"
            placeholder="Your Mobile Number"
            value={formData.mobileNumber}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <CustomInput
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleFormChange}
            fullWidth
            multiline
            rows={4}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSubmitForm('channelPartner')}
            variant="contained"
            color="warning"
            sx={buttonStyles}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default ThreeFormsModal;
