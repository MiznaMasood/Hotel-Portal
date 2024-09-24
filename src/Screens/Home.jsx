import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Navbar from '../Components/Navbar';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f0f4f8',
  padding: theme.spacing(5),
}));

const Home = () => {
  return (
    <>
    <Navbar />
    <StyledBox>
      {/* Hero Section */}
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" component="div" gutterBottom>
            Welcome to Our Hotel
          </Typography>
          <Typography variant="h6" component="div" color="text.secondary">
            Experience the best hospitality in town
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Book Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjAlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Hotel Image"
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
        </Grid>
      </Grid>

      {/* Features Section */}
      <Typography variant="h2" component="div" gutterBottom sx={{ mt: 5 }}>
        Our Features
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ImageListItem sx={{ borderRadius: '10px' }}>
            <img
              src="https://media.istockphoto.com/id/1266155634/photo/luxurious-and-elegant-bedroom-interiors.webp?a=1&b=1&s=612x612&w=0&k=20&c=LxdPMTz1TEPrMslImhUBnuH2thYMZs8nTOcnHRNFGsk="
              alt="Room Image"
            />
            <ImageListItemBar title="Luxury Rooms" />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageListItem sx={{ borderRadius: '10px' }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1661878716924-af3c5ed5b083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBkaW5pbmd8ZW58MHx8MHx8fDA%3D"
              alt="Restaurant Image"
            />
            <ImageListItemBar title="Fine Dining" />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageListItem sx={{ borderRadius: '10px' }}>
            <img
              src="https://media.istockphoto.com/id/1400240563/photo/3d-rendering-of-modern-house-with-wood-plank-facade-by-the-sea-or-ocean.jpg?s=612x612&w=0&k=20&c=dHvQPxM3wTQcW6iS20mhhZm7Vqco9tpq6e8y2TswtN4="
              alt="Outdoor Pool"
            />
            <ImageListItemBar title="Outdoor Pool" />
          </ImageListItem>
        </Grid>
      </Grid>

  
    </StyledBox></>
  );
};

export default Home;