import React from 'react';
import PageFrame from 'pages';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import MySkills from 'pages/MySkills';
import { Routes, Route } from 'react-router-dom';



export const BaseRoutes= () => {
  return (
    <Routes>
      <Route path='/' element={<PageFrame/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='my-skills' element={<MySkills/>} />
        <Route path='contact' element={<Contact/>} /> 
      </Route>
    </Routes>
  )
}
