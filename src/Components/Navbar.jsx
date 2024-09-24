import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("User data:", user); 
    if (user && user.role) {
      setRole(user.role);
      setIsAuthenticated(true); 
      console.log("User Role:", user.role); 
    } else {
      console.log("User not authenticated or role not set"); 
      setIsAuthenticated(false); 
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/'); 
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Button edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </Button>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hotel Management Portal
        </Typography>
        <Stack direction="row" spacing={2}>
          {/* Conditionally render links based on role */}
          {role === 'Admin' && (
            <>
              <Button color="inherit" component={Link} to="/home">Home</Button>
              <Button color="inherit" component={Link} to="/customerBookingDetails">Customer Booking Detail</Button>
              <Button color="inherit" component={Link} to="/customerPaymentDetails">Customer Payment Detail</Button>
              <Button color="inherit" component={Link} to="/staffAdd">Staff Add</Button>
              <Button color="inherit" component={Link} to="/staffList">Staff Details</Button>
            </>
          )}

          {role === 'Customer' && (
            <>
              <Button color="inherit" component={Link} to="/rooms">Rooms</Button>
              <Button color="inherit" component={Link} to="/ourServices">Our Services</Button>
            </>
          )}

          {role === 'Staff' && (
            <>
              <Button color="inherit" component={Link} to="/customerBookingDetails">Room Booking Detail</Button>
              <Button color="inherit" component={Link} to="/customerPaymentDetails">Room Payment Detail</Button>
            </>
          )}

     
          {isAuthenticated && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
          {!isAuthenticated && (
            <Button color="inherit" component={Link} to="/">
              Login
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;


