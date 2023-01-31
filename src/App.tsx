import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import useWindowDimensions from './utils/windowDimension';
import Main from './components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f6b716',
    },
    secondary: {
      main: '#40a02b',
    },
  },
});

function App() {
  const { height, width } = useWindowDimensions();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <img
          className='BG'
          src="/img/bg.jpg"
          width={width}
          height={height}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<div />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
