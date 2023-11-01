import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SuporteLP from "../pages/pgsuporte/SuporteLP";
import Login from "../pages/pglogin/Login";
import Cadastro from '../pages/pgcadastro/Cadastro';
import Esqsenha from "../pages/pgesqsenha/Esqsenha";




const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element= {<Home />} />
            <Route path="*" element= {<NotFound />} />
            <Route path="/Suporte" element ={<SuporteLP />} />
            <Route path="/Login" element ={<Login />} />
            <Route path="/Cadastro" element={<Cadastro />} />
            <Route path="/Esqsenha" element ={<Esqsenha />} />

            
            

           
           
            
        </Routes>
    </main>
)

export default Content;