import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('/api/logs'); // Adjust the endpoint based on your backend
        setLogs(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <Container>
      <Typography variant="h5">Conversation Logs</Typography>
      <List>
        {logs.map((log, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Conversation ${index + 1}`} secondary={log.summary} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Logs;
