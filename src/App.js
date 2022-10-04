import AppBarComponet from "./componets/AppBar";
import Home from "./componets/Home";
import React from 'react'
import { useEffect } from "react";
// import { styled, alpha } from '@mui/material/styles';
import CtScan from './componets/CtScan.jsx'
import MriScan from './componets/MriScan'
import Thermography from "./componets/Thermography.jsx";
import Ulrasound from './componets/Ulrasound.jsx'
import Xray from './componets/Xray.jsx'
import Ossi from "./componets/Ossi";
// Routes import

import {
  BrowserRouter,
  Routes, 
  Route,
  Router,
} from "react-router-dom";


function App() {

  useEffect(()=>{
    const fetchmodels = async()=>{
      const models = await fetch("http://127.0.0.1:5000/models").then(respnse=>{console.log(respnse)});

    }

    fetchmodels();
  
  },[]);

  return (
    <div className="App">
        <BrowserRouter>
        <AppBarComponet />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/xray" element={<Xray />}/>
          <Route path="/ct" element={<CtScan />}/>
          <Route path="/mri" element={<MriScan />}/>
          <Route path="/ossi" element={<Ossi />}/>
          <Route path="/thermograhy" element={<Thermography />}/>
          <Route path="/ultrasound" element={<Ulrasound />}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
