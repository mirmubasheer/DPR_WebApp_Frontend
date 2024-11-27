import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  useMediaQuery,
  Typography,
  Container,
  TextField,
  FormHelperText,
  CircularProgress,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { dprlogo, dprwhite } from '../assets'; // Update with your logo path
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CustomInput from '../components/Inputs/CustomInput';
import ModalForm from '../components/ModalForm/ModalForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { AddLead } from '../api/services';
import { toast } from 'react-toastify';
import { MdArrowOutward } from 'react-icons/md';

interface HeaderProps {
  selectedTab: string;
  isScrolled: boolean;
}
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


const Header: React.FC<HeaderProps> = ({ selectedTab, isScrolled }) => {

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


  const { id } = useParams(); // Get project id from route params
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', mobileNumber: '', email: '', message: ''});

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);



  // Check if the view is mobile or desktop
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // State for drawers
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [detailsDrawerOpen, setDetailsDrawerOpen] = useState(false);

  // Handle tab change
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    navigate(newValue); // Navigate to new route
    setDrawerOpen(false); // Close mobile drawer after selecting
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submission
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   resetForm();
  // };

  // Toggle Drawer for main tabs (mobile only)
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Toggle Drawer for details (desktop only)
  const handleDetailsDrawerToggle = () => {
    setDetailsDrawerOpen(!detailsDrawerOpen);
  };



  // Tab labels
  const tabLabels = [
    { label: 'Home', route: '/home' },
    { label: 'Projects', route: '/projects' },
    { label: 'About Us', route: '/about' },
    // { label: 'Channel Partner', route: '/channelpartner' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact Us', route: '/contact' },

  ];

  // Header styling based on scroll state
  const headerStyle = {
    backgroundColor: isScrolled ? '#FFFFFF' : theme.palette.primary.main,
    width: '100%',
    boxShadow: isScrolled ? '0 10px 50px 0 rgba(46, 56, 220, .2)' : 'none',
    transition: 'box-shadow 0.3s ease, height 0.3s ease',
    height: isScrolled ? '63px' : '80px',
  };

  return (
    <>
      <AppBar position="fixed" sx={headerStyle}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          {/* Logo */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          >
            <img
              src={isScrolled ? dprlogo : dprwhite}
              alt="Logo"
              style={{
                height: isScrolled ? '40px' : '45px',
                transform: 'scale(1.5)',
                transition: 'all 0.25s ease',
                marginLeft: isScrolled ? '20px' : '10px',
              }}
            />
          </Box>

          {/* Tabs for desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              ml: 3,
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="inherit"
              sx={{
                '& .MuiTab-root': {
                  minWidth: 'auto',
                  marginLeft: 2,
                  fontSize: '16px',
                  fontWeight: '550',
                  padding: '6px 12px',
                  borderRadius: '5px',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  color: isScrolled ? '#000000' : '#FFFFFF',
                },
                '& .Mui-selected': {
                  color: isScrolled ? '#30779d' : '#FFFFFF', 
                  fontWeight: '550', 
                },
              }}
            >
              {tabLabels.map((tab, index) => (
                <Tab key={index} label={tab.label} value={tab.route} />
              ))}
            </Tabs>
          </Box>

          {/* Download Brochure button for desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: { xs: 0, md: 0 } }}>
            <Button
              variant="contained"
              color="primary"
              
              
              sx={{ 
                // backgroundColor: '#30779d', 
                background:isScrolled ? '#30779d' : 'white',
                color: isScrolled ? 'white' : '#30779d',
                width: '190px',
                fontSize: '14px',
              }}
              onClick={handleOpen}

            >
              Download Brochure
            </Button>
          </Box>

          {/* Toggle Button for both mobile (main tabs) and desktop (details) */}
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={isMobile ? handleDrawerToggle : handleDetailsDrawerToggle}
            sx={{
              color: '#000000',
              '&:hover': {
                color: '#30779d',
                transition: 'all 0.3s ease',
              },
            }}
          >
            {/* <MenuIcon /> */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              {/* Top Line */}
              <div
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
              
              {/* Middle Line (expands on hover) */}
              <div
                style={{
                  width: isHovered ? '30px' : '20px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
              
              {/* Bottom Line */}
              <div
                style={{
                  width: '30px',
                  height: '2px',
                  backgroundColor: isScrolled ? '#000000' : '#FFFFFF',
                  margin: '3px 0',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </div>
          </IconButton>
        </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer for Tabs */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.background.default,
            border: 'none',
          },
        }}
      >
        <Box sx={{ width: 250 }}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1,  }}>
            <img src={dprlogo} alt="Logo" style={{ height: '40px' }} />
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: '#FFFFFF',
                '&:hover': {
                  color: '#aaaaad',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <CloseIcon sx={{ color: '#30779d' }} />
            </IconButton>
          </Box>

          {/* Tabs in Drawer */}
          <List>
            {tabLabels.map((tab, index) => (
              <ListItem
                button
                key={index}
                onClick={() => handleTabChange(null as any, tab.route)}
                sx={{
                  backgroundColor: selectedTab === tab.route ? '#30779d' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#30779d',
                    transition: 'all 0.3s ease',
                    color: '#FFFFFF',
                    '& .MuiListItemText-primary': {
                      color: '#FFFFFF',
                    },
                  },
                  color: selectedTab === tab.route ? '#FFFFFF' : '#000000',
                  fontWeight: selectedTab === tab.route ? 'bold' : 'normal',
                }}
              >
                <ListItemText primary={tab.label} />
              </ListItem>
            ))}
          {/* Download Brochure button for mobile */}
            <ListItem
              button
              onClick={handleOpen}
              sx={{
                '&:hover': {
                  backgroundColor: '#30779d',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF',
                  '& .MuiListItemText-primary': {
                    color: '#FFFFFF',
                  },
                },
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              <ListItemText primary="Download Brochure" />
            </ListItem>

          </List>
          
      
        </Box>
      </Drawer>

      {/* Desktop Details Drawer */}
      <Drawer
      anchor="right"
      open={detailsDrawerOpen}
      onClose={handleDetailsDrawerToggle}
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: 320,
          backgroundColor: (theme) => theme.palette.background.default,
          border: 'none',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ width: 270, p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Logo and Close Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <img src={dprlogo} alt="Logo" style={{ height: '80px' }} />
          <IconButton
            onClick={handleDetailsDrawerToggle}
            sx={{
              color: '#30779d',
              '&:hover': {
                color: '#000000',
              },
            }}
          >
            <Box
              sx={{
                transition: 'transform 0.3s ease', 
                '&:hover': {
                  transform: 'rotate(90deg)', 
                },
              }}
            >
              <CloseIcon />
            </Box>
          </IconButton>
        </Box>

        {/* gap here */}
        <Box sx={{ marginBottom: '20px' }} />



        <Typography variant="h5" sx={{ color: '#30779d', fontWeight: '550' }}>
        Get In Touch
        </Typography>

        <Divider sx={{ borderColor: '#30779d', my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
          onSubmit={handleSubmit(onSubmit)} 
        >
          {/* contact us form with name, email, phonenumber, message   */}
          <form>
          {/* <CustomInput
            name="name"
            autoFocus
            placeholder="Your Name"
            value={formData.name}
            onChange={handleFormChange}
            fullWidth
            required
            sx={{ mb: 1 }}
          /> */}
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
        
        <FormHelperText error>{errors.name?.message}</FormHelperText>

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

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '100%', backgroundColor: '#30779d' }}
              disabled={mutation.isLoading}
              endIcon={mutation.isLoading ? <CircularProgress size={20} /> : <MdArrowOutward />}
            >
              Submit
            </Button>
          </form>
          {/* {mutation.isError && (
          <Typography color="error" mt={1}>
            Error submitting the form. Please try again.
          </Typography>
        )}
        {mutation.isSuccess && (
          <Typography color="success" mt={1}>
            Form submitted successfully!
          </Typography>
        )}
         */}
        </Box>

        <Divider sx={{ borderColor: '#30779d', my: 2 }} />

        {/* Contact Details */}
       {/* Contact Details */}
       <List sx={{ flexGrow: 1 }}>
      <ListItem>
        <FaPhone style={{ marginRight: '10px', color: '#30779d', fontSize: '1.2rem' }} />
        <ListItemText
          primary={
            <Typography variant="caption">
              <a href="tel:+919549546568" color="inherit" style={{ color: '#30779d', textDecoration: 'none' }}>
                +91 954 954 6568
              </a>
            </Typography>
          }
        />
      </ListItem>
      <ListItem>
        <FaEnvelope style={{ marginRight: '10px', color: '#30779d', fontSize: '1.2rem' }} />
        <ListItemText
          primary={
            <Typography variant="caption">
              <a href="mailto:info@dprprop.com" color="inherit" style={{ color: '#30779d', textDecoration: 'none' }}>
                info@dprprop.com
              </a>
            </Typography>
          }
        />
      </ListItem>
      <ListItem>
        <FaMapMarkerAlt style={{ marginRight: '10px', color: '#30779d', fontSize: '4rem' }} />
        <ListItemText
          primary={
            <Typography variant="caption">
              Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Film Nagar, Hyderabad, Telangana 500008
            </Typography>
          }
        />
      </ListItem>
    </List>



        <Divider sx={{ borderColor: '#30779d', my: 2 }} />

        {/* Google Maps iframe */}
        <Box sx={{ height: '200px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.010651245361!2d78.39922767420532!3d17.411276483479938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973180e2f643%3A0xc49980f17ee4d523!2sDeccan%20Progressive%20Realty%20LLP.!5e0!3m2!1sen!2sin!4v1727940213255!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: '0' }}
            aria-hidden="false"
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Drawer>

    <ModalForm open={isModalOpen} handleClose={handleClose} />

    </>
  );
};

export default Header;
