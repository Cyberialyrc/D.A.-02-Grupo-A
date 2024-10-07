import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

function Post() {
    const { postId } = useParams();
    const post = { /* fetch post data from API or database */ };

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Comments postId={postId} />
        </div>
    );
}

export default Post;