import { useNavigate } from 'react-router-dom';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import List from '@mui/joy/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded';

export function SideBar({ userData }) {
  let navigate = useNavigate();
  const styled = {
    width: '250px',
    height: '97vh',
    backgroundColor: 'blue',
    borderRadius: '20px',
    color: 'white'
  };
  return (
    <div>
      <List style={styled}>
        <ListItem style={{ marginTop: '90%', fontSize: '1.5rem' }}>
          <ListItemButton onClick={() => navigate(`/profile/${userData}`)}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>Profile</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
        <ListItem style={{ marginTop: '5px', fontSize: '1.5rem' }}>
          <ListItemButton onClick={() => navigate(`/post/${userData}`)}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>Post</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
        <ListItem style={{ marginTop: '5px', fontSize: '1.5rem' }}>
          <ListItemButton onClick={() => navigate(`/gallery/${userData}`)}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>Gallery</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
        <ListItem style={{ marginTop: '5px', fontSize: '1.5rem' }}>
          <ListItemButton onClick={() => navigate(`/todo/${userData}`)}>
            <ListItemDecorator>
            </ListItemDecorator>
            <ListItemContent>ToDo</ListItemContent>
            <KeyboardArrowRight fontSize="xl3" sx={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
