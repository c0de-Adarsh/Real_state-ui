

import React from 'react'
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App