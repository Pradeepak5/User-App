import { useParams } from 'react-router-dom';
import React from 'react';
import { SideBar } from './SideBar';
import { NavBar } from './NavBar';
import { ChatBox } from "./ChatBox";

export function Profile({ userData }) {
  let { id } = useParams();
  const value = "Profile";
  const styled = {
    display: 'flex',
    gap: '55px'
  };
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={styled}>
        <SideBar userData={userData[id - 1].id} />
        <div>
          <NavBar userData={userData} value={value} />
          <div className='profile-content'>
            <div className='user-work-info'>
              <img src={userData[id - 1].profilepicture} alt={userData[id - 1].name} />
              <h3 style={{ marginLeft: '180px' }}>{userData[id - 1].name}</h3>
              <div style={{ display: 'flex' }}>
                <div style={{ borderBottom: '1px solid rgb(0,0,0,.4)', padding: '0px 5px 0px 5px', opacity: '.4' }}>
                  <h4>UserName  </h4>
                  <h4>Email     </h4>
                  <h4>Phone     </h4>
                  <h4>Website   </h4>
                </div>
                <div style={{ borderLeft: '1px solid rgb(0,0,0,.4)', borderBottom: '1px solid rgb(0,0,0,.4)', paddingLeft: '5px' }}>
                  <h4>{userData[id - 1].username}</h4>
                  <h4>{userData[id - 1].email}</h4>
                  <h4>{userData[id - 1].phone}</h4>
                  <h4>{userData[id - 1].website}</h4>
                </div>
              </div>
              <h3 style={{ marginLeft: '35%' }}>Company</h3>
              <div style={{ display: 'flex' }}>
                <div style={{ borderBottom: '1px solid rgb(0,0,0,.4)', padding: '0px 5px 0px 5px', opacity: '.4' }}>
                  <h4>Name</h4>
                  <h4>catchPhrase</h4>
                  <h4>bs</h4>
                </div>
                <div style={{ borderLeft: '1px solid rgb(0,0,0,.1)', borderBottom: '1px solid rgb(0,0,0,.1)', paddingLeft: '5px' }}>
                  <h4>{userData[id - 1].company.name}</h4>
                  <h4>{userData[id - 1].company.catchPhrase}</h4>
                  <h4>{userData[id - 1].company.bs}</h4>
                </div>
              </div>
            </div>
            <div className='user-address'>
              <h3 style={{ marginLeft: '10%' }}>Address</h3>
              <div style={{ display: 'flex' }}>
                <div style={{ borderBottom: '1px solid rgb(0,0,0,.4)', padding: '0px 5px 0px 5px', opacity: '.4' }}>
                  <h4>Street</h4>
                  <h4>Suite</h4>
                  <h4>City</h4>
                  <h4>Zipcode</h4>
                </div>
                <div style={{ borderLeft: '1px solid rgb(0,0,0,.4)', borderBottom: '1px solid rgb(0,0,0,.4)', paddingLeft: '5px' }}>
                  <h4>{userData[id - 1].address.street}</h4>
                  <h4>{userData[id - 1].address.suite}</h4>
                  <h4>{userData[id - 1].address.city}</h4>
                  <h4>{userData[id - 1].address.zipcode}</h4>
                </div>
              </div>
              <div className='map-container'>
                <img src='https://i.pcmag.com/imagery/articles/01IB0rgNa4lGMBlmLyi0VP6-6..v1611346416.png' alt='google map' />
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', opacity: '.4' }}>
                  <h5>Lat : {userData[id - 1].address.geo.lat}</h5>
                  <h5> Long : {userData[id - 1].address.geo.lng}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBox userData={userData} />
    </div>

  );
}
