
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
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <React.Fragment>

    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Canvas/>} />
        <Route exact path="/canvas" element={<Canvas/>} />
        <Route exact path="/murals" element={<Murals/>} />

      </Routes>

    </BrowserRouter>
  </React.Fragment>
  </ThemeProvider>
  );
}

export default App;
