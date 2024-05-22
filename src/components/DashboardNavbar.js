import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={NavLink} to="/dashboard/fileupload" activeClassName="active">
          File Upload
        </Button>
        <Button color="inherit" component={NavLink} to="/dashboard/chat" activeClassName="active">
          Internal Chat
        </Button>
        <Button color="inherit" component={NavLink} to="/dashboard/logs" activeClassName="active">
          Message Log
        </Button>
        <Button color="inherit" component={NavLink} to="/dashboard/connections" activeClassName="active">
          Connections
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
