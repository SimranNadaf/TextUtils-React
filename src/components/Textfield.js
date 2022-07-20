import React from 'react'
import { useState } from 'react';



export default function Textfield(props) {
  
    const [text, setText] = useState("");
  
    const changetext=(event)=>{
      setText(event.target.value);
    }

    const handleUp=(event)=>{
      let newtext;
      
      if(text===text.toUpperCase()){
        props.alert("Text is Already in UpperCase","warning")  
      }

      else{
      newtext=text.toUpperCase();
      setText(newtext);
      props.alert("Text is Coverted to UpperCase","success")
      }
    
    }
 
    const handleLow=(event)=>{
      let newtext;
      
      
      if(text===text.toLowerCase()){
        props.alert("Text is Already in LowerCase","warning") 
      }
      else{
      newtext=text.toLowerCase();
      setText(newtext);
      props.alert("Text is Coverted to LowerCase","success")
      }
    
    }

    const handleClear=(event)=>{
      let newtext;
      newtext=text;
        newtext="";
        setText(newtext);
        props.alert("Text is Cleared!!","success")
        
      
    }

    const handleCopy=(event)=>{
      
      navigator.clipboard.writeText(text);
      props.alert("Text is Copied To ClipBoard !!","success");
      
      
      
    }

    const handleChar=(event)=>{
    
      let newtext;
      newtext=text;
      
      setText(newtext.replace(/[^a-zA-Z0-9 ]/g, ""));
      props.alert("Special Character is Removed","success");
      
      
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
    
    }
    
  return(
     <>
        <div className="mx-3 mb-3 container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.title}</h1>
        <textarea className="form-control" id="textfield" style={{backgroundColor:props.mode==="dark"?"#21375a":"white", color:props.mode==="dark"?"white":"black"}} rows="8" onChange={changetext} value={text}></textarea>
        <br/>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUp}>To UpperCase</button>
        <button type="button" disabled={text===""?true:false} className="btn btn-primary mx-3 my-3" onClick={handleLow}>To LowerCase</button>
        <button type="button" disabled={text===""?true:false} className="btn btn-primary mx-3 my-3" onClick={handleChar}>Remove Special Charaters</button>
        <button type="button" disabled={text===""?true:false} className="btn btn-primary mx-3 my-3" onClick={handleSpace}>Remove Extra Spaces</button>
        <button type="button" disabled={text===""?true:false} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button type="button" disabled={text===""?true:false} className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear Text</button>
        <div className='my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.split('').filter((element)=>{return element!==" "}).length} Charaters</p> 
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length * 0.46} Seconds to read</p> 
        </div>
        <div className='my-3'>
        <h2>Preview</h2>
        <p>{text===""?"Nothing To Preview":text}</p>
        </div>  
        </div>
        
     </>
  )
}

