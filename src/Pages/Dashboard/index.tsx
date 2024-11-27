import React from 'react';
import HeroBanner from './HeroBanner';
import ApartmentType from './ApartmentTypes';
import Realton from './Realton';
import Listings from './Listings';
import SellingGroup from './SellingGroup';
import homeImage from '../../assets/images/home1.jpg'; // Correct import of local image
import { feed1, feed2, feed3, feed4, download, AboutNew } from '../../assets';
import { Box } from '@mui/material';
import People from './People';
import Talk from './Talk';
import Clients from './Clients';
import ImageSlider from './ImageSlider';
import BackgroundSection from './BackgroundSection';
import MobileApp from './MobileApp';
import AboutusN from './AboutN';
import AmenitiesN from './AmenitiesN';
import TestimonialsN from './TestimonialsN';
import Blog from './Blog';
import ClientLogos from '../About/ClientLogos';
import HomeSearch from './HomeSearch';
import Counter from './Counter';

const Dashboard: React.FC = () => {
  const articles = [
    {
      image: feed1, 
      title: '10 Brilliant Ways to Decorate Your Home',
      date: 'August 28, 2024',
      category: 'Interior',
      link: '/news/10-brilliant-ways-to-decorate-your-home',
    },
    {
      image: feed2,
      title: '5 Tips to Improve Your Outdoor Space',
      date: 'August 30, 2024',
      category: 'Exterior',
      link: '/news/5-tips-to-improve-your-outdoor-space',
    },
    {
      image: feed3,
      title: 'The Best Furniture for Your Home',
      date: 'September 2, 2024',
      category: 'Furniture',
      link: '/news/the-best-furniture-for-your-home',
    },
  ];

  return (
    <div>
      <ImageSlider />
      <Box
            sx={{
              
              position: 'absolute',
              bottom: '-170px', 
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',   
              background: 'transparent',
            }}
          >
            <HomeSearch />
          </Box>

      <ApartmentType />
      <AboutusN />
      <Counter/>
      <SellingGroup />
      <BackgroundSection />
      <Listings /> 
      {/* <AmenitiesN imageSrc1={AboutNew.aboutN} /> */}
      <TestimonialsN />
      <MobileApp />
      {/* <Blog /> */}
      <ClientLogos />
      {/* <Talk/> */}



      <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4 }}>
        {/* <Realton /> */}
        {/* <People /> */}
        {/* <HeroBanner
          imageUrl={homeImage} 
          title="THE BEST WAY TO"
          subtitle="Find Your Dream Home"
        /> */}

      </Box>
    </div>
  );
};

export default Dashboard;
