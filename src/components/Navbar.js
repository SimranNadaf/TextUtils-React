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
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
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


        <div className='d-flex'>
          <div className='bg-primary rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("primary")}}></div>
          <div className='bg-success rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("success")}}></div>
          <div className='bg-danger rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("danger")}}></div>
          <div className='bg-warning rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("warning")}}></div>
          <div className='bg-secondary rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("secondary")}}></div>
          <div className='bg-info rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("info")}}></div>
          <div className='bg-light rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("light")}}></div>
          <div className='bg-dark rounded mx-2' style={{height:"30px",width:"30px",border:"1px solid black"}} onClick={()=>{props.toggle("dark")}}></div>
        </div>
        {/* <button type="button" className="btn mx-2 btn-primary rounded"   onClick={props.toggle}>Primary</button>
        <button  type="button" className="btn mx-2  btn-success" onClick={custom2}>Success</button>
        <button type="button" className="btn mx-2 btn-danger" onClick={custom3}>Danger</button>
        <button type="button" className="btn mx-2 btn-warning"  onClick={custom4}>Warning</button>
        <button type="button" class="btn mx-2 btn-info">Info</button>
        <button type="button" class="btn mx-2 btn-light">Light</button>
        <button type="button" class="btn mx-2 btn-dark">Dark</button>
         */}

            {/* <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
            <input className="form-check-input mx-1" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="dark"?"Light":"Dark"} Mode`}</label>
            </div> */}
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

 