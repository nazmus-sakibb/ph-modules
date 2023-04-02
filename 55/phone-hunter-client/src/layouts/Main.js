import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>My Phone hunter</h2>
            <Outlet />
        </div>
    );
};

export default Main;