import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

const OurServices = () => {
  return (
    <Container style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
      <Typography style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Our Services
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                Room Booking
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                Book your dream room at the best price.
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                Food & Beverage
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                Enjoy delicious cuisine at our restaurants.
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Order Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Spa & Wellness
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Relax and rejuvenate at our spa.
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              Book Spa
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Travel Desk
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Plan your trip with us! Ticket booking, travel planning & tour packages.
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
             Plan trip
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
              Laundry Service
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
              Expert laundry services: wash, dry, iron, and fold. Convenient and affordable
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
              Book Laundry
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
            <CardContent>
              <Typography style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
                Event Planning
              </Typography>
              <Typography style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                Plan your special events with us.
              </Typography>
              <Button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
                Plan Event
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurServices;