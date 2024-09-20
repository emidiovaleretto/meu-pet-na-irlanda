import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Auth from './Components/Auth/Auth';
import './App.css';
import { UserStorage } from './UserContext';

const App = () => {
  return <div>
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
