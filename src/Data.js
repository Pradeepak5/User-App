import { useNavigate } from 'react-router-dom';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export function Data({ data }) {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/profile/${data.id}`);
  };
  return (
    <div>
      <ListItem
        disablePadding
      >
        <ListItemButton onClick={(e) => handleClick(e)}>
          <ListItemAvatar>
            <Avatar
              alt={data.profilepicture}
              src={data.profilepicture} />
          </ListItemAvatar>
          <ListItemText id={data.id} primary={data.name} />
        </ListItemButton>
      </ListItem>
    </div>
  );
}
