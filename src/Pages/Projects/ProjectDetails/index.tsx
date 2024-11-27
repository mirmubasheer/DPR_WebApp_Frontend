import React, { useState } from 'react';
import { Box, Grid, Container, useMediaQuery, useTheme, LinearProgress } from '@mui/material';
import TitleSection from './ProjectComponents/TitleSection';
import ImageSection from './ProjectComponents/ImageSection';
import Overview from './ProjectComponents/Overview';
import PropertyDescription from './ProjectComponents/PropertyDescription';
import Address from './ProjectComponents/Address';
import Amenities from './ProjectComponents/Amenities';
import FloorPlans from './ProjectComponents/FloorPlans';
import Video from './ProjectComponents/Video';

import Reviews from './ProjectComponents/Reviews';
import AddReview from './ProjectComponents/AddReview';
import RecentProjects from './ProjectComponents/RecentProjects';
import ScheduleForm from './ProjectComponents/SideComponents/ScheduleForm';
import BuilderDetails from './ProjectComponents/SideComponents/BuilderDetails';
import { useQuery } from 'react-query';
import { getProject, getRecentProjects } from '../../../api/services';
import { useNavigate, useParams } from 'react-router-dom';
import ModalFormProject from '../../../components/ModalForm/ModalFormProject';
import LocationHighlights from './ProjectComponents/LocationHighlights';
import BankOffers from './ProjectComponents/BankOffers';
import Calculator from './ProjectComponents/Calculator';


const ProjectDetails: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const projectId = id ?? '';

    const {
        data: projectsData,
        isLoading: isProjectLoading,
        error: projectError,
    } = useQuery(["project", projectId], () => getProject(projectId), {
        enabled: !!projectId, 
    });

    const { data: recentProjectsData,
        isLoading: isRecentProjectsLoading,
        error: recentProjectsError,} = useQuery('recentProjects', () => getRecentProjects());

    const RecentprojectData = recentProjectsData?.data;

    const projectData = projectsData?.data;
    if (projectError) {
        navigate('/*');
    }

    if (isProjectLoading) {
        return <LinearProgress />;
    }

    return (
        <Box sx={{
            alignItems: 'flex-start',
                height: '100vh', // Ensure parent has a height for sticky effect
                display: 'flex',
                flexDirection: 'column',
                
        }}>
            {
                isProjectLoading && <LinearProgress />
            }

        <Container 
            maxWidth="lg" 
            sx={{ 
                mt: 8, 
                alignItems: 'flex-start',
            }}
        >
             <ModalFormProject
                open={open}
                handleClose={handleClose}
                projectImage={projectData?.projectImages[0]}
                projectId={projectId}
                projectName={projectData?.projectName}
            />
            <TitleSection projectData={projectData} />

            <Grid container spacing={3}>
                <Grid item xs={12} md={7} lg={8}>
                    <Box sx={{ textAlign: 'left' }}> 
                        <ImageSection projectData={projectData} />
                        <Overview projectData={projectData}/>
                        <PropertyDescription projectData={projectData}/>
                        <Address projectData={projectData}/>
                        <Amenities projectData={projectData}/>
                        <LocationHighlights projectData={projectData}/>
                        <FloorPlans projectData={projectData}/>
                        <Video projectData={projectData}/>
                        <Reviews projectData={projectData}/>
                        <Calculator projectData={projectData}/>
                        <BankOffers  projectData={projectData}/>
                        <AddReview projectData={projectData} />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={5}
                    lg={4}
                    sx={{
                        position: 'sticky',
                        top: 10, 
                        alignSelf: 'flex-start',
                        mt: isSmallScreen ? 3 : 0,
                        textAlign: 'left',
                        height: 'fit-content', 
                       
                    }}
                  
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width:{xs:'90%', md:'100%'} }}>
                        <ScheduleForm />
                        <BuilderDetails projectData={projectData} />
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'left', marginBottom: '20px' }}> 
                <RecentProjects projects={RecentprojectData} isLoading={isRecentProjectsLoading} />
            </Box>
        </Container>
        </Box>
    );
};

export default ProjectDetails;

