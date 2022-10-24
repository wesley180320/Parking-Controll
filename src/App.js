
import './App.css';
import React from 'react';
import Navbar from './Layout/Navbar';
import Cadastrar from "./Pages/Cadastrar"
import Home from './Pages/Home';
import Footer from "./Layout/Footer"
import Deletar from './Pages/Deletar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buscar from './Pages/Buscar';
import Atualizar from './Pages/Atualizar';




function App() {
  return (

    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home />}></Route>
          <Route path='/AcessarSistema' element={<Cadastrar />}></Route>
          <Route path='/Deletar' element={<Deletar />}></Route>
         <Route path='/Buscar' element={<Buscar/>}></Route>
         <Route path='/Atualizar' element={<Atualizar/>}></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>

    </>


  );
}

export default App;
