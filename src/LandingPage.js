import React from 'react';
import { Data } from './Data';

export function LandingPage({ userData }) {
  return (
    <div className='landing-page'>
      <div className='landing-page-container'>
        <h2 className='landing-page-heading'>Select an account</h2>
        <div>
          {userData && userData.map((list, index) => (
            <Data data={list} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
