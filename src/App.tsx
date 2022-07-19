import React from 'react';
import { Header } from './components/header';
import './style/global.ts';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { ViewCart } from './components/viewCart';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/viewCart/:id' element={<ViewCart/>}/>
      <Route path='/' element={
        
          <Header/>
        
      }/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
