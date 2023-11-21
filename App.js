import React from "react";
import './App.css';
import myImage from '/Users/aadrikasrivastava/Desktop/Business-card/business-card/src/pp.jpg';
import Phone from './Phone';
import Address from './Address';
import Contact from './Contact';

function App() {
  return (
    <div className = "card">
      <div className = "card-content">
        <img src = {myImage} alt = "describe" id = "img" />
        <h1> Aadrika Srivastava</h1>
        <Phone />
        <Contact />
        <Address />
    </div>
    </div>
  );
}

export default App;
