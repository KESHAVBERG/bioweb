import AppBarComponet from "./componets/AppBar";
import Home from "./componets/Home";
import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, Typography, IconButton } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar } from '@mui/material';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <div className="App">
      <AppBarComponet />
      
      <Home />
    </div>
  );
}

export default App;
