// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Grid } from '@mui/material';
// import CircleIcon from '@mui/icons-material/Circle';

// interface LocationHighlightsProps {
//   projectData: {
//     locationhighlight: string[];
//   };
// }

// const LocationHighlights: React.FC<LocationHighlightsProps> = ({ projectData }) => {
//   const LocationList = projectData?.locationhighlight || [];

//   // Calculate the midpoint for splitting into two columns
//   const columnLength = Math.ceil(LocationList.length );

//   // Split the location highlights into two columns
//   const columns = [
//     LocationList.slice(0, columnLength),
//     LocationList.slice(columnLength),
//   ];

//   return (
//     <Box
//       sx={{
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '10px',
//         border: '1px solid #ddd',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         marginBottom: '20px',
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{ marginBottom: '20px', fontSize: { xs: '16px', md: '18px' } }}
//       >
//         Location Highlights
//       </Typography>

//       <Grid container>
//         {columns.map((column, columnIndex) => (
//           <Grid item xs={12} sm={12} key={columnIndex}> {/* Adjusted grid item for two columns */}
//             <List>
//               {column.map((location, locationIndex) => (
//                 <ListItem key={locationIndex} sx={{ padding: '5px 0' }}>
//                   <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
//                     <CircleIcon sx={{ fontSize: '8px', color: 'black' }} /> {/* Smaller black dot */}
//                   </ListItemIcon>
//                   <ListItemText primary={<Typography variant="body2">{location}</Typography>} />
//                 </ListItem>
//               ))}
//             </List>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default LocationHighlights;




//ready for api below code start


// import React from 'react';
// import { Box, Typography, Card, CardContent } from '@mui/material';
// import Slider from 'react-slick';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import CircleIcon from '@mui/icons-material/Circle';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// // Define icons for different location types
// const locationIcons: any = {
//   Hospital: <LocalHospitalIcon style={{ color: '#ff5722' }} />, // Example color
//   Restaurant: <RestaurantIcon style={{ color: '#ffc107' }} />,
//   // Add more types if necessary
// };

// interface LocationHighlightsProps {
//   projectData: {
//     locationhighlight: {
//       type: string;
//       name: string;
//       distance: string;
//       time: string;
//     }[];
//   };
// }

// const LocationHighlights: React.FC<LocationHighlightsProps> = ({ projectData }) => {
//   const LocationList = projectData?.locationhighlight || [];

//   // Slick slider settings
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1, // Show 1 card on small screens
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <Box
//       sx={{
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '10px',
//         border: '1px solid #ddd',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         marginBottom: '20px',
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Around This Project
//       </Typography>
//       <Slider {...settings}>
//         {LocationList.map((location, index) => (
//           <Box key={index} sx={{ padding: '10px' }}>
//             <Card
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 padding: '10px',
//                 backgroundColor: '#fff',
//                 borderRadius: '10px',
//                 boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)',
//                 width: '300px', // Set width for each card
//               }}
//             >
//               <CardContent sx={{ flex: 1 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                   {/* {locationIcons[location.type] || <CircleIcon />} */}
//                   <Typography sx={{ ml: 1, fontWeight: 'bold', fontSize: '14px' }} variant="subtitle1">
//                     {location.type}
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" sx={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>
//                   {location.name}
//                 </Typography>
//               </CardContent>
//               <CardContent sx={{ textAlign: 'right' }}>
//                 <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '14px' }}>
//                   {location.time}
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: '#888', fontSize: '12px' }}>
//                   {location.distance}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// // Custom next arrow
// const NextArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         background: '#ddd',
//         borderRadius: '50%',
//         padding: '10px',
//       }}
//       onClick={onClick}
//     >
//       <ArrowForwardIosIcon />
//     </div>
//   );
// };

// // Custom previous arrow
// const PrevArrow = (props: any) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'block',
//         background: '#ddd',
//         borderRadius: '50%',
//         padding: '10px',
//       }}
//       onClick={onClick}
//     >
//       <ArrowBackIosIcon />
//     </div>
//   );
// };

// export default LocationHighlights;


//ready for api below code end



import React from 'react';
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Project } from '../../ProjectInterface';
import { FaHospital, FaStore, FaBuilding, FaSchool, FaShoppingCart, FaFilm, FaClinicMedical } from 'react-icons/fa';


// Define icons for different location types
// Define icons for different location types using Font Awesome icons
const locationIcons: Record<string, JSX.Element> = {
  School: <FaSchool style={{ color: '#2196f3' }} />,               // Blue color for schools
  Market: <FaShoppingCart style={{ color: '#8bc34a' }} />,        // Green for markets
  Offices: <FaBuilding style={{ color: '#673ab7' }} />,           // Purple for offices
  'Health Care': <FaClinicMedical style={{ color: '#e91e63' }} />, // Pink for healthcare
  Entertainment: <FaFilm style={{ color: '#ff9800' }} />,         // Orange for entertainment
  Hospital: <FaHospital style={{ color: '#f44336' }} />,          // Red for hospitals
  Restaurant: <FaStore style={{ color: '#ffc107' }} />,           // Yellow for restaurants
};


interface LocationHighlightsProps {
  projectData: Project;
}

// Custom next arrow
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null; // Hide arrow on mobile view

  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#ddd',
        borderRadius: '50%',
        padding: '10px',
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
};

// Custom previous arrow
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null; // Hide arrow on mobile view
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#ddd',
        borderRadius: '50%',
        padding: '10px',
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
};

const LocationHighlights: React.FC<LocationHighlightsProps> = ({ projectData }) => {
  // Static data for testing
  // const projectsData = {
  //   locationhighlight: [
  //     { type: 'Hospital', name: 'Spark Hospitals', distance: '2.7 km', time: '4 mins' },
  //     { type: 'Restaurant', name: 'Hotel Bommarillu Restaurant', distance: '1.5 km', time: '2 mins' },
  //     { type: 'Hospital', name: 'Care Hospitals', distance: '3.0 km', time: '5 mins' },
  //     { type: 'Restaurant', name: 'Tasty Treat Restaurant', distance: '1.0 km', time: '3 mins' },
  //     { type: 'Hospital', name: 'Rainbow Children\'s Hospital', distance: '4.5 km', time: '10 mins' },
  //     { type: 'Restaurant', name: 'Spice Garden Restaurant', distance: '2.0 km', time: '5 mins' },
  //   ],
  // };

  const LocationList = projectData?.locationHighlights || [];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        border: '1px solid #ddd',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Location Highlights 
      </Typography>
      <Slider {...settings}>
        {LocationList.map((location, index) => (
          <Box key={index} sx={{ padding: '10px' }}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)',
                width: '300px', // Set width for each card
                height: '70px',
                ml:1
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {locationIcons[location.locationType] || <CircleIcon />}
                  <Typography sx={{ ml: 1, fontSize: '7px' }} variant="caption">
                    {location.locationType}
                  </Typography>
                </Box>
                <Typography variant="caption" >
                  {location.locationName}
                </Typography>
              </CardContent>
              <CardContent sx={{ textAlign: 'right' }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {location.time}
                </Typography>
                <Typography variant="caption" sx={{ color: '#888', fontSize: '12px' }}>
                  {location.distance}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LocationHighlights;