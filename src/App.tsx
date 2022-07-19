import React from 'react';
import { Header } from './components/header';
import './style/global.ts';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ViewCart } from './components/viewCart';
import CartProvider from './Context/Cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
      <Routes>
        <Route path='/viewCart/:id' element={<ViewCart/>}/>
      <Route path='/' element={
        
        <Header/>
        
      }/>
      </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
