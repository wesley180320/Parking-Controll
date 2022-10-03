
import './App.css';
import React from 'react';
import Navbar from './Layout/Navbar';
import Cadastrar from "./Pages/Cadastrar"
import Home from './Pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path='/Cadastrar' element={<Cadastrar />}></Route>
        </Routes>
      </BrowserRouter>

    </>




  );
}

export default App;
