import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Example logs to simulate fetching from an API
    const exampleLogs = [
      {
        summary: 'Discussion about project deadlines and milestones.',
        details: [
          'User: When is the project deadline?',
          'GPT: The project deadline is set for the end of the month.',
          'User: What are the key milestones?',
          'GPT: The key milestones include the initial draft, review, and final submission.'
        ]
      },
      {
        summary: 'Conversation about favorite programming languages.',
        details: [
          'User: What is your favorite programming language?',
          'GPT: I like Python because of its simplicity and versatility.',
          'User: Why do you prefer Python over other languages?',
          'GPT: Python has a clean syntax and a large supportive community.'
        ]
      },
      {
        summary: 'Discussion on the benefits of exercise.',
        details: [
          'User: Why is exercise important?',
          'GPT: Exercise is important for maintaining physical and mental health.',
          'User: Can you list some benefits?',
          'GPT: Benefits include improved cardiovascular health, stronger muscles, and reduced stress levels.'
        ]
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setLogs(exampleLogs);
    }, 1000);

    // Uncomment and adjust the following code to fetch real data from your backend
    // const fetchLogs = async () => {
    //   try {
    //     const response = await axios.get('/api/logs'); // Adjust the endpoint based on your backend
    //     if (Array.isArray(response.data)) {
    //       setLogs(response.data);
    //     } else {
    //       console.error('Expected an array but got:', response.data);
    //     }
    //   } catch (error) {
    //     console.error('Failed to fetch logs:', error);
    //   }
    // };
    //
    // fetchLogs();
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Conversation Logs
      </Typography>
      <Paper sx={{ padding: 3 }}>
        {logs.map((log, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">Conversation {index + 1}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{log.summary}</Typography>
              <Box mt={2}>
                {log.details.map((detail, detailIndex) => (
                  <Typography variant="body2" key={detailIndex} paragraph>
                    {detail}
                  </Typography>
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Container>
  );
};

export default Logs;
