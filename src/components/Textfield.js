import React from 'react'
import { useState } from 'react';



export default function Textfield(props) {
  
    const [text, setText] = useState("");
  
    const changetext=(event)=>{
      setText(event.target.value);
    }

    const handleUp=(event)=>{
      let newtext;
      if(text===""){
        props.alert("Emty Text Box","warning")
       }
      else{
      if(text===text.toUpperCase()){
        props.alert("Text is Already in UpperCase","warning")  
      }

      else{
      newtext=text.toUpperCase();
      setText(newtext);
      props.alert("Text is Coverted to UpperCase","success")
      }
    }
    }
 
    const handleLow=(event)=>{
      let newtext;
      if(text===""){
        props.alert("Emty Text Box","warning")
       }
      else{
      if(text===text.toLowerCase()){
        props.alert("Text is Already in LowerCase","warning") 
      }
      else{
      newtext=text.toLowerCase();
      setText(newtext);
      props.alert("Text is Coverted to LowerCase","success")
      }
    }
    }

    const handleClear=(event)=>{
      let newtext;
      newtext=text;
      if(newtext!==""){
        newtext="";
        setText(newtext);
        props.alert("Text is Cleared!!","success")
        
      }
     else{
      props.alert("Emty Text Box","warning")
     }
    }

    const handleCopy=(event)=>{
      if(text!==""){   
      setText(event.target.value);
      navigator.clipboard.writeText(text);
      props.alert("Text is Selected !!","success");
      }
      else{
        props.alert("Emty Text Box","warning");
      }
      
    }

    const handleChar=(event)=>{
    
      let newtext;
      newtext=text;
      if(newtext===""){
        props.alert("Emty Text Box","warning");
      }
      else{
      setText(newtext.replace(/[^a-zA-Z0-9 ]/g, ""));
      props.alert("Special Character is Removed","success");
      }
      
    }
    const handleSpace=(event)=>{

      if(text!=="")
        {
        let data=text;
        let data1=data.trim().split('  ').filter(word=>word!=='');
        data=data1.join(' ');
        setText(data);
        props.alert("Exta Spaces is Removed","success");
        }
      else{
        props.alert("Emty Text Box","warning");
      }
      
    }
    
  return(
     <>
        <div className="mx-3 mb-3 container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.title}</h1>
        <textarea className="form-control" id="textfield" style={{backgroundColor:props.mode==="dark"?"#212529":"white", color:props.mode==="dark"?"white":"black"}} rows="8" onChange={changetext} value={text}></textarea>
        <br/>
        <button type="button" className="btn btn-primary mx-3" onClick={handleUp}>To UpperCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleLow}>To LowerCase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleChar}>Remove Special Charaters</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleSpace}>Remove Extra Spaces</button>
        <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p>{text===""?"0":text.trim().split(' ').length} Words and {text.length} Charaters</p> 
        <p>{text===""?"0":text.trim().split(' ').length * 0.46} Seconds to read</p> 
        </div>
        <div className='my-3'>
        <h2>Preview</h2>
        <p>{text===""?"Enter text above textbox to preview it to Here":text}</p>
        </div>  
        </div>
        
     </>
  )
}

