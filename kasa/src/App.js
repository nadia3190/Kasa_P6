import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './pages/404/Not-found';


import MyContext from './MyContext.js';
import About from './pages/About/About';

const App = () => {
  const basenameValue = '/APP'; 

  return (
    <MyContext.Provider value={{ basename: basenameValue }}>
   <BrowserRouter>
    <div className="App">
     <Navbar />
     <div className='container-app'>
      <Routes> 
         <Route path="/About" element={<About />} />
        <Route path="/Not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/Not-found" />} />
      </Routes>
      
     </div>
     <Footer />
    </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
