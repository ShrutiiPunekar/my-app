import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!","success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!","success");

  }
  const handleClr= ()=>{
    setText(" ");
    props.showAlert("TextArea Cleared!","success");

  }
  const handleCopy= ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Copied to clipboard!","success");

  }
  const handleExtraSpace= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!","success");

  }
  

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here"); //State
  // text = "hiiiiiii";    //Wrong way to change text
  // setText("new text");  //Right way to change text

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'#ffffff':'black'}}>
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'#ffffff':'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClr} >Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >Remove Extra Space</button>




    </div>

    <div className="container my-3=" style={{color: props.mode==='dark'?'#ffffff':'black'}}> 
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    
    </>
  );
}


// we imported useState
// syntax for state = const [text, setText] = useState("Enter text here");
// text is variable with default value "Enter text here" and we can use setText to change value of text variable


// In textarea we set value={text} to initilize textarea with default value "Enter text here" and then onChange={handleOnChange} because without it we cannot change the text of textarea, 
// In handleOnChange function we have setText(event.target.value) so we can type in textarea.

// In button we use onClick={handleUpClick}, in handleUpClick function we converted text into uppercase and setText(newText)