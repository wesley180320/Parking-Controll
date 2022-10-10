
import './App.css';
import React from 'react';
import Navbar from './Layout/Navbar';
import Cadastrar from "./Pages/Cadastrar"
import Home from './Pages/Home';
import Footer from "./Layout/Footer"
import Deletar from './Pages/Deletar';
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

        
        <Routes>
          <Route path='/Deletar' element={<Deletar />}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>




  );
}

export default App;
