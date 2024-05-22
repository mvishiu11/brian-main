import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: 'url(/path-to-your-background-image.jpg)', // Optional: Add a background image
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fallback color or overlay for the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 4,
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 2, padding: 4 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to BrianAI
        </Typography>
        <section>
          <Typography variant="h5" gutterBottom>
            Login or Register to get started!
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/login">
                Go to Login
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" component={Link} to="/register">
                Go to Register
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="info" component={Link} to="/about">
                Go to About
              </Button>
            </Grid>  
          </Grid>
        </section>
      </Container>
    </Box>
  );
};

export default LandingPage;
