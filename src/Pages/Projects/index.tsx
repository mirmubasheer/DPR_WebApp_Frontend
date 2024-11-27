import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import HomeSeekarForm from '../../components/ModalForm/HomeSeekarForm';
import BuilderForm from '../../components/ModalForm/BuilderForm';
import ChannelPartnerForm from '../../components/ModalForm/ChannelPartnerForm';
import { Dialog } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false); // Track if popup has been shown
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    iAgree: false,
    homeLoan: false,
  });

  const navigate = useNavigate();
  const userType = localStorage.getItem('userType');

  // Open the form on scroll down 100px (only once)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400 && !hasShownPopup) {
        setOpenForm(true);
        setHasShownPopup(true); // Set to true to prevent reopening
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShownPopup]);

  // Handle input changes for form data
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmitForm = () => {
    console.log('Form Submitted:', formData);
    setOpenForm(false);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <>
      <Dialog open={openForm} onClose={handleCloseForm}>
        {userType === 'homeSeeker' ? (
          <HomeSeekarForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmitForm={handleSubmitForm}
            handleCloseForm={handleCloseForm}
          />
        ) : userType === 'builder' ? (
          <BuilderForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmitForm={handleSubmitForm}
            handleCloseForm={handleCloseForm}
          />
        ) : userType === 'channelPartner' ? (
          <ChannelPartnerForm
            formData={formData}
            handleFormChange={handleFormChange}
            handleSubmitForm={handleSubmitForm}
            handleCloseForm={handleCloseForm}
          />
        ) : null}
      </Dialog>

      <Projects />
    </>
  );
};

export default ProjectsPage;
