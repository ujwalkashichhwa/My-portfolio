
import React, { FC } from 'react';
import NavBar from 'components/NavBar';
import { Outlet } from 'react-router-dom';

const PageFrame:FC = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
    
  )
}

export default PageFrame;