import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

interface ShareButtonProps {
  shareUrl: string;
  shareTitle: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ shareUrl, shareTitle }) => {
  const handleShare = async () => {
    if (navigator.share) {
      // Web Share API supported (on mobile and some desktop browsers)
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback if Web Share API is not supported (desktop fallback)
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <Tooltip title="Share" arrow>
      <IconButton
        onClick={handleShare}
        sx={{
          padding: 0,  
          margin: 0,   
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShareIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default ShareButton;
