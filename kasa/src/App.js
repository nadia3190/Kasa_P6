import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer.js"
import { BrowserRouter } from 'react-router-dom';

import MyContext from './MyContext.js';

const App = () => {
  const basenameValue = '/APP'; // Remplacez par la valeur appropriée pour votre application

  return (
    <MyContext.Provider value={{ basename: basenameValue }}>
   <BrowserRouter>
    <div className="App">
     <Navbar />
     <Footer />
    </div>
    </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
