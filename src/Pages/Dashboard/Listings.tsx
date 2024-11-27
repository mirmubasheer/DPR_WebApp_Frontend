import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
  IconButton,
  Container,
  useMediaQuery,
  Button,
} from '@mui/material';
import { LocationOn, Bed, Bathtub, SquareFoot, OpenInFull } from '@mui/icons-material';
import ShareButton from '../../components/Share/Share';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useQuery } from 'react-query';
import { getRecentProjects } from '../../api/services';
import { Project } from '../Projects/ProjectInterface';


const urlToShare = 'http://dprprop.com/projects';
const titleToShare = 'Check out these amazing projects!';

const Listings: React.FC = ({ }) => {
  const { data: projectData, isLoading, isError } = useQuery('getRecentProjects', getRecentProjects);
  const projects: Project[] = projectData?.data || [];
  
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view

  const formatNumberIndian = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
  };

  const handleSeeAllPropertiesClick = () => {
    navigate('/projects');
  };

  const handleCardClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 6, backgroundColor: '#30779d' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 2, mt: 8 }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 500, fontSize: { xs: '1.4rem', md: '1.6rem' }, color: 'white', textAlign: 'left', mb: 6 }}>
              Discover Our Featured Listings
            </Typography>
            <Typography variant="body1" sx={{ color: '#ffffff', fontSize: { xs: '1rem', md: '1.1rem' }, width: { xs: '100%', md: '700px' }, textAlign: 'left' }}>
              Discover our collection of properties and projects, designed to meet your needs and preferences. Each project is carefully crafted with quality and innovation, offering you an exceptional living experience.
            </Typography>
          </Grid>

          {/* See All Properties Link for Desktop View */}
          {!isMobile && (
            <Grid item xs={12} md="auto" sx={{ mt: { xs: 2, md: 0 } }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#f2c94c',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  color:'black',
                  '&:hover': { backgroundColor: '#C0CDD1' },
                }}
                onClick={handleSeeAllPropertiesClick}
              >
                See All Properties &rarr;
              </Button>
            </Grid>
          )}
        </Grid>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.slice(0, 3).map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.name}>
              <Card
                sx={{
                  boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.5)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  {project.projectImages && (
                    <CardMedia
                      component="img"
                      sx={{
                        height: { xs: 200, md: 320 },
                        objectFit: 'cover',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          cursor: 'pointer',
                        },
                      }}
                      image={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}${project.projectImages[0]}`}
                      alt={project.name}
                      onClick={() => handleCardClick(project.projectId)}
                    />
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      padding: '6px 12px',
                      margin: '10px',
                      borderRadius: '10px',
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      {project?.propertyType}
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'left' }} onClick={() => handleCardClick(project.projectId)}>
                    {project.name}
                  </Typography>

                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <LocationOn fontSize="small" color="primary" />
                    <Typography variant="caption">
                      {project?.location}, {project?.city}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                    <Box display="flex" gap={2} alignItems="center">
                      <Box display="flex" alignItems="center">
                        <Bed fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                        {project?.projectBHK.slice(-2)?.join(', ')} BHK
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Bathtub fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                        {project?.projectBHK.slice(-2)?.join(', ')} Bath
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <SquareFoot fontSize="small" color="primary" />
                        <Typography variant="caption" sx={{ ml: 0.5 }}>
                        {project.maxSize} sqft
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1.3 }} />
                  <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 1 }}>
                    <Box
                      sx={{
                        backgroundColor: '#30779d',
                        borderRadius: '10px',
                        padding: '5px 10px',
                        color: 'white',
                        opacity: 0.8,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500, textAlign: 'left', color: 'white' }}>
                        <b> ₹ {formatNumberIndian(project?.sftPrice)}</b> /sft
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <OpenInFull fontSize="small" />
                      </IconButton>
                      <IconButton>
                        <ShareButton shareUrl={`${urlToShare}/${project.projectId}`} shareTitle={titleToShare} />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* See All Properties Button for Mobile View */}
        {isMobile && (
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f2c94c',
                padding: '8px 16px',
                borderRadius: '8px',
                color:'black',
                '&:hover': { backgroundColor: '#C0CDD1' },
              }}
              onClick={handleSeeAllPropertiesClick}
            >
              See All Properties &rarr;
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Listings;
