import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Peers } from './Peers';


export function ChatBox({ userData }) {
  const [show, setShow] = useState(true);
  const chatToggle = {
    display: show ? 'none' : 'block',
  };
  const hgt = {
    height: show ? '68px' : '350px',
    transition: '.6s ease'
  };
  const handleScroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  const handleBothClick = () => {
    handleScroll();
    setShow(!show);
  };
  return (
    <div style={{ margin: '-5% 0 0 80%', position: 'relative', width: '25%' }}>
      <div onClick={handleScroll} className='chatbox-container' style={hgt}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'blue', borderRadius: '15px 15px 0px 0px', color: 'white', position: 'sticky', top: '0' }}>
          {show ? <KeyboardArrowDownIcon onClick={handleBothClick} /> : <KeyboardArrowUpIcon onClick={() => {
            handleBothClick();
          }} />}
          <h2>Chat</h2>
        </div>
        <div style={chatToggle}>
          {userData && userData.map((data, index) => (
            <Peers data={data} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
