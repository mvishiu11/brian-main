import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Connection from '../components/Connection'; // Ensure the path is correct

const Connections = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Connect Your Accounts
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Connection service="WhatsApp Business" endpoint="/api/whatsapp/connect" />
        <Connection service="Facebook" endpoint="/api/facebook/connect" />
        {/* Add more Connection components for other services as needed */}
      </Box>
    </Container>
  );
};

export default Connections;
