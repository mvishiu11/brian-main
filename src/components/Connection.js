import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Connection = ({ service, endpoint }) => {
  const [accountId, setAccountId] = useState('');
  const [token, setToken] = useState('');

  const handleConnect = async () => {
    try {
      await axios.post(endpoint, { accountId, token }); // Adjust the endpoint based on your backend
      alert(`${service} account connected successfully`);
    } catch (error) {
      console.error(`Failed to connect to ${service}:`, error);
      alert(`Failed to connect to ${service}`);
    }
  };

  return (
    <Container sx={{ marginBottom: 4 }}>
      <Typography variant="h5">{`Connect ${service} Account`}</Typography>
      <TextField
        label="Account ID"
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleConnect}>
        Connect
      </Button>
    </Container>
  );
};

export default Connection;
