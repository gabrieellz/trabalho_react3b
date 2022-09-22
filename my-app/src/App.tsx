import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Contatos } from "./pages/Contatos";
import {Home} from './pages/Home';
import { Servicos } from "./pages/Servicos";
import { Menu} from "./componentes/Menu";


function App() {
  return (
   <>
   <BrowserRouter>
      <Menu />
       <Routes> 
            <Route path='/home' element={<Home/>}/> 
            <Route path='/contato' element={<Contatos/>}/> 
            <Route path='/servico' element={<Servicos/>}/> 
       </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;