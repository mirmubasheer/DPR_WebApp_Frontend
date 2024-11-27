import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { tiles } from './GalleryData';

const GalleryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tileData = tiles.find((tile) => tile.id === Number(id));

  // State to handle modal open/close and the selected image
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal with selected image
  const handleOpen = (url: string) => {
    setSelectedImage(url);
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  if (!tileData) {
    return (
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="h5">Tile not found</Typography>
      </Box>
    );
  }

  return (
    
    <Box
      sx={{
        padding: 2,
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: '#30779d',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 2,
          fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
        }}
      >
        {tileData.title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
        }}
      >
        {tileData.description}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '0 1rem',
        }}
      >
        {tileData.smallImages.map((url, index) => (
          <Grid
            item
            key={index}
            onClick={() => handleOpen(url)}
            xs={12} sm={6} md={3} // Responsive grid: 1 item per row on mobile, 2 on small screens, 4 on medium
            sx={{
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 3,
              transition: 'transform 0.4s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box
              sx={{
                width: '100%',
                paddingTop: '100%', // Square aspect ratio
                position: 'relative',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={url}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the image covers the entire box without distortion
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  borderRadius: 2,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Modal for image zoom */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            width: '100%', // Make modal full width on mobile
            maxWidth: { xs: '100%', sm: '80%', md: '50%' }, // Control modal size across devices
            margin: 0, // No margins for mobile view
          },
        }}
      >
        <DialogContent
          sx={{
            position: 'relative',
            backgroundColor: '#000',
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#fff',
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Zoomed Image"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: { xs: '70vh', md: '90vh' }, // Adjust max height based on screen size
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GalleryDetails;







// import React from 'react';
// import { Box, Grid } from '@mui/material';

// const GalleryDetails: React.FC = () => {
//   const imageUrls = [
//     'https://source.unsplash.com/random/300x300?1',
//     'https://source.unsplash.com/random/300x300?2',
//     'https://source.unsplash.com/random/300x300?3',
//     'https://source.unsplash.com/random/300x300?4',
//     'https://source.unsplash.com/random/300x300?5',
//     'https://source.unsplash.com/random/300x300?6',
//     'https://source.unsplash.com/random/300x300?7',
//     'https://source.unsplash.com/random/300x300?8',
//     'https://source.unsplash.com/random/300x300?9',
//     'https://source.unsplash.com/random/300x300?10',
//     'https://source.unsplash.com/random/300x300?11',
//     'https://source.unsplash.com/random/300x300?12',
//     'https://source.unsplash.com/random/300x300?13',
//     'https://source.unsplash.com/random/300x300?14',
//     'https://source.unsplash.com/random/300x300?15',
//     'https://source.unsplash.com/random/300x300?16',
//     'https://source.unsplash.com/random/300x300?17',
//     'https://source.unsplash.com/random/300x300?18',
//     'https://source.unsplash.com/random/300x300?19',
//     'https://source.unsplash.com/random/300x300?20',
//   ];

//   return (
//     <Box sx={{ padding: 2, width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       <Grid
//         container
//         spacing={1}
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           height: '100vh',
//           width: '100%',
//           overflow: 'hidden',
//         }}
//       >
//         {imageUrls.map((url, index) => (
//           <Grid
//             item
//             key={index}
//             sx={{
//               flexGrow: 1,
//               minWidth: { xs: '15%', sm: '10%', md: '8%', lg: '7%' },
//               height: { xs: '15%', sm: '10%', md: '8%', lg: '7%' },
//               maxWidth: { xs: '15%', sm: '10%', md: '8%', lg: '7%' },
//             }}
//           >
//             <Box
//               component="img"
//               src={url}
//               alt={`Gallery Image ${index + 1}`}
//               sx={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 borderRadius: 1,
//                 transition: 'transform 0.3s ease-in-out',
//                 '&:hover': {
//                   transform: 'scale(1.05)',
//                 },
//               }}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default GalleryDetails;
