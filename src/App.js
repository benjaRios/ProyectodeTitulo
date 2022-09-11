import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import Home from "./componentes/Home";
import Dashboard from "./componentes/Dashboard";




function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          
        
      </Routes>
    </Router>
  );
}

export default App;
