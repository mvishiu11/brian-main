import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Registered successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to register');
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Register</Typography>
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
        onClick={handleRegister}
        style={{ marginTop: '20px' }}
      >
        Register
      </Button>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
  );
};

export default Register;
