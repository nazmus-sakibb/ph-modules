import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    
    return (
        <div>
            <h1>Details about: {friend.name}</h1>
            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendDetails;