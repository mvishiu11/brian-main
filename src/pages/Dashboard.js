import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import FileUpload from '../components/FileUpload';
import Chat from '../components/Chat';
import Logs from '../components/Logs';
import WhatsAppConnect from '../components/WhatsAppConnect';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FileUpload />
        </Grid>
        <Grid item xs={12} md={6}>
          <Chat />
        </Grid>
        <Grid item xs={12}>
          <Logs />
        </Grid>
        <Grid item xs={12}>
          <WhatsAppConnect />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;