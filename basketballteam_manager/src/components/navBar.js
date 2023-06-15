import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  const handleComposeTeam = () => {
    navigate('/composeteam')
  };
  const handleFirstQuarter = () => {
    navigate('/FirstQuarter')
  };
  const handlePlayersList = () => {
    navigate('/PlayersList')
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Box sx={{ marginRight: '85px', justifyContent: 'center', flexGrow: 10, display: { xs: 'none', md: 'flex' } }}>
          <Button onClick={handleComposeTeam} sx={{ my: 2, color: 'white', display: 'block' }}> Compose Team </Button>
          <Button onClick={handleFirstQuarter} sx={{ my: 2, color: 'white', display: 'block' }}> First Quarter </Button>
          <Button onClick={handlePlayersList} sx={{ my: 2, color: 'white', display: 'block' }}> Players List</Button>
          <span style={{ display: 'flex', flexDirection: 'column', position: 'absolute', right: '0', marginRight: '15px', marginTop: '20px' }}>
            <Person2OutlinedIcon onClick={handleMenuOpen} sx={{ marginLeft: '5px' }} />
            <div style={{ marginRight: '20px', fontSize: '12px' }}>
              Profile
            </div>
          </span>
          <div>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Box>
      </AppBar>
    </>
  );
};
export default Navbar;
