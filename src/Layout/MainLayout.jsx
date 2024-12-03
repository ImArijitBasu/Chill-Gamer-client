import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='dark:bg-black dark:text-white'>
            <div className="container mx-auto py-5"><Header></Header></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;