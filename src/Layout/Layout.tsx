import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css';
import { useState, useEffect } from 'react';
import Footer from '../Pages/Footer';
import ThreeFormsModal from '../components/ModalForm/ThreeFormsModal';
import Cookies from 'js-cookie';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSelectedTab = (pathname: string) => { 
    const paths = ['/home', '/about', '/projects','/channelpartner', '/gallery', '/blog', '/contact', '/nri'];
    const dynamicPath = paths.find(path => pathname.startsWith(path)) || '/home';
    return dynamicPath;
  };

  const [isModalOpen, setModalOpen] = useState(false); 
  const [formType, setFormType] = useState<string>('');

  const checkPopupStatus = () => {
    return false;
  };
  

  useEffect(() => {
    if (!checkPopupStatus()) {
      const timer = setTimeout(() => {
        setModalOpen(true); 
        Cookies.set('formPopupShown', 'true', { expires: 1 }); 
      }, 4000);

      return () => clearTimeout(timer); 
    }
  }, []);

  const handleOpenModal = (type: string) => {
    setFormType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box className="layout-container">
      <Box className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        {/* <ThreeFormsModal open={isModalOpen} onClose={handleCloseModal} /> */}
        <Header selectedTab={getSelectedTab(location.pathname)} isScrolled={isScrolled} />
        <ScrollToTopButton />
        
      </Box>
      <Box className="content-container">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
