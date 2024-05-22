import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/chat/messages'); // Adjust the endpoint based on your backend
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error('Expected an array but got:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    if (input.trim()) {
      try {
        const response = await axios.post('/api/chat/send', { message: input }); // Adjust the endpoint based on your backend
        // Add the new message to the messages array
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setInput('');
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', margin: 2 }}>
        Chat with GPT
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ justifyContent: msg.sender === 'GPT' ? 'flex-start' : 'flex-end' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'GPT' ? 'flex-start' : 'flex-end' }}>
                <ListItemText
                  primary={msg.text}
                  secondary={msg.sender}
                  sx={{
                    backgroundColor: msg.sender === 'GPT' ? '#f1f1f1' : '#1976d2',
                    color: msg.sender === 'GPT' ? 'black' : 'white',
                    borderRadius: 1,
                    padding: 1,
                    maxWidth: '80%',
                    wordBreak: 'break-word',
                  }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Chat;
