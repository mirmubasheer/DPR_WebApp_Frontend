import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#000000',
        borderRadius: '50%',
        color: '#ffffff',
        position: 'absolute',
        right: '-25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

export const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#000000',
        color: '#ffffff',
        position: 'absolute',
        left: '-25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};
