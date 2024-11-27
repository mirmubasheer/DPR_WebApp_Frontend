import React, { useState } from 'react';
import { Box, Grid, Typography, Collapse } from '@mui/material';
import { Project } from '../../ProjectInterface';

interface ProjectDescriptionProps {
    projectData: Project;
}

const PropertyDescription: React.FC<ProjectDescriptionProps> = ({ projectData }) => {
    const [showMore, setShowMore] = useState(false);

    // Property description with some sample data
    const Description = projectData.description;


    const descriptionParts: string[] = Description.split('\n');


    // Property details
    // const propertyDetails = [
    //     { label: 'Property ID', value: projectData?.projectId },
    //     { label: 'Price', value: `₹ ${new Intl.NumberFormat('en-IN').format(projectData?.price)} / sft` },
    //     { label: 'Property Size', value: `${new Intl.NumberFormat('en-IN').format(projectData?.maxsize)} Sq Ft` },
    //     { label: 'Bathrooms', value: projectData?.baths },
    //     { label: 'Bedrooms', value: projectData?.rooms },
    //     { label: 'Garage', value: `${projectData?.garage} Car` },
    //     { label: 'Units Apartments', value: `${projectData?.unitsApartments}` },
    //     { label: 'Year Built', value: '2022' },
    //     { label: 'Property Type', value: projectData?.propertyType },
    //     { label: 'Property Status', value: projectData?.status },
    // ];
    const propertyDetails = [
        { label: 'Property ID', value: projectData?.projectId },
        { label: 'Price', value: `₹ ${new Intl.NumberFormat('en-IN').format(projectData?.sftPrice)} / sft` },
        { label: 'Property Size', value: `${new Intl.NumberFormat('en-IN').format(projectData?.maxSize)} Sq Ft` },
        // { label: 'Bathrooms', value: projectData?.projectBHK?.join(', ') },
        { label: 'BHK', value: projectData?.projectBHK?.join(', ') },
        // { label: 'No Of Parking', value: `${projectData?.parkingArea}` },
        { label: 'No Of Units', value: `${projectData?.dimensions}` },
        { label: 'Posession Year', value: `${projectData?.establishedYear}` },
        { label: 'Property Type', value: projectData?.propertyType },
        { label: 'Property Status', value: projectData?.status },
    ];

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px',marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <Typography variant="body1" sx={{ color: '#333', fontWeight: 600 }}>
                Property Description
            </Typography>
            <Typography variant="caption" paragraph sx={{ color: '#555', mt: 1, textAlign: 'justify' }}>
                {descriptionParts[0]}
                {!showMore && descriptionParts.length > 1 && '...'}
            </Typography>
            <Collapse in={showMore} timeout="auto" unmountOnExit>
                <Typography variant="caption" paragraph sx={{ color: '#555', mt: 1, textAlign: 'justify' }}>
                    {descriptionParts.slice(1).map((part, index) => (
                        <span key={index}>
                            {part}
                            <br />
                        </span>
                    ))}
                </Typography>
            </Collapse>


            {descriptionParts.length > 1 && (
                <span
                    onClick={() => setShowMore(!showMore)}
                    style={{
                        color: '#0056b3',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    }}
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </span>
            )}

            {/* Property Details */}
            <Typography variant="body1" sx={{ color: '#333', marginTop: '20px', fontWeight: 600 }}>Property Details</Typography>
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2}>
                        {propertyDetails.slice(0, 4).map((detail, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                        {detail.label}:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" sx={{ color: '#555' }}>
                                        {detail.value}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid container spacing={2}>
                        {propertyDetails.slice(4, 8).map((detail, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={6}>
                                    <Typography variant="caption" sx={{ color: '#555', fontWeight: 600 }}>
                                        {detail.label}:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="caption" sx={{ color: '#555' }}>
                                        {detail.value}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PropertyDescription;
