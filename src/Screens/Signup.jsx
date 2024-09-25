import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Link, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State for user role
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info and role to local storage
      localStorage.setItem('user', JSON.stringify({ email: user.email, role }));

      navigate('/home'); // Redirect to home page on successful signup
    } catch (err) {
      setError(err.message); // Set error message if signup fails
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '30px', width: '100%', maxWidth: '400px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="Admin">Admin</MenuItem>
       
              <MenuItem value="Employee">Staff</MenuItem>
              <MenuItem value="Customer">Customer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          Already have an account?{' '}
          <Link href="/login" underline="hover" onClick={() => navigate('/login')}>
            Log in here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;


