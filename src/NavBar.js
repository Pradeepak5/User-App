import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export function NavBar({ userData, value }) {

  let navigate = useNavigate();
  const { id } = useParams();
  const styled = {
    display: 'flex',
    width: '75em'
  };
  return (
    <div style={styled}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {value}
            </Typography>
            <Tooltip title="Sign Out">
              <IconButton onClick={() => navigate('/')} sx={{ p: 0 }}>
                <Avatar alt={userData[id - 1].name} src={userData[id - 1].profilepicture} />
              </IconButton>
            </Tooltip>
            <Button title='Sign Out' color="inherit" onClick={() => navigate('/')}>{userData[id - 1].name}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
