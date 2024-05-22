import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Welcome to My WebApp</Typography>
      <section>
        <Typography variant="h4" gutterBottom>About</Typography>
        <Typography paragraph>This is a brief description of the app.</Typography>
        <Button variant="contained" color="primary" component={Link} to="/login">Go to Login</Button>
        <Button variant="contained" color="secondary" component={Link} to="/register" style={{ marginLeft: '10px' }}>Go to Register</Button>
      </section>
    </Container>
  );
};

export default LandingPage;