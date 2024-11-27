import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  Typography,
  Slider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Filters {
  propertyType: string[];
  priceRange: number[];
  bhk: number[];
  location: string[];
}

interface FilterProps {
  open: boolean;
  handleClose: () => void;
  onFilterChange: (filters: Filters) => void;
}

const propertyTypes = ['Villa', 'Apartment', 'Plot', 'House'];
const bhkOptions = [1, 2, 3, 4];
const locations = ['New York', 'Los Angeles', 'Miami', 'San Francisco'];

const Filter: React.FC<FilterProps> = ({ open, handleClose, onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    propertyType: [],
    priceRange: [0, 2000000],
    bhk: [],
    location: [],
  });

  // Update filters automatically when they change
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // Handle filter value changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handle price range slider
  const handlePriceRangeChange = (event: Event, newValue: number | number[]) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: newValue as number[],
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      propertyType: [],
      priceRange: [0, 2000000],
      bhk: [],
      location: [],
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>
        Filters
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box>
          <Grid container spacing={3}>
            {/* Property Type Filter */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Property Type</InputLabel>
                <Select
                  multiple
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {propertyTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      <Checkbox checked={filters.propertyType.indexOf(type) > -1} />
                      <ListItemText primary={type} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Location Filter */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Location</InputLabel>
                <Select
                  multiple
                  name="location"
                  value={filters.location}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      <Checkbox checked={filters.location.indexOf(location) > -1} />
                      <ListItemText primary={location} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* BHK Filter */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>BHK</InputLabel>
                <Select
                  multiple
                  name="bhk"
                  value={filters.bhk}
                  onChange={handleChange}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {bhkOptions.map((bhk) => (
                    <MenuItem key={bhk} value={bhk}>
                      <Checkbox checked={filters.bhk.indexOf(bhk) > -1} />
                      <ListItemText primary={`${bhk} BHK`} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Price Range Filter with Slider */}
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Price Range</Typography>
              <Slider
                value={filters.priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={2000000}
                step={50000}
              />
              <Typography>{`$${filters.priceRange[0]} - $${filters.priceRange[1]}`}</Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={clearFilters}>Clear Filters</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Filter;
