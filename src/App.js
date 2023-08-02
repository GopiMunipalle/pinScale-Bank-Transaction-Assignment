import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import AllTransactions from './components/AllTransactions';
import Profile from './components/Profile';
import UserDashboard from './components/UserDashboard';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard/:userId" element={<Dashboard/>} />
        <Route path='/userdashboard' element={<UserDashboard/>}/>
        <Route path='/alltransactions' element={<AllTransactions/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>  
  );
}

export default App;
