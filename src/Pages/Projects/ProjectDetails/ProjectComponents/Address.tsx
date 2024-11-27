import React from 'react'; 
import { Box, Grid, Typography } from '@mui/material';
import { Project } from '../../ProjectInterface';

interface AddressProps {
    projectData: Project;
}

const Address: React.FC<AddressProps> = ({ projectData }) => {
    // const addresses = projectData?.Address || [];

    return (
        <Box
            sx={{
                my: 4,
                padding: '20px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                marginBottom: '20px',
            }}
        >
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 600 }}>
                Project Address
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: 1 }}>
                    <Grid item xs={12} sm={12} key={projectData._id}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                    Landmark:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                    {projectData.street}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                    Area:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                    {projectData.location}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                    City:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                    {projectData.city}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                    State:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                    {"Telangana"}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                    Pincode:
                                </Typography>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant="caption" sx={{ color: '#555' }}>
                                    {projectData.pincode}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>

            {/* Google Maps Iframe */}
            <Typography variant="h6" sx={{ marginTop: '20px', color: '#333' , mt:5, mb:2}}>
                Location
            </Typography>
            <iframe
                src={projectData.locationIframe}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            />
        </Box>
    );
};

export default Address;
