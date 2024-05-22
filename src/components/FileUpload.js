import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input } from '@mui/material';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('/upload', formData); // Adjust the endpoint based on your backend
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default FileUpload;