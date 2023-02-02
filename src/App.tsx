import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useWindowDimensions from './utils/windowDimension';

import Main from './components/Main/Main';
import ListPage from './components/List/ListPage';

import Header from './components/Headers/Header';
import Logo from './components/Headers/Logo';

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
        <Header />
        <Logo />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/order" element={<div />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
