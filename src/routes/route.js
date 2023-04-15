import React from "react";
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Register from "../pages/registration/register";
import LoginForm from "../pages/login/login";
import MainPage from "../pages/main/mainPage";
import NotFound from "../pages/404/notFound";

const Rotas = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/inicio" element={<MainPage/>}/>
            <Route path="/cadastro" element={<Register/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="*" element={<NotFound/>}/>
         </Routes>
      </BrowserRouter>
   )

}

export default Rotas