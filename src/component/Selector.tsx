import React, { useState } from 'react';
import { Card, CardContent, Typography, Modal, Box } from '@mui/material';
import CustomerFormModal from './CustomerFormModal';
import BusinessFormModal from './BusinessFormModal';
import ChannelPartnerFormModal from './ChannelPartnerFormModal';
import './Selector.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Selector: React.FC = () => {
  const [openModal, setOpenModal] = useState<'customer' | 'business' | 'channelPartner' | null>(null);

  const handleOpenModal = (modalType: 'customer' | 'business' | 'channelPartner') => {
    setOpenModal(modalType);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <Box className="selector-container">
      <Box className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </Box>
      <Box className="cards">
        <Card className="card" onClick={() => handleOpenModal('customer')}>
          <CardContent>
            <Typography variant="h5" component="div">
              HOME SEEKER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Find Your Dream Home
            </Typography>
          </CardContent>
        </Card>
        <Card className="card" onClick={() => handleOpenModal('business')}>
          <CardContent>
            <Typography variant="h5" component="div">
              BUILDER/DEVELOPER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Optimize Your Sales Process
            </Typography>
          </CardContent>
        </Card>
        <Card className="card" onClick={() => handleOpenModal('channelPartner')}>
          <CardContent>
            <Typography variant="h5" component="div">
              CHANNEL PARTNER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect and Grow
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Modal open={openModal === 'customer'} onClose={handleCloseModal}>
        <Box className="modal-box">
          <CustomerFormModal onClose={handleCloseModal} />
        </Box>
      </Modal>
      <Modal open={openModal === 'business'} onClose={handleCloseModal}>
        <Box className="modal-box">
          <BusinessFormModal onClose={handleCloseModal} />
        </Box>
      </Modal>
      <Modal open={openModal === 'channelPartner'} onClose={handleCloseModal}>
        <Box className="modal-box">
          <ChannelPartnerFormModal onClose={handleCloseModal} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Selector;
