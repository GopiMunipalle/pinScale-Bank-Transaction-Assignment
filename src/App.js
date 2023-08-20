import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Login/Home';
import About from "./components/Login/About";
import Posts from "./components/Login/Posts";
import Jobs from './components/Login/Jobs';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
      </Routes>  
  );
}

export default App;
