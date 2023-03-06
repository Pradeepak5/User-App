import { useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

export function NavBar({ userData, value }) {

  let navigate = useNavigate();
  const { id } = useParams();
  const styled = {
    display: 'flex',
    width: '75em'
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={styled}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {value}
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userData[id-1].profilepicture} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu} style={{display:'flex',justifyContent:'center'}}>
                  <Typography textAlign="center"><img style={{ width: '100px', height: '100px', borderRadius: '50%'}} src={userData[id-1].profilepicture} alt={userData[id-1].username}/></Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} style={{display:'flex',justifyContent:'center'}}>
                  <Typography textAlign="center">{userData[id-1].name}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} style={{display:'flex',justifyContent:'center'}}>
                  <Typography textAlign="center">{userData[id-1].email}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} style={{display:'flex',justifyContent:'center'}}>
                  <Typography style={{backgroundColor:'red',color:'white',borderRadius:'5px',padding:'5px'}} textAlign="center" onClick={()=>navigate('/')}>Sign Out</Typography>
                </MenuItem>
            </Menu>
          </Box>
            <Button title='Click profile image' color="inherit">{userData[id - 1].name}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
