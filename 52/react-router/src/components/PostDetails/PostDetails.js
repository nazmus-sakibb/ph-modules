import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

    return (
        <div>
            <h2>Details about post: {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button>Get the Author</button>
        </div>
    );
};

export default PostDetails;