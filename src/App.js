
import React from "react";

import Navbar from "./components/Navbar";

import "./components/app.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";






function App(props) {
  
  
   
  return (
   
    
   
    
    
      
      <div className="App">
        <Navbar/>
        
        <Home></Home>
        
        <Skills></Skills>
        
        <Projects></Projects>
        <Contact></Contact>
        
        
       
      </div>
      
        
    
   
   
    
  
  );
}

export default App;
