import React from 'react';

const Friend = ({friend}) => {
    const {name} = friend;
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    );
};

export default Friend;