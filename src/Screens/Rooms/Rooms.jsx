import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    price: '$200/night',
    address: '123 Paradise St, Miami FL',
    image: '/src/Images/DeluxRoom.jpeg',
  },
  {
    id: 2,
    name: 'Standard Room',
    price: '$150/night',
    address: '456 Ocean Blvd, Los Angeles CA',
    image: '/src/Images/Standard Room.webp', 
  },
  {
    id: 3,
    name: 'Suite Room',
    price: '$300/night',
    address: '789 Skyline Ave, New York NY',
    image: '/src/Images/SuiteRoom.jpeg', 
  },
  {
    id: 4,
    name: 'Economy Room',
    price: '$100/night',
    address: '101 Downtown Rd, Chicago IL',
    image: '/src/Images/Economy.jpeg', 
  },
  {
    id: 5,
    name: 'Luxury Room',
    price: '$400/night',
    address: '222 Lakeside Dr, San Francisco CA',
    image: '/src/Images/Luxury.jpg', 
  },
  {
    id: 6,
    name: 'Family Room',
    price: '$250/night',
    address: '333 Park Ave, Orlando FL',
    image: '/src/Images/Family.jpg', 
  },
  {
    id: 7,
    name: 'Penthouse Suite',
    price: '$600/night',
    address: '444 Hilltop Rd, Seattle WA',
    image: '/src/Images/penthouse.jpg', 
  },
  {
    id: 8,
    name: 'Executive Room',
    price: '$350/night',
    address: '555 Business Ave, Houston TX',
    image: '/src/Images/Executive suite.jpg', 
  },
  {
    id: 9,
    name: 'Ocean View Room',
    price: '$500/night',
    address: '666 Beachside Blvd, Miami FL',
    image: '/src/Images/presidential Suite.jpg',
  },
];

// Styled Components for Cards
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[12],
  },
  borderRadius: theme.spacing(2),
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: `0 0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  borderRadius: `${theme.spacing(2)}px ${theme.spacing(2)}px 0 0`,
  height: 220,
  objectFit: 'cover',
}));

const Rooms = ({ addBookedRoom, bookedRooms }) => {
  const navigate = useNavigate();


  const handleBookRoom = (roomId) => {

    const bookingDetails = {
      customerName: 'John Doe',
      checkInDate: '2024-09-30',
      checkOutDate: '2024-10-05',
    };

    
    addBookedRoom(roomId, bookingDetails);

   
    navigate(`/customerBooking/${roomId}`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 5,
        backgroundColor: '#f0f4f8',
        minHeight: '100vh',
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: '#333', fontWeight: 700, letterSpacing: '1px' }}
      >
        Explore Our Premium Rooms
      </Typography>


      <Grid container spacing={4} justifyContent="center">
        {rooms.map((room) => (
          <Grid item xs={12} sm={6} md={4} key={room.id}>
            {/* Styled Card */}
            <StyledCard>
              {/* Room Image */}
              <CardMediaStyled component="img" image={room.image} alt={room.name} />
              {/* Room Details */}
              <CardContentStyled>
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  {room.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {room.address}
                </Typography>
                <Typography variant="h6" color="primary">
                  {room.price}
                </Typography>
          
                {bookedRooms && bookedRooms.some((booking) => booking.roomId === room.id) ? (
                  <Button variant="contained" color="primary" disabled>
                    Booked
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2, borderRadius: 2 }}
                    onClick={() => handleBookRoom(room.id)}
                  >
                    Book Now
                  </Button>
                )}
              </CardContentStyled>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Rooms;


