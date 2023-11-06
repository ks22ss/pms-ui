import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import NavMenu from './components/NavMenu';


function App() {
  return (
    
      
      <Routes>
        <Route path="/" element={
          <div className="App bg-gray-100 p-4 overflow-y-hidden">
            <NavMenu />
            <Home />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={
            <div className="App bg-gray-100 p-4">
              <NavMenu />
              <Profile />
            </div>
        } />
        <Route path="/product" element={
            <div className="App bg-gray-100 p-4">
              <NavMenu />
              <Product />
            </div>
        } />
        <Route path="/shop" element={
            <div className="App bg-gray-100 p-4">
              <NavMenu />
              <Shop />
            </div>
        } />
      </Routes>
    
  );
}

export default App;
