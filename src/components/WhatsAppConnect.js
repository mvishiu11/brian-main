import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

const WhatsAppConnect = () => {
  const [accountId, setAccountId] = useState('');
  const [token, setToken] = useState('');

  const handleConnect = async () => {
    try {
      await axios.post('/api/whatsapp/connect', { accountId, token }); // Adjust the endpoint based on your backend
      alert('WhatsApp Business account connected successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Typography variant="h5">Connect WhatsApp Business Account</Typography>
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

export default WhatsAppConnect;