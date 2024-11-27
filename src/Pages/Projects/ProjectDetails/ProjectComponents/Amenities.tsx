import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
import { FaSwimmingPool, FaDumbbell, FaBuilding, FaVideo, FaWifi, FaGamepad } from 'react-icons/fa';
import { GiWaterSplash  } from 'react-icons/gi';
import { MdLocalDining, MdPets } from 'react-icons/md';
import { BsFillPeopleFill, BsFillCupFill } from 'react-icons/bs';
import { IoMdRainy } from 'react-icons/io';

interface Project {
    amenities: { iconName: string; name: string; _id: string }[];
}

interface AmenitiesProps {
    projectData: Project;
}

const iconMap: Record<string, JSX.Element> = {
    swimming_icon: <FaSwimmingPool style={{ color: '#2196f3', fontSize: '24px' }} />,
    gym_icon: <FaDumbbell style={{ color: '#4caf50', fontSize: '24px' }} />,
    clubhouse_icon: <BsFillPeopleFill style={{ color: '#ff9800', fontSize: '24px' }} />,
    cctv_icon: <FaVideo style={{ color: '#e91e63', fontSize: '24px' }} />,
    wifi_icon: <FaWifi style={{ color: '#9c27b0', fontSize: '24px' }} />,
    indoorgames_icon: <FaGamepad style={{ color: '#607d8b', fontSize: '24px' }} />,
    // library_icon: <GiLibrary style={{ color: '#2196f3', fontSize: '24px' }} />,
    sewage_icon: <GiWaterSplash style={{ color: '#4caf50', fontSize: '24px' }} />, // Water symbol for sewage
    water_icon: <GiWaterSplash style={{ color: '#ff9800', fontSize: '24px' }} />, // Water splash for water supply
    rainwater_icon: <IoMdRainy style={{ color: '#9c27b0', fontSize: '24px' }} />,
    sauna_icon: <MdLocalDining style={{ color: '#607d8b', fontSize: '24px' }} />, // Placeholder for sauna
    kids_icon: <MdPets style={{ color: '#4caf50', fontSize: '24px' }} />, // Kids symbol
    grocery_icon: <BsFillCupFill style={{ color: '#2196f3', fontSize: '24px' }} />, // Grocery icon
    carparking_icon: <FaDumbbell style={{ color: '#4caf50', fontSize: '24px' }} />, // Placeholder for parking
    landscape_icon: <GiWaterSplash style={{ color: '#4caf50', fontSize: '24px' }} />, // Placeholder for landscaping
  };
  







const Amenities: React.FC<AmenitiesProps> = ({ projectData }) => {
    const amenitiesList = projectData?.amenities || [];

    // Split the amenities into 3 columns for equal distribution
    const columnLength = Math.ceil(amenitiesList.length / 3);
    const columns = [
        amenitiesList.slice(0, columnLength),
        amenitiesList.slice(columnLength, columnLength * 2),
        amenitiesList.slice(columnLength * 2),
    ];

    return (
        <Box
            sx={{
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                border: '1px solid #ddd',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '100%',
                marginBottom: '20px',
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '18px' } }}>
                Features & Amenities
            </Typography>

            <Grid container spacing={2}>
                {columns.map((column, columnIndex) => (
                    <Grid item xs={12} sm={4} key={columnIndex}>
                        <List>
                            {column.map((amenity, amenityIndex) => {
                                console.log(amenity?.iconName);
                                const IconComponent = iconMap[amenity.iconName] || <FaGamepad />; // Default icon if not found
                                return (
                                    <ListItem key={amenity._id} sx={{ padding: '5px 0' }}>
                                        <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
                                            {IconComponent}
                                        </ListItemIcon>
                                        <Typography variant="caption" sx={{ color: '#555' }}>
                                            {amenity.name}
                                        </Typography>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Amenities;
