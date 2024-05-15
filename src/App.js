import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/home/Home';
import {Routes,Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
      <ToastContainer />
     </BrowserRouter>
  );
}

export default App;