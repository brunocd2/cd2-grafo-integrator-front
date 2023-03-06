import React from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import FirstAccess from "./pages/FirstAccess";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Notifications from "./pages/Notifications";
import Products from "./pages/Products";

export default function Routes() {
  return(
    <BrowserRouter>
      <Menu hideRoutes={["/", "/nova-senha", "/primeiro-acesso"]}/>
      <RoutesDom>
        <Route path="/" element={<Login />} />
        <Route path="/produtos-cadastrados/:filterType?/:filter?" element={<Products />} />        
        <Route path="/notificacoes" element={<Notifications />} />        
        <Route path="/dashboard" element={<Dashboard />} />        
        <Route path="/nova-senha" element={<ForgotPassword />} />        
        <Route path="/primeiro-acesso" element={<FirstAccess />} />        

      </RoutesDom>
    </BrowserRouter>
  )
}