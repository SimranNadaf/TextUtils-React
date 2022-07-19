// props : parameters that you difine name in component and declare name in App.js 
// while using actual component

// PropsType : here you can decide type(string,integer,object,ext) of props 
// if don't give name to prop according theire type then it will show/display error
import React from 'react'

import PropTypes from 'prop-types'
// import{Link} from "react-router-dom"

export default function Navbar(props) {
  
  // const custom1=()=>{
  //   props.color("#322152");
  // }
  // const custom2=()=>{
  //   props.color("#2d076b");
  // }
  // const custom3=()=>{
  //   props.color("#042f6e");
  // }
  // const custom4=()=>{
  //   props.color("#243856");
  // }
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.AboutText}</Link> 
            
          </li> */}
        </ul>


        {/* <button type="button" className="btn mx-2" style={{backgroundColor:"#322152", padding:12, borderRadius:50}}  onClick={custom1}></button>
        <button  type="button" className="btn mx-2" style={{backgroundColor:"#2d076b", padding:12, borderRadius:50}} onClick={custom2}></button>
        <button type="button" className="btn mx-2" style={{backgroundColor:"#042f6e", padding:12, borderRadius:50}} onClick={custom3}></button>
        <button type="button" className="btn mx-2" style={{backgroundColor:"#243856", padding:12, borderRadius:50}} onClick={custom4}></button> */}
         

            <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
            <input className="form-check-input mx-1" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="dark"?"Light":"Dark"} Mode`}</label>
            </div>
      </div>
    </div>
  </nav>
  </>
  )
}
// Declare default props name 
Navbar.defaultProps = {
    title: 'Navbar Name Here',
    AboutText: 'About here'
  };

// declaring types of props that is used in components
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    AboutText: PropTypes.string.isRequired
  };

 