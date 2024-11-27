import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { EMI } from '../../../../assets';
import { useNavigate } from 'react-router-dom';
import { Project } from '../../ProjectInterface';

interface CalculatorProps {
    projectData: Project;
}

const Calculator: React.FC<CalculatorProps> = ({ projectData }) => {
    const navigate = useNavigate();

    // Function to handle navigation to the calculator route
    const EMICalculator = (projectId: string) => {
        navigate(`/projects/${projectId}/calculator`);
    };
    
    

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
            <Card
                onClick={() => EMICalculator(projectData.projectId)}
                sx={{ 
                    width: '100%', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
                    borderRadius: '12px', 
                    overflow: 'hidden',
                    backgroundColor: '#f9f9f9',
                    padding: '20px',
                    cursor: 'pointer' 
                }}
            >
                <Typography 
                    variant="body1" 
                    component="h2" 
                    gutterBottom 
                    sx={{ fontWeight: '600', color: '#333' }}
                >
                    EMI Calculator
                </Typography>
                <Box sx={{ padding: '10px' }}>
                    <Card
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)',
                            width: '250px',
                            height: '80px',
                        }}
                    >
                        {/* Left box for bank image */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px' }}>
                            <img src={EMI} alt='EMI Calculator' style={{ width: 'auto', height: '80px' }} />
                        </Box>

                        {/* Right content with bank name */}
                        <CardContent sx={{ textAlign: 'left' }}>
                            <Typography variant="body2" sx={{ fontWeight: '500', color: '#333' }}>
                                EMI Calculator
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Card>
        </Box>
    );
};

export default Calculator;
