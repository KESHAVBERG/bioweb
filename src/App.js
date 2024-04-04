// import AppBarComponet from "./componets/AppBar";
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
import LandingPage from "./componets/Landingpage.jsx"

// Routes import

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import OralCancer from "./componets/tests/OralCancer";
import CapsuleEndocopyTest from "./componets/tests/CapsuleEndocopyTest";
import Covid from "./componets/tests/Covid.jsx";


function App() {

  useEffect(() => {
    const fetchmodels = async () => {
      const models = await fetch("https://farookheroes.pythonanywhere.com/models").then((respnse) => respnse.json()).then((actualData) => console.log(actualData));
      console.log(models);
    }
    fetchmodels();

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/xray" element={<Xray />} />
          <Route path="/ct" element={<CtScan />} />
          <Route path="/mri" element={<MriScan />} />
          <Route path="/ossi" element={<Ossi />} />
          <Route path="/thermography" element={<Thermography />} />
          <Route path="/ultrasound" element={<Ulrasound />} />
          <Route path="/mri/oralcancer" element={<OralCancer />} />
          <Route path="/ossi/capsuleendoscopy" element={<CapsuleEndocopyTest />} />

          <Route path="/xray/covid" element={<Covid />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
