import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h3>Friends component: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}/>)
            }
        </div>
    );
};

export default Friends;