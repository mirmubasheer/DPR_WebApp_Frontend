import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Project } from '../../ProjectInterface';

interface BankOfferProps {
  projectData: Project;
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null; // Hide arrow on mobile view

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#ddd',
        borderRadius: '50%',
        padding: '10px',
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

// Custom previous arrow
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null; // Hide arrow on mobile view

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#ddd',
        borderRadius: '50%',
        padding: '10px',
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
};

const BankOffers: React.FC<BankOfferProps> = ({ projectData }) => {
  const { bankOffers } = projectData;

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        border: '1px solid #ddd',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Bank Offers
      </Typography>
      <Slider {...settings}>
        {bankOffers.map((bank) => (
          <Box key={bank._id} sx={{ padding: '10px' }}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)',
                width: '300px',
                height: '100px',
                ml: 1,
              }}
            >
              {/* Left box for bank image */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                <img src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${bank.bankIcon}`} alt={`${bank.bankName} logo`} style={{ width: 'auto', height: '80px' }} />
              </Box>

              {/* Right content with bank name */}
              <CardContent sx={{ textAlign: 'left' }}>
                <Typography variant="body2">
                  {bank.bankName}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BankOffers;
