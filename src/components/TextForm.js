import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }
  const handleClearText = ()=> {
    setText("");
    props.showAlert("Text cleared!", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copyed to Clipboard!", "success");
  }
  const handExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }
  

  return (
    <>
      <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            placeholder="Enter Text here"
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            style = {{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}
          />
        </div>
        <button disabled = {text.length===0} onClick={handleUpperCase} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
        <button disabled = {text.length===0}  onClick={handleLowerCase} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
        <button disabled = {text.length===0}  onClick={handExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
        <button disabled = {text.length===0}  onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
        <button disabled = {text.length===0}  onClick={handleClearText} className="btn btn-primary mx-1 my-1">Clear Text</button>  
      </div>
      <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:'Nothing to Preview'}</p>
      </div>
    </>
  );
}
