import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Divider,
  Avatar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Container,
} from '@mui/material';
import { Bathtub, Bed, LocationOn, OpenInFull, SquareFoot } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ShareButton from '../../components/Share/Share';
import { ProjectsImages } from '../../assets';
import { Project } from './ProjectInterface';



interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {

  const navigate = useNavigate();

  const formatNumberIndian = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
  };

  const handleCardClick = (id: string) => {
    navigate(`/projects/${id}`);
  };


  
const urlToShare = "http://dprprop.com/projects";
const titleToShare = "Check out these amazing projects!";



  return (

    <Box sx={{ mt: 1 }}>
    <Container maxWidth="lg">

    <Grid container spacing={4}>
    {projects.map((project) => (
      <Grid item xs={12} key={project.projectId}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': { 
              boxShadow: '0px 5px 15px rgba(0,0,0,0.5)',
              transform: 'translateY(-10px)',
              cursor: 'pointer',
            },
          }}
        >
          {/* Left Part: Image */}
          <Box sx={{ height: { xs: '200px', md: '230px' }, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '100%', md: '250px' },
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              image={`${process.env.NEXT_PUBLIC_STORAGE_DN_URL || "https://dprstorage.b-cdn.net"}/${project.projectImages[0]}`}
              alt={project.name}
              onClick={() => handleCardClick(project.projectId)}
            />
          </Box>

          {/* Right Part: Content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, px: 1.2 }}>
            <CardContent sx={{ flex: '1 0 auto', padding: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="caption" color="primary" sx={{ fontWeight: '500' }} onClick={() => handleCardClick(project.projectId)}>
                  {project.propertyType}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mt: 0.5, color: 'primary.main' }}>
                  <b> ₹ {formatNumberIndian(project.sftPrice)}</b> sft
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.5, textAlign: 'left' }} onClick={() => handleCardClick(project.projectId)}>
                {project.name}
              </Typography>

              <Box display="flex" alignItems="center" gap={1} mb={1}>
                <LocationOn fontSize="small" color="primary" />
                <Typography variant="caption" color="text.secondary">
                  {project.location}
                </Typography>
              </Box>

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

              {/* Bottom Part: Icons */}

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                  <IconButton>
                    <OpenInFull fontSize="small" />
                  </IconButton>
                  <IconButton>
                  <ShareButton shareUrl={`${urlToShare}/${project.projectId}`} shareTitle={titleToShare} />
                  </IconButton>
                </Box>

            </CardContent>
          </Box>
        </Card>
      </Grid>
    ))}
  </Grid>
    </Container>
  </Box>
    )
  };

export default ProjectsList;
