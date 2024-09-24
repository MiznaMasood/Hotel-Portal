import React from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem } from '@mui/material';

const BookingManagement = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Booking Management
      </Typography>

      <Grid container spacing={3}>
        {/* Booking ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Booking ID"
            fullWidth
            variant="outlined"
            disabled
          />
        </Grid>

        {/* Customer ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Customer ID"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Room ID */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Room ID"
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Booking Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Booking Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Check-In Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Check-In Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Check-Out Date */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Check-Out Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        {/* Status */}
        <Grid item xs={12}>
          <TextField
            select
            label="Status"
            fullWidth
            variant="outlined"
          >
            <MenuItem value="booked">Booked</MenuItem>
            <MenuItem value="checked_in">Checked In</MenuItem>
            <MenuItem value="checked_out">Checked Out</MenuItem>
          </TextField>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Save Booking
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingManagement;
