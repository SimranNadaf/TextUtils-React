import React from "react";


export default function About(props) {

    let MyStyle={
        // color:props.mode==="light"?"black":"white",
        // backgroundColor:props.mode==="light"?"white":"black"
        color:props.mode==="light"?"black":"white",
        backgroundColor:props.mode==="light"?"white":"#21375a",
        // boder:"5px solid",
        // borderColor:"white"
      };


  return (
    <>
    
    
    <div className="container" style={MyStyle}>
    <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne" >
            <button style={MyStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
              
            >
              Features of TextUtils
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
            TextUtils can Convert text to UpperCase to LowerCase and vise varsa. 
            it is will copy text, clear text, remove extra spaces 
            and also removes special characters in text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button" style={MyStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Our Specialities
            </button>
          </h2>
          <div
            id="flush-collapseTwo" style={MyStyle}
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
            Count Words and also Count Characters.
            it also show you that how seconds will take to read the text.
            Preview will show text that are present in textbox.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button" style={MyStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              TextUtils
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
            An interface for splitting strings according to rules that are opaque to the user of this interface.
            </div>
          </div>
        </div>
      </div>
      
    </div>

    </>
  );
}
