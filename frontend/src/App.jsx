import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import Home from './Components/Home';
import Signin from './Components/Auth/Signin';
import './App.css';

const App = () => {
  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/*' element={<Signin />}>Sign in</Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
