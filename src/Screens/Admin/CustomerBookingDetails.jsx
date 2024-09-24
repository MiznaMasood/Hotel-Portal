import React, { useState, useEffect } from 'react';
import { Container, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, CircularProgress, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; // Import 'doc' from firestore
import { database } from '../../Config/firebase';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'; // Import styled and ThemeProvider

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Adjust as needed
    },
    secondary: {
      main: '#f44336', // Adjust as needed
    },
    error: {
      main: '#f44336', // Adjust as needed
    },
    background: {
      default: '#f0f0f0', // Adjust as needed
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

// StyledTableCell for customizing table cell styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
}));

// StyledTableRow for customizing table row styles
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
  },
}));

const CustomerBookingDetail = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, 'customerBooking'));
        const bookingData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBookings(bookingData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings: ', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleDeleteBooking = async (bookingId) => {
    try {
      await deleteDoc(doc(database, 'customerBooking', bookingId));
      setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== bookingId));
      console.log('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking: ', error);
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="body1" color="error">{`Error: ${error}`}</Typography>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Booking Details
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Check-In Date</StyledTableCell>
                <StyledTableCell>Check-Out Date</StyledTableCell>
                <StyledTableCell>Room Type</StyledTableCell>
                <StyledTableCell>Special Requests</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <StyledTableRow key={booking.id}>
                  <TableCell>{booking.bookingDetails.name}</TableCell>
                  <TableCell>{booking.bookingDetails.email}</TableCell>
                  <TableCell>{booking.bookingDetails.checkInDate}</TableCell>
                  <TableCell>{booking.bookingDetails.checkOutDate}</TableCell>
                  <TableCell>{booking.bookingDetails.roomType}</TableCell>
                  <TableCell>{booking.bookingDetails.specialRequests}</TableCell>
                  <TableCell align="center">
                    <IconButton aria-label="delete" onClick={() => handleDeleteBooking(booking.id)}>
                      <Delete color="secondary" />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CustomerBookingDetail;


