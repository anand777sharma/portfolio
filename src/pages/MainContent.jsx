import React from 'react'
import Navbar from '../components/Main/Navbar';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className="main-content">
            <Navbar />
            <Outlet/>
        </div>
    )
}

export default MainContent