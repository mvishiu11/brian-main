import React, { useState, Suspense, lazy } from 'react';
import { Container, Typography, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemText, AppBar, Toolbar, Menu, MenuItem, Switch, FormControlLabel } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu'; // Current menu icon
import HomeIcon from '@mui/icons-material/Home'; // New icon example
import UploadFileIcon from '@mui/icons-material/UploadFile'; // New icon example
import ChatIcon from '@mui/icons-material/Chat'; // New icon example
import ListAltIcon from '@mui/icons-material/ListAlt'; // New icon example
import LinkIcon from '@mui/icons-material/Link'; // New icon example
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const FileUpload = lazy(() => import('../components/FileUpload'));
const Chat = lazy(() => import('../components/Chat'));
const Logs = lazy(() => import('../components/Logs'));
const Connections = lazy(() => import('../components/Connections'));

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page after logout
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Implement dark mode toggle logic here
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <List>
        <ListItem button component={Link} to="/dashboard/fileupload">
          <UploadFileIcon sx={{ mr: 2 }} />
          <ListItemText primary="File Upload" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/chat">
          <ChatIcon sx={{ mr: 2 }} />
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/logs">
          <ListAltIcon sx={{ mr: 2 }} />
          <ListItemText primary="Logs" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard/connections">
          <LinkIcon sx={{ mr: 2 }} />
          <ListItemText primary="Connections" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={handleTitleClick}>
            BrianAI
          </Typography>
          <IconButton
            color="inherit"
            aria-label="settings"
            edge="end"
            onClick={handleMenu}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <FormControlLabel
                control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
                label="Dark Mode"
              />
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: 8, // Adjusting to make space for AppBar
        }}
      >
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<FileUpload />} />
            <Route path="fileupload" element={<FileUpload />} />
            <Route path="chat" element={<Chat />} />
            <Route path="logs" element={<Logs />} />
            <Route path="connections" element={<Connections />} />
          </Routes>
        </Suspense>
      </Box>
    </Box>
  );
};

export default Dashboard;
