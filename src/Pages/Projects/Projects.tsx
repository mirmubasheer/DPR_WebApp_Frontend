import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  IconButton,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  ListSubheader,
  Popper,
  ClickAwayListener,
  Paper,
  Button,
  useTheme,
  Container,
  Pagination,
  TextField,
  InputAdornment,
  Card,
} from '@mui/material';
import { ViewModule, ViewList, Apps, Search, TableRows as TableRowsIcon } from '@mui/icons-material';
import ProjectCard from './ProjectCard';
import ProjectsList from './ProjectsList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useQuery } from 'react-query';
import { getProjects } from '../../api/services';
import { debounce } from 'lodash';
import SearchIcon from '@mui/icons-material/Search';
import { dprlogo, projectmain, ProjectsImages  } from '../../assets';
import Slider from 'react-slick';
import CustomInput from '../../components/Inputs/CustomInput';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EastIcon from '@mui/icons-material/East';
import SiteVisits from './SiteVisits';







const Projects: React.FC = () => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [searchItem, setSearchItem] = useState<string>('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedBHK, setSelectedBHK] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>('Newest');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000]);
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);


  const { data: ProjectsData, isLoading, error } = useQuery(
    ['getProjects', { searchItem, selectedProperties, selectedLocations, selectedBHK, sortBy, currentPage, itemsPerPage }],
    () => getProjects({
      searchItem,
      propertytype: selectedProperties,
      location: selectedLocations,
      rooms: selectedBHK,
      sortBy,
      currentPage,
      itemsPerPage,
    })
  );


    // from params get the /projects?type=apartments then pass the type to the selectedProperties
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const propertyType = urlParams.get('type');
      console.log('propertyType', propertyType);
      if (propertyType) setSelectedProperties([propertyType]);
    }, []); 

  const sampleData:any  = ProjectsData?.data || [];

  const propertyTypes = ['Villa', 'Apartments', 'Plot', 'House'];
  
  // project.address.city will be added to the locations array  from the sampleData array
  // const locations = Array.from(
  //   new Set(
  //     sampleData
  //       .map((project: any) => project.location)
  //   )
  // );

  const locations: string[] = Array.from(
    new Set(
      sampleData
        .map((project: { location: string }) => project.location) // Assuming location is a string field
    )
  );
  console.log(locations)
    const bhkOptions = [1, 2, 3, 4];

  const sortedData = [...sampleData].sort((a, b) => {
    if (sortBy === 'Newest') return b.projectId.localeCompare(a.projectId);
    if (sortBy === 'Low Price') return a.price - b.price;
    if (sortBy === 'High Price') return b.price - a.price;
    if (sortBy === 'Oldest') return a.projectId.localeCompare(b.projectId);
    return 0;
  });

  const handlePageChange = (value: number) => {
    setCurrentPage(value);
  };

  const handleChangeItemsPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1); 
  };

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePropertyChange = (event: any) => setSelectedProperties(event.target.value);
  const handleLocationChange = (event: any) => setSelectedLocations(event.target.value);
  const handleBHKChange = (event: any) => setSelectedBHK(event.target.value);
  const handleSortChange = (event: any) => {
    setSortBy(event.target.value);
  };
  const handleViewChange = (event: any, newView: 'grid' | 'list') => {
    if (newView !== null) setView(newView);
  };

  const handleSearch = useCallback(
    debounce((value: string) => {
      setSearchItem(value);
    }, 650),
    []
  );


  const handleSearchNew = useCallback(
    debounce((value: string) => {
      setSearchItem(value);
    }, 650),
    []  
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: false,
  };



  
  const clearFilters = () => {
    setSelectedProperties([]);
    setSearchItem('');
    setSelectedLocations([]);
    setSelectedBHK([]);
    setSortBy('Newest');
    setCurrentPage(1); 
    setItemsPerPage(4);
  };

  
  const totalPages =  Math.ceil(sortedData.length / itemsPerPage);
  console.log('totalPages', totalPages, 'currentPage', currentPage, 'itemsPerPage', itemsPerPage, 'sortedData', sampleData);

  const images = [ProjectsImages.project1, ProjectsImages.project2, ProjectsImages.project3];

  
  return (
    <Box sx={{overflow:'hidden'}}>
      {/* Hero Banner with Image Slider */}
      <Box sx={{ position: 'relative', width: '100%', height: '65vh' }}>
      <Box
        sx={{
          backgroundImage: `url(${projectmain})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '65vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      {/* Hero Banner Content */}
      {/* <Box 
        sx={{
          position: 'absolute',
          top: '45%',             
          left: '85%',            
          transform: 'translate(-50%, -50%)', 
          width: { xs: '90%', sm: '70%', md: '50%' }, 
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',  
          color: '#fff',
          zIndex: 2,
          p: 2,                  
          borderRadius: '12px'    
        }}
      >
        <img src={dprlogo} alt="Logo" style={{ width: '110px', height: '90px', objectFit: 'cover', marginBottom: '16px' }} />
        
        <Typography variant="h6" sx={{ textAlign:"left",fontWeight: 600, mb: 2}}>
          Find Your Dream Home
        </Typography>

        <Button 
          variant="contained"
          color="primary"
          sx={{
            borderRadius: '20px',
            backgroundColor: '#30779d',
            fontSize: { xs: '0.8rem', md: '1rem' },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Explore 
          <EastIcon sx={{ ml: 1 }} />
        </Button>
      </Box> */}


      {/* Centered Search Bar */}
      <Box
        sx={{
          
          zIndex: 100,
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '80%', sm: '70%', md: '50%' },
        }}
      >
        
          <Card 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '10px',
              padding: { xs: 1.5, sm: 2.5 },
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.35)',
              width: '100%',
            }}
          >
            <Grid container spacing={2}>
            <Grid item xs={12} md={12}>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: "20px",
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <TextField
                      variant="outlined"
                      placeholder="Project Name / Location / City / Zone"
                      onChange={(e) => handleSearch(e.target.value)}
                      fullWidth
                      sx={{
                        borderRadius: "20px",
                        height: "40px",
                        fontSize: "10px",
                        color: "#1D1D1D",
                        opacity: 1,
                        boxShadow: "0px 6px 14px #36408D08",
                        marginBottom: '10px',
                      }}
                      InputProps={{
                        endAdornment: (
                          <Button variant="contained" color="primary" 
                          sx={{
                            borderRadius: "20px",
                            height: "40px",
                            width: "30px",
                            backgroundColor: '#30779d',
                            color: '#FFFFFF',
                            fontSize: "10px",
                            boxShadow: "0px 6px 14px #36408D08",
                          }}
                          >
                            <SearchIcon fontSize="small" />
                          </Button>
                        ),
                      }}
                    />
                  </Box>
              
              </Grid>
              <Grid item xs={12} md={12}>
              <FormControl sx={{ minWidth: 'auto', mr: 2 }}>
                <Select
                  multiple
                  value={selectedProperties}
                  onChange={handlePropertyChange}
                  IconComponent={ArrowDropDownIcon}
                  displayEmpty
                  renderValue={(selected) => (
                    <Box display="flex" alignItems="center">
                      {selected.length > 0 ? (
                        <>
                          <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>Property Types</Typography>
                          <Box
                            component="span"
                            borderRadius="50%"
                            fontSize="10px"
                            marginLeft="5px"
                            width="15px"
                            height="15px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              backgroundColor: '#30779d',
                              color: '#FFFFFF',
                            }}
                          >
                            {selected.length}
                          </Box>
                        </>
                      ) : (
                        <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>Property Types</Typography>
                      )}
                    </Box>
                  )}
                  sx={{
                    width: '100%',
                    height: "40px",
                    border: "1px solid #1212121A",
                    borderRadius: "20px",
                    opacity: 1,
                    boxShadow: "0px 6px 14px #36408D08",
                    fontSize: "10px",
                    color: "#1D1D1D",
                    textAlign: 'left',
                  }}
                >
                  <ListSubheader sx={{ background: 'transparent' }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                      Property Types
                    </Typography>
                  </ListSubheader>

                  {propertyTypes.map((option) => (
                    <MenuItem key={option} value={option}>
                      <Checkbox
                        checked={selectedProperties.indexOf(option) > -1}
                        sx={{ color: '#1D1D1D', fontSize: "10px" }}
                        size="small"
                      />
                      <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                        {option}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Location Filter */}
               <FormControl sx={{ minWidth: 'auto',mr: 2 }}>
                <Select
                  multiple
                  value={selectedLocations}
                  onChange={handleLocationChange}
                  IconComponent={ArrowDropDownIcon}
                  displayEmpty
                  renderValue={(selected) => (
                    <Box display="flex" alignItems="center">
                      {selected.length > 0 ? (
                        <>
                          <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>Locations</Typography>
                          <Box
                            component="span"
                            borderRadius="50%"
                            fontSize="10px"
                            marginLeft="5px"
                            width="15px"
                            height="15px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              backgroundColor: '#30779d',
                              color: '#FFFFFF',
                            }}
                          >
                            {selected.length}
                          </Box>
                        </>
                      ) : (
                        <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>Locations</Typography>
                      )}
                    </Box>
                  )}
                  sx={{
                    width: '100%',
                    height: "40px",
                    border: "1px solid #1212121A",
                    borderRadius: "20px",
                    opacity: 1,
                    boxShadow: "0px 6px 14px #36408D08",
                    fontSize: "10px",
                    color: "#1D1D1D",
                    textAlign: 'left',
                  }}
                >
                  <ListSubheader sx={{ background: 'transparent' }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                      Locations
                    </Typography>
                  </ListSubheader>

                  {locations.map((option):any => (
                    <MenuItem key={option} value={option}>
                      <Checkbox
                        checked={selectedLocations.indexOf(option) > -1}
                        sx={{ color: '#1D1D1D', fontSize: "10px" }}
                        size="small"
                      />
                      <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                        {option}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> 

              {/* BHK Filter */}
              <FormControl sx={{ minWidth: 'auto', mr:2 }}>
                <Select
                  multiple
                  value={selectedBHK}
                  onChange={handleBHKChange}
                  IconComponent={ArrowDropDownIcon}
                  displayEmpty
                  renderValue={(selected) => (
                    <Box display="flex" alignItems="center">
                      {selected.length > 0 ? (
                        <>
                          <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>BHK</Typography>
                          <Box
                            component="span"
                            borderRadius="50%"
                            fontSize="10px"
                            marginLeft="5px"
                            width="15px"
                            height="15px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                              backgroundColor: '#30779d',
                              color: '#FFFFFF',
                            }}
                          >
                            {selected.length}
                          </Box>
                        </>
                      ) : (
                        <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>BHK</Typography>
                      )}
                    </Box>
                  )}
                  sx={{
                    width: '100%',
                    height: "40px",
                    border: "1px solid #1212121A",
                    borderRadius: "20px",
                    opacity: 1,
                    boxShadow: "0px 6px 14px #36408D08",
                    fontSize: "10px",
                    color: "#1D1D1D",
                    textAlign: 'left',
                  }}
                >
                  <ListSubheader sx={{ background: 'transparent' }}>
                    <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                      BHK
                    </Typography>
                  </ListSubheader>

                  {bhkOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      <Checkbox
                        checked={selectedBHK.indexOf(option) > -1}
                        sx={{ color: '#1D1D1D', fontSize: "10px" }}
                        size="small"
                      />
                      <Typography variant="caption" sx={{ fontWeight: 500, color: '#1D1D1D' }}>
                        {option} BHK
                      </Typography>
                    </MenuItem>
                  ))}
                  </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 'auto' }}>
                  <Button variant="outlined" color="primary" 
                  sx={{
                    borderRadius: "20px",
                    height: "40px",
                    width: "100%",
                    backgroundColor: '#FFFFFF',
                    color: '#30779d',
                    fontSize: "14px",
                    boxShadow: "0px 6px 14px #36408D08",
                  }}
                  onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </FormControl>
              </Grid>
            </Grid>            
          </Card>
      </Box>
    </Box>


    <SiteVisits />
    
    
    <Box sx={{ px :{ xs : 2 , sm : 4 , md : 6 , lg : 8 } , py : 6, backgroundColor: '#F9F9F9', mt: {xs:10 ,md:4} }}>

      <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>

          {/* Search Item here */}
          <FormControl sx={{ minWidth: 'auto' }}>
              {/* <TextField
                placeholder="Search By Project Title"
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) => handleSearch(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton size="small">
                        <Search fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}

          {
            view === 'grid' ? (
              <Typography variant="body1" sx={{ fontWeight: '550', color: '#1D1D1D' }}>
                Total Projects : {sampleData.length}
              </Typography>
            ) : (
              <Typography variant="body1" sx={{ fontWeight: '550', color: '#1D1D1D' }}>
                Total Projects : {sampleData.length}
              </Typography>
            )
          }
            </FormControl>
          
          </Box>

        {/* View Toggle Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <FormControl sx={{ minWidth: 'auto' }}>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              IconComponent={ArrowDropDownIcon}
              displayEmpty
              renderValue={() => <Typography variant='caption' sx={{ fontSize: '10px', color: '#1D1D1D', opacity: 0.6 }}>Sort By</Typography>}
              sx={{
                width: '100%',
                height: "40px",
                border: "1px solid #1212121A",
                borderRadius: "20px",
                opacity: 1,
                boxShadow: "0px 6px 14px #36408D08",
                fontSize: "10px",
                color: "#1D1D1D",
                textAlign: 'left',
              }}
            >
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Best Seller">Best Seller</MenuItem>
              <MenuItem value="Low Price">Low Price</MenuItem>
              <MenuItem value="High Price">High Price</MenuItem>
              <MenuItem value="Oldest">Oldest</MenuItem>
            </Select>
        </FormControl>
          <Box sx={{ ml: 2 }} />

          <FormControl sx={{ minWidth: 'auto' }}>
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              sx={{
                marginLeft: { xs: 0, sm: "auto" },
                mt: { xs: "0px", sm: 0 },
              }}
            >
              <ToggleButton
                value="grid"
                sx={{
                  width: "40px",
                  height: "35px",
                  backgroundColor: view === "grid" ? "#30779d" : "#ffffff",
                  color: view === "grid" ? "#ffffff" : "#000000",
                  borderRadius: "20px 0 0 20px",
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderRight: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#30779d",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#30779d",
                      color: "#ffffff",
                    },
                  },
                }}
              >
                <Apps />
              </ToggleButton>
              <ToggleButton
                value="list"
                sx={{
                  width: "40px",
                  height: "35px",
                  backgroundColor: view === "list" ? "#30779d" : "#ffffff",
                  color: view === "list" ? "#ffffff" : "#000000",
                  borderRadius: "0 20px 20px 0",
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderLeft: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#30779d",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "#30779d",
                      color: "#ffffff",
                    },
                  },
                }}
              >
                <TableRowsIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </FormControl>
        </Box>
      </Box>
      </Container>

      {view === 'grid' ? (
        <ProjectCard projects={paginatedData} />
      ) : (
        <ProjectsList projects={paginatedData} />
      )}

        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => handlePageChange(value)}
              shape="rounded"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'primary.main',
                  height: '27px',
                  minWidth: '27px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  margin: '0 4px',
                },
                '& .MuiPaginationItem-page.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                },
                '& .MuiPaginationItem-page.Mui-selected:hover': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                },
              }}
            />
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography component="span">Rows per page:</Typography>
            <Select
              value={itemsPerPage}
              onChange={(e) => handleChangeItemsPerPage(Number(e.target.value))}
              variant="outlined"
              sx={{
                width: 'auto',
                height: '25px',
                background: '#FFFFFF',
                borderRadius: '5px',
                textAlign: 'center',
                lineHeight: '20px',
                marginLeft: '10px',
              }}
            >
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={150}>150</MenuItem>
              <MenuItem value={200}>200</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Box>
      
    </Box>

    </Box>
  );
};

export default Projects;
