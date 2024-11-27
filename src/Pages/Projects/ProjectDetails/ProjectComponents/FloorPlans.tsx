import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FloorPlan {
    floorImage: string;
    size: number; // Assuming this is the number of bedrooms
    fullPrice: number; // The full price of the floor
    floorNumber: number; // The floor number
    _id: string; // Unique identifier
}

interface FloorPlansProps {
    projectData: {
        floorPlans: FloorPlan[];
    };
}

const FloorPlans: React.FC<FloorPlansProps> = ({ projectData }) => {
    // State to manage the open accordion index
    const [expanded, setExpanded] = useState<number | false>(0); // Default to open the first accordion

    // Handle accordion change
    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <Typography variant="h5" sx={{ color: '#333', fontWeight: 600 }}>
                Floor Plans
            </Typography>
            {/* Accordion for Floor Plans */}
            {projectData.floorPlans.map((floorPlan, index) => (
                <Accordion key={floorPlan._id} expanded={expanded === index} onChange={handleChange(index)} sx={{ marginTop: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography variant="body1">Floor {floorPlan.floorNumber}</Typography>
                            </Grid>
                            <Grid item xs={9} textAlign="right">
                                <Typography variant="caption" sx={{ display: 'inline', marginRight: 2 }}>
                                    Size: {floorPlan.size} Bedrooms
                                </Typography>
                                <Typography variant="caption" sx={{ display: 'inline' }}>
                                    Price: ₹ {floorPlan.fullPrice.toLocaleString()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${floorPlan.floorImage}`} alt={`Floor ${floorPlan.floorNumber} Plan`} style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }} />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FloorPlans;
