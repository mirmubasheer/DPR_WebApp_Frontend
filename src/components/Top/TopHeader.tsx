import React from 'react';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface TopHeaderProps {
  value: string;
  breadcrumbs?: BreadcrumbItem[];
}

const TopHeader: React.FC<TopHeaderProps> = ({ value, breadcrumbs = [] }) => {
  const theme = useTheme();

  return (
    <Box sx={{ px :{ xs : 2 , sm : 4 , md : 6 , lg : 8 } }}>

    <Container 
      maxWidth="lg"
      sx={{ 
        textAlign: 'left', 
        height: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        marginTop: theme.spacing(6), 
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: '600', 
          mb: theme.spacing(2),
        }}
      >
        {value}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          {/* Home Breadcrumb */}
          <Link 
            to="/home"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
          >
            <HomeIcon sx={{ fontSize: 20, marginRight: '5px', color: '#30779d' }} />
            <Typography variant="body2" color="text.primary" sx={{ fontWeight: 560, '&:hover': { color: '#30779d' } }}>
              Home
            </Typography>
          </Link>

          {/* Dynamically render breadcrumb items */}
          {breadcrumbs.map((breadcrumb, index) => (
            breadcrumb.path ? (
              <Link 
                key={index} 
                to={breadcrumb.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600, '&:hover': { color: '#30779d' } }}>
                  {breadcrumb.label}
                </Typography>
              </Link>
            ) : (
              <Typography key={index} color="primary">
                {breadcrumb.label}
              </Typography>
            )
          ))}

          {/* Current page */}
          <Typography color="primary">{value}</Typography>
        </Breadcrumbs>
      </Box>
    </Container>
    </Box>
  );
};

export default TopHeader;
