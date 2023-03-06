import { useParams } from 'react-router-dom';
import React from 'react';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';
import { ChatBox } from "./ChatBox";

export function Gallery({ userData }) {
  let { id } = useParams();
  const styled = {
    display: 'flex',
    gap: '55px'
  };
  const value = "Gallery";
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={styled}>
        <SideBar userData={userData[id - 1].id} />
        <div>
          <NavBar userData={userData} value={value} />
          <p style={{ display: 'flex', justifyContent: 'center', marginTop: '20%', fontSize: '5em', opacity: '.4' }}>Coming Soon</p>
        </div>
      </div>
      <ChatBox userData={userData} />
    </div>
  );
}
