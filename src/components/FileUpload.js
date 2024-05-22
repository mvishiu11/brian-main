import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Typography, List, ListItem, ListItemText, Box, LinearProgress, Card, CardMedia, CardContent } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([
    // Placeholder for uploaded files, replace this with actual fetching mechanism later
    { name: 'File1.txt', size: '2MB', type: 'text/plain' },
    { name: 'File2.jpg', size: '1.5MB', type: 'image/jpeg' },
    { name: 'Document.pdf', size: '3MB', type: 'application/pdf' },
  ]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });
      setUploadedFiles([...uploadedFiles, { name: file.name, size: `${(file.size / 1024 / 1024).toFixed(2)}MB`, type: file.type }]);
      setFile(null); // Clear the file input
      setUploadProgress(0); // Reset progress
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Upload Your Files
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Input type="file" onChange={handleFileChange} sx={{ marginRight: 2 }} />
        <Button variant="contained" color="primary" onClick={handleUpload} disabled={!file}>
          Upload
        </Button>
      </Box>
      {uploadProgress > 0 && (
        <Box sx={{ width: '100%', marginBottom: 2 }}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </Box>
      )}
      <Typography variant="h6" sx={{ marginTop: 4 }}>
        Uploaded Files
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
        {uploadedFiles.map((file, index) => (
          <Card key={index} sx={{ width: 200, marginBottom: 2 }}>
            {file.type.startsWith('image/') && (
              <CardMedia
                component="img"
                height="140"
                image={`/${file.name}`} // Adjust path based on actual file location
                alt={file.name}
              />
            )}
            <CardContent>
              <Typography variant="body1" component="div">
                {file.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {file.size}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FileUpload;
