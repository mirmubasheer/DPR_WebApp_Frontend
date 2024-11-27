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
} from '@mui/material';
import { LocationOn, Bed, Bathtub, SquareFoot, OpenInFull, Share } from '@mui/icons-material';
import ShareButton from '../../components/Share/Share';
import { useNavigate } from 'react-router-dom';
import { ProjectsImages } from '../../assets';
import { Project } from './ProjectInterface';



interface ProjectsCardProps {
  projects: Project[];
}

const urlToShare = "http://dprprop.com/projects";
const titleToShare = "Check out these amazing projects!";



const ProjectsCard: React.FC<ProjectsCardProps> = ({ projects }) => {

  const navigate = useNavigate();

  
  const formatNumberIndian = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
  };



  const handleCardClick = (id: string) => {
    navigate(`/projects/${id}`);
  };
  
  
  return (
    <Box sx={{ mt: 2 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {projects.map((project) => (
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
                      height: { xs: 250, md: 350 },
                      objectFit: 'cover',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)', // Image scale on hover
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
                <Typography variant="body2" sx={{ fontWeight: 600 , textAlign: 'left'}}  onClick={() => handleCardClick(project.projectId)}>
                  {project.name}
                </Typography>
                
                {/* Location */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <LocationOn fontSize="small" color="primary" />
                  <Typography variant="caption">
                    {project?.location}, {project?.city}
                  </Typography>
                </Box>
                
                {/* Icons for Bed, Bath, Area */}
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                  <Box display="flex" gap={2} alignItems="center">
                    <Box display="flex" alignItems="center">
                      <Bed fontSize="small"color="primary" />
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

                {/* Divider */}
                <Divider sx={{ my: 1.3 }} />

                {/* Bottom Actions: For Rent, OpenInFull, Share */}
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{my:1}}>
                <Box
                  sx={{
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#30779d',
                    borderRadius: '10px',
                    padding: '5px 10px',
                    color : 'white',
                    opacity: 0.8,
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 , textAlign: 'left', color: 'white'}}>
                  <b> ₹ {formatNumberIndian(project.sftPrice)}</b> /sft
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
    </Container>
    </Box>
  );
};

export default ProjectsCard;
