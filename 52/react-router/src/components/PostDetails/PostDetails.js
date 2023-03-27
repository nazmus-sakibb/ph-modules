import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);

    return (
        <div>
            <h2>Details about post</h2>
        </div>
    );
};

export default PostDetails;