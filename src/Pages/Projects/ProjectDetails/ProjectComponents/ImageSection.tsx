import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ImageSectionProps {
    projectData: {
        projectId: string;
        projectImages?: string[];
    };
}

const MainImage = styled('img')({
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    aspectRatio: '16/9',  // Fixed aspect ratio for uniformity
    maxHeight: '400px',
});

const Thumbnail = styled('img')<{ selected: boolean }>(({ selected }) => ({
    width: '80px',
    height: '60px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    opacity: selected ? 1 : 0.5,
    border: selected ? '2px solid #007BFF' : 'none',
    '&:hover': {
        transform: 'scale(1.06)',
    },
}));

const ArrowButton = styled(IconButton)({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
    zIndex: 10,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

const ImageSection: React.FC<ImageSectionProps> = ({ projectData }) => {
    const [images] = useState(projectData.projectImages?.slice(0,2) || []);
    // const [images] = useState(projectData.projectImages || []);
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [showAllImages, setShowAllImages] = useState(false); // State for modal visibility
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover : true,
        beforeChange: (current: number, next: number) => setCurrentImage(images[next]),
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentImage(images[index]);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
    };

    const handleShowMoreClick = () => {
        setShowAllImages(true);
    };

    const handleClose = () => {
        setShowAllImages(false);
    };

    const goToPrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <Box sx={{ 
            width: '100%', 
            textAlign: 'center', 
            backgroundColor: '#ffffff', 
            margin: 'auto', 
            borderRadius: '15px',
            marginBottom: '20px',
        }}>
            {/* Main Image Slider */}
            <Box>
                <Slider ref={sliderRef} {...settings}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <MainImage
                                src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${img}`} // Adjusted path for multer
                                alt={`Main Image ${index + 1}`}
                                style={{ width: '94%', margin: '20px auto' }}
                            />
                        </div>
                    ))}
                </Slider>

                {/* Thumbnail Images */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', ml: 2 }}>
                    {images.slice(0, 6).map((img, index) => (
                        <Box key={index} sx={{ mx: 1 }}>
                            <Thumbnail
                                src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${img}`}
                                alt={`Thumbnail ${index + 1}`}
                                selected={currentImage === img}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        </Box>
                    ))}
                   {images.length > 6 && (
    <Box
        sx={{
            ml: 1,
            mb: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Light black background with transparency
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            padding: '8px 16px', // Add padding for a better touch target
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.2s',
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darker on hover
                transform: 'scale(1.05)', // Slight scale effect on hover
            },
        }}
        onClick={handleShowMoreClick} // Click handler moved to Box for better area coverage
    >
        <Typography variant="body2" sx={{ color: '#007BFF' }}>
            + More ({images.length - 6})
        </Typography>
    </Box>
)}
                </Box>
            </Box>

            {/* Modal with Full-Screen Image Slider */}
            <Dialog open={showAllImages} onClose={handleClose} maxWidth="md" fullWidth>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8, color: '#ffffff' }}
                >
                    <CloseIcon />
                </IconButton>

                <ArrowButton
                    onClick={goToPrevious}
                    sx={{ 
                        left: 16,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.9)' },

                     }}
                    aria-label="previous"
                >
                    <ArrowBackIcon />
                </ArrowButton>

                <ArrowButton
                    onClick={goToNext}
                    sx={{ 
                        right: 16,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
                     }}
                    aria-label="next"
                >
                    <ArrowForwardIcon />
                </ArrowButton>

                <DialogContent sx={{ padding: 0 }}>
                    <Slider ref={sliderRef} {...settings} initialSlide={images.indexOf(currentImage)}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <MainImage
                                    src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${img}`} // Adjusted path for multer
                                    alt={`Image ${index + 1}`}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default ImageSection;
