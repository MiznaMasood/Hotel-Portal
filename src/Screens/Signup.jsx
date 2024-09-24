import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Paper, 
  Link, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select 
} from '@mui/material';
import { auth } from '../Config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem('user', JSON.stringify({ email: user.email, role }));

      navigate('/home'); 
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
<Container 
  component="main" 
  maxWidth={false} 
  style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    backgroundImage: 'url(https://img.freepik.com/premium-photo/building-with-lot-windows-that-say-hotel_1103290-66730.jpg?size=626&ext=jpg&ga=GA1.1.1546934343.1721186778&semt=ais_hybrid)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    width: '100%', 
    margin: '0 auto' 
  }}
>
      <Paper 
        elevation={3} 
        style={{ 
          padding: '30px', 
          width: '100%', 
          maxWidth: '400px', 
          backgroundColor: 'rgba(255, 255, 255, 0.8)' 
        }}
      >
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
          <Link href="/login" underline="hover" onClick={() => navigate('/')}>
            Log in here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;

