import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = () => {
    return (
        <AuthContext.Provider value={}>
            
        </AuthContext.Provider>
    );
};

export default UserContext;