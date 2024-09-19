import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Auth from './Components/Auth/Auth';
import './App.css';
import { UserStorage } from './UserContext';
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);
  const endpoint = `${import.meta.env.VITE_API_URL}/posts/`;
  async function fetchData() {
    console.log('fetching data...');
    const response = await axios(endpoint);
    console.log(response);
    const { data } = response;
    setPosts(data);
    console.log(data);
    return data;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.content}</li>
      ))}
    </ul>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/*' element={<Auth />}>Sign in</Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
