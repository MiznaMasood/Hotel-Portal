import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { database } from '../../Config/firebase';
import { addDoc, collection } from 'firebase/firestore';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  boxShadow: theme.shadows[5],
  borderRadius: theme.spacing(2),
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: '#3f51b5', 
  fontWeight: 700,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(4),
}));

const CustomerBooking = () => {
  const { roomId } = useParams(); 
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    specialRequests: '',
    roomId: roomId, 
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleBooking =async () => {
    try {
        const docRef = await addDoc(collection(database, "customerBooking"), {
          bookingDetails
        });
        console.log("Booking Successful, ID: ", docRef.id);
        navigate('/paymentForm');

      } catch (e) {
        console.error("Error adding document: ", e);
      }
  
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#e3f2fd'; 

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 5, minHeight: '100vh' }}>
      <Heading variant="h4" align="center">
        Book Your Room
      </Heading>

      <StyledCard>
        <Grid container spacing={3}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Check-In Date */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Check-In Date"
              type="date"
              name="checkInDate"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Check-Out Date */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Check-Out Date"
              type="date"
              name="checkOutDate"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Room Type */}
          <Grid item xs={12}>
            <TextField
              label="Room Type"
              name="roomType"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Special Requests */}
          <Grid item xs={12}>
            <TextField
              label="Special Requests"
              name="specialRequests"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              onChange={handleChange}
            />
          </Grid>

          {/* Book Room Button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleBooking}
              sx={{ borderRadius: 2, height: 50 }}
            >
              Book Now
            </Button>
          </Grid>
        </Grid>
      </StyledCard>
    </Container>
  );
};

export default CustomerBooking;