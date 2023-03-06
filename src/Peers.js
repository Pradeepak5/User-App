import React from 'react';

export function Peers({ data, index }) {
  const styled = {
    display: 'flex',
    alignItems: 'center',
    width: '240px',
    height: '40px',
  };
  return (

    <div style={styled}>
      <img style={{ width: '30px', height: '30px', borderRadius: '50%', marginLeft: '10px' }} src={data.profilepicture} alt={data.name} />
      <h4 style={{ marginLeft: '10px' }}>{data.username}</h4>
    </div>
  );
}
