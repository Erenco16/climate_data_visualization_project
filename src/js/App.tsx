import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { motion, useScroll } from 'framer-motion';


function App() {
  return (
    <div className='App center'> 
      <motion.div
        animate={{ scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"] }} 
        transition={{ duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1 }}
        style={{ 
          backgroundColor: "#FFFFFF", 
          width: "500px", 
          height: "500px", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
        }} 
      >
        <span style={{ fontSize: "50px", color: "#00ED64" }}> Test </span>
      </motion.div>
    </div>
      
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>
    //       This is a test paragraph to see if I can straight commit to the main branch
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
