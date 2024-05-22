import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to log in');
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: '20px' }}
      >
        Login
      </Button>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </Container>
  );
};

export default Login;
