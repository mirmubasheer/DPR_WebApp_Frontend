import React from 'react';
import { Box, Button, Typography, Avatar, Link, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AnyCnameRecord } from 'dns';

interface BuilderProps{
    projectData:any;
}

const BuilderDetails: React.FC<BuilderProps> = ({projectData}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                width: '100%',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
            }}
        >
            <Grid container spacing={2} alignItems="center">
                {/* Avatar */} 
                <Grid item>
                    <Avatar 
                        alt="Arlene McCoy" 
                        src="/path/to/avatar.jpg" 
                        sx={{ width: 80, height: 80 }} 
                    />
                </Grid>

                {/* Name, Phone Number, and View Listings */}
                <Grid item>
                    <Typography variant="h6" component="h1" sx={{ fontSize: { xs: '16px', md: '18px' }, fontWeight: 'bold' }}>
                        Deccan Progressive Realty
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '14px', md: '16px' }, marginBottom: '5px' }}>
                    +91 954 954 6568
                    </Typography>
                    <Link 
                        href="/projects" 
                        sx={{ fontSize: { xs: '14px', md: '16px' }, textDecoration: 'underline', color: 'inherit' }}
                    >
                        View Listings
                    </Link>
                </Grid>
            </Grid>
            <br />

        {/* Contact Agent Button */}
                <Button
                variant="contained"
                color="error"
                href={`https://wa.me/9549546568?text=Hello, I am interested in this property. ${projectData.projectName}`}
                target="_blank" 
                fullWidth
                endIcon={<SendIcon />}
                sx={{ padding: '0 30px', fontWeight: 'bold', fontSize: { xs: '14px', md: '16px' } }} // Adjusted font size
                >
                Contact Agent
                </Button>

        </Box>
    );
};

export default BuilderDetails;
