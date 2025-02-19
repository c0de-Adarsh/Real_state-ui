

import React from 'react'
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Features from './Components/Features';
import Sales from './Components/Sales';
import Service from './Components/Service';
import Video from './Components/Video';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
   
    <NavBar />
    <Home />
   <About />
   <Features />
   <Sales />
    <Service />
    <Video/>
    <Clients />
    <Contact />
  <Footer />
    </>
  )
}

export default App