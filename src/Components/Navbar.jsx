import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack, Menu, MenuItem, Button } from '@mui/material';
import { Menu as MenuIcon, Logout, Login } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [role, setRole] = useState(''); // User role state
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setRole(user.role); // Fetch user role from local storage
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user'); // Clear user from local storage
    navigate('/');
  };

  const handleDropdownOpen = (event, dropdown) => {
    setDropdownAnchor(event.currentTarget);
    setCurrentDropdown(dropdown);
  };

  const handleMenuClose = () => {
    setDropdownAnchor(null);
    setCurrentDropdown(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hotel Management Portal
        </Typography>
        <Stack direction="row" spacing={2}>
          {/* Conditionally render links based on role */}
          {role === 'Admin' && (
            <>
              <Button color="inherit" component={Link} to="/home">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/customerBookingDetails">
                Customer Booking Detail
              </Button>
              <Button color="inherit" component={Link} to="/customerPaymentDetails">
                Customer Payment Detail
              </Button>
              <Button color="inherit" component={Link} to="/staffList">
                Staff Detail
              </Button>
              
            </>
          )}

          {role === 'Customer' && (
            <>
              <Button color="inherit" component={Link} to="/myBookings">
                My Bookings
              </Button>
              <Button color="inherit" component={Link} to="/rooms">
                Rooms
              </Button>
              <Button color="inherit" component={Link} to="/paymentForm">
                Payment
              </Button>
            </>
          )}

          {role === 'Staff' && (
            <>
              <Button color="inherit" component={Link} to="/staff.jsx">
                Task List
              </Button>
              <Button color="inherit" component={Link} to="/serviceRequest">
                Service Requests
              </Button>
            </>
          )}

          {/* Auth Button */}
          <Stack direction="row" spacing={2}>
            {isAuthenticated ? (
              <IconButton color="inherit" onClick={handleLogout}>
                <Logout />
              </IconButton>
            ) : (
              <IconButton component={Link} to="/login" color="inherit">
                <Login />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




