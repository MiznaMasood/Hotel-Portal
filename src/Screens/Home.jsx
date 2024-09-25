import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  backgroundColor: '#f0f4f8',
  padding: theme.spacing(5),
}));

const Home = () => {
  return (
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
            src="https://images.unsplash.com/photo-1551808543-8b37c6c9fdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
              src="https://images.unsplash.com/photo-1516117170441-6bfa69c31f8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="Room Image"
            />
            <ImageListItemBar title="Luxury Rooms" />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageListItem sx={{ borderRadius: '10px' }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2e82d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="Restaurant Image"
            />
            <ImageListItemBar title="Fine Dining" />
          </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageListItem sx={{ borderRadius: '10px' }}>
            <img
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt="Spa Image"
            />
            <ImageListItemBar title="Relaxing Spa" />
          </ImageListItem>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Typography variant="h2" component="div" gutterBottom sx={{ mt: 5 }}>
        Book Your Stay
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Book Now
      </Button>
    </StyledBox>
  );
};

export default Home;