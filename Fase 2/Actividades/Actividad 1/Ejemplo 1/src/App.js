import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;