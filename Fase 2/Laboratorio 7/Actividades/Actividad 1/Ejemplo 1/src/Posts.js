/*************************************************************************************************
ARCHIVO		: Posts.js
AUTOR		: Lujan Biamonte Percy Aaron
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo para mostrar coleccionar los posts para app.
*************************************************************************************************/
import React from 'react';
import { Link } from 'react-router-dom';

function Posts() {
    const posts = [
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
        { id: 3, title: 'Post 3' },
    ];

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;