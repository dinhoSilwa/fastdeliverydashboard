import { useState } from "react";
import { NavBarLateral } from "./components/layouts/navbarlateral";
import Navsuper from "./components/layouts/navbarsupe";
import {Dashboarddelivery} from './pages/home/index';
import {NovoItem} from './pages/formsregister/index';
import {Registeredorders} from './pages/registeredorder/index';
import { BrowserRouter, Routes , Route } from "react-router-dom";


import "./App.css";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/dashboarddelivery" element={<Dashboarddelivery />}/>
      <Route path="/dashboarddelivery/novos-items" element={<NovoItem />}/>
      <Route path="/dashboarddelivery/items-cadastrados" element={<Registeredorders />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

