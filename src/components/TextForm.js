import React, {useState} from 'react'    // imr

export default function TextForm(props) {    // rfc
    const [text, setText]= useState('Enter the text to change.')

    const handleUpClickU= ()=>{         // to make the input uppercase
        // console.log("Change button is clicked " + text);
        let updatedText= text.toUpperCase();
        setText(updatedText);
        props.showAlert("Converted to Lowercase", "Success");
    }
    const handleUpClickL= ()=>{         // to make the text to lowercase
        // console.log("Change button is clicked " + text);
        let updatedText= text.toLowerCase();
        setText(updatedText);
        props.showAlert("Converted to Lowercase", "Success");
    }
    const handleReverseClick= ()=>{
        let changedtext= "";
        for(let i= text.length-1; i>=0; i--){
            changedtext+= text[i];
        }
        setText(changedtext);
        props.showAlert("Converted to Reverse", "Success");
    }
    const handleOnChange= (event)=>{       // function which handle the updated text and passes to the textarea
        setText(event.target.value);
    }
    
    const wordCount = (text) => {
        // Use /\s+/ as the regular expression
        let regex = /\s+/;
        let numWords = text.split(regex);
        
        // Remove empty strings resulting from consecutive spaces
        numWords = numWords.filter(word => word !== "");
      
        return numWords.length;
    }

    return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#111b5e'}} >
    <h2>{props.heading}</h2> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#111b5e'}} rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClickU}> Change to Uppercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleUpClickL}> Change to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}> Reverse Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#111b5e'}}>
        <p> {text===""? 0: wordCount(text)} words and {text.length} characters</p> 
    </div>
    </>
    )
}
