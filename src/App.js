import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState} from 'react';
import { LandingPage } from './LandingPage';
import { ToDo } from './ToDo';
import { Gallery } from './Gallery';
import { Post } from './Post';
import { Profile } from './Profile';



function App() {
    const [userData,setUserdata] = useState([]);

    useEffect(()=>{
      fetch(" https://panorbit.in/api/users.json")
      .then(res=>res.json())
      .then(data=>setUserdata(data.users))
      .catch(err => console.log(err));
    },[]);

  return (
      <Routes>
        <Route path='/' element={<LandingPage userData={userData}/>}/>
        <Route path='/profile/:id' element={<Profile userData={userData} />} />
        <Route path='/post/:id' element={<Post userData={userData} />}/>
        <Route path='/gallery/:id' element={<Gallery userData={userData} />}/>
        <Route path='/todo/:id' element={<ToDo userData={userData} />}/>
      </Routes>      
  );
}

export default App;
