import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Link } from '@mui/material';
import { auth } from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore methods if needed
import { database } from '../Config/firebase'; // Import your Firestore instance

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save UserID in localStorage
      localStorage.setItem('UserID', user.uid);

      // Fetch user data from Firestore
      const userData = await getDoc(doc(database, 'users', user.uid));
      console.log('User data:', userData.data());

      alert('User Login......! \n Welcome to the Dashboard...');
      navigate('/home'); // Navigate to home page after successful login
    } catch (error) {
      setError(error.message); // Display error message if login fails
      console.error('Login Error:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '30px', width: '100%', maxWidth: '400px', margin: '0 auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          Don't have an account?{' '}
          <Link href="/signup" underline="hover" onClick={() => navigate('/signup')}>
            Sign up here
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
