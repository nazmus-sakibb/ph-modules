import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3>Home for {user?.email}</h3> 
        </div>
    );
};

export default Home;