import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>This is Main</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;