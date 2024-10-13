/*************************************************************************************************
ARCHIVO		: Comments.css
AUTOR		: Lujan Biamonte Percy Aaron
FECHA		: 06/10/2024
DESCRIPCIÓN	: Archivo para juntar y mostrar los comentarios de un post.
*************************************************************************************************/
import React, { useState, useEffect } from 'react';

function Comments({ postId }) {
    // State to hold the fetched comments
    const [fetchedComments, setFetchedComments] = useState([]);

    useEffect(() => {
        // Simulate fetching comments from an API
        async function fetchComments() {
            try {
                const response = await fetch(`/api/comments?postId=${postId}`);
                const comments = await response.json();
                setFetchedComments(comments); // Set the state with the fetched comments
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }

        // Fetch the comments when the postId changes
        fetchComments();
    }, [postId]);

    // Ensure comments are always an array
    const comments = fetchedComments || [];

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <li key={comment.id}>{comment.text}</li>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </ul>
        </div>
    );
}

export default Comments;
