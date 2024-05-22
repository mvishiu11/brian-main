import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
          About Us
        </Typography>
        <Typography variant="h5" paragraph sx={{ textAlign: 'center', marginBottom: 4 }}>
          We're not just another web app. We're your digital sidekick.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="/modern-phone.webp" // Replace with actual image path
                alt="Our Mission"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Our Mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our mission is to make your life easier by providing an exceptional web app experience. 
                  Whether you're looking to manage tasks, communicate, or just keep track of things, we're here to help.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="/vision.webp" // Replace with actual image path
                alt="Our Vision"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Our Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We envision a world where technology seamlessly integrates into your daily routine, 
                  enhancing productivity and bringing a smile to your face.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="/values.webp" // Replace with actual image path
                alt="Our Values"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Our Values
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  At the heart of our company are values like integrity, innovation, and user-centric design. 
                  We're committed to providing you with the best possible experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image="/join-us.webp" // Replace with actual image path
                alt="Join Us"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Join Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We're always on the lookout for talented individuals who share our passion for making life better through technology. 
                  If you're driven and innovative, we want to hear from you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 4 }}>
          Stay tuned for more exciting updates. We're just getting started!
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutPage;
