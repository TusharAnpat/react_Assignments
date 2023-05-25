import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
  
  return (
    <>
      <AppBar position="static">
            <Box sx={{ marginRight: '85px', justifyContent: 'center', flexGrow: 10, display: { xs: 'none', md: 'flex' } }}>
                <Button onClick={handleComposeTeam} sx={{ my: 2, color: 'white', display: 'block' }}> Compose Team </Button>
                <Button onClick={handleFirstQuarter} sx={{ my: 2, color: 'white', display: 'block' }}> First Quarter </Button>
                <Button onClick={handlePlayersList} sx={{ my: 2, color: 'white', display: 'block' }}> Players List</Button>
            </Box>
           
      </AppBar>
    </>
  );
};
export default Navbar;
