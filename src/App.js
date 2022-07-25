// This is my first my using reactjs(jsx)

// import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textfield from './components/Textfield';
import Alert from './components/Alert';
import { useState } from 'react';
import React from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null);
  const [mode,setMode]=useState("light");
  // const [color,setColor]=useState("#243856");

  // const customColor=(cust)=>{
  //   setColor(cust);
  //   if(mode==="dark"){
  //     document.body.style.backgroundColor=color;
  //   }
  // }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')

  }

  const togglemode=(cls)=>{
    setMode(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    showAlert("Mode is Changed Successfully !! ",cls);
    
  }
  
  return (
  <>
  {/* <Router> */}
  
    <Navbar title={"TextUtils"} AboutText={"About US"} mode={mode} toggle={togglemode}/> 
  
    {/* <Navbar title={"TextUtils"} AboutText={"About US"} mode={mode} toggle={togglemode} color={customColor}/>  */}
    <Alert alert={alert}/>
    <div className="container mx-3">
    <Textfield title="Enter your text below" mode={mode} alert={showAlert}/>
    </div>
    {/* <div className="container my-5">
    <Routes>
        <Route path="/" element={<Textfield title="Enter your text below" mode={mode} alert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </div> */}
  
   



{/* </Router> */}
    
 
  </>
);
}

export default App;
