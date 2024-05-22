import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Load initial messages if needed
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/chat/messages'); // Adjust the endpoint based on your backend
        // Ensure the response data is an array
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
    <Container>
      <Typography variant="h5">Chat with GPT</Typography>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg.text} secondary={msg.sender} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
};

export default Chat;
