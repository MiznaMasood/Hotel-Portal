import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Paper, 
  Link 
} from '@mui/material';
import { auth } from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; 
import { database } from '../Config/firebase'; 


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

      localStorage.setItem('UserID', user.uid);

      const userData = await getDoc(doc(database, 'users', user.uid));
      console.log('User data:', userData.data());

      alert('User Login......! \n Welcome to the Dashboard...');
      navigate('/home'); 
    } catch (error) {
      setError(error.message); 
      console.error('Login Error:', error);
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
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            fullWidth 
            style={{ marginTop: '20px' }}
          >
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
