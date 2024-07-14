
import './App.css';
import React from "react";
import { BrowserRouter, Navigate, Routes, Route, } from "react-router-dom";

import Murals from './pages/Murals';
import Canvas from './pages/Canvas'


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <React.Fragment>

    <BrowserRouter>
    <Routes>
        <Route exact path="/nisha-portfolio" element={<Canvas/>} />
        <Route exact path="/canvas" element={<Canvas/>} />
        <Route exact path="/murals" element={<Murals/>} />

      </Routes>

    </BrowserRouter>
  </React.Fragment>
  </ThemeProvider>
  );
}

export default App;
