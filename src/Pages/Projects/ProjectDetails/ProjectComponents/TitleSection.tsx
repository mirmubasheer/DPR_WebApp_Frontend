import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { SquareFoot } from '@mui/icons-material';
import ShareButton from '../../../../components/Share/Share';
import { Project } from '../../ProjectInterface';

interface TitleSectionProps {
    projectData : Project
}

const TitleSection: React.FC<TitleSectionProps> = ({ projectData }) => {

    const urlToShare = "http://dprprop.com/projects";
const titleToShare = "Check out these amazing project!";



    const formatNumberIndian = (num: number) => {
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
    };

    return (
        <Box sx={{ mb: 3, borderBottom: '1px solid #ddd', pb: 2, px: 2 }}>
            {/* 1st Row */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                <Grid item xs sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" sx={{ fontWeight: '600' }}>
                        {projectData.name}
                    </Typography>
                </Grid>
                <Grid item>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: '5px', p: 0.5 }}>
                        <ShareButton shareUrl={`${urlToShare}/${projectData.projectId}`} shareTitle={titleToShare} />
                        </IconButton>
                        <IconButton size="small" sx={{ border: '1px solid #ccc', borderRadius: '5px', p: 0.5 }}>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* 2nd Row - Location, Status, Built, Visitors */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                <Grid item xs={8} sx={{ textAlign: 'left' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center' }}>
                        <span>{projectData?.location}, {projectData?.city} | </span>
                        <Typography variant="body2" color={projectData.status === "Active" ? "green" : "red"} sx={{ mx: 1 }}>
                            {projectData.status}
                        </Typography>
                        <span> | Built: {projectData.establishedYear} | Visitors: {projectData.visits}</span>
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>
                        ₹ {formatNumberIndian(projectData.sftPrice)} /sft
                    </Typography>
                </Grid>
            </Grid>

            {/* 3rd Row - Rooms, Baths, Area */}
            <Grid container alignItems="center" sx={{ mt: 1 }}>
                <Box display="flex" gap={2} alignItems="center">
                    <Box display="flex" alignItems="center">
                        <BedIcon fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            {projectData.projectBHK.join(', ')} BHK
                        </Typography>
                    </Box>
                    {/* <Box display="flex" alignItems="center">
                        <BathtubIcon fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            {projectData.projectBHK.join(', ')} Bath
                        </Typography>
                    </Box> */}
                    <Box display="flex" alignItems="center">
                        <SquareFoot fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                            {projectData.minSize} sqft
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Box>
    );
};

export default TitleSection;
