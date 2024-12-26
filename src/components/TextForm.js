// use ms and me for one side margin (margin start & margin end)
// use mt and mb for one side margin (margin top & margin bottom)
// use mx- and my- for both margins (margin left and right- x axis, margin top and bottom- y axis)
// use m- for all side margins

import React, { useState } from 'react'

// state in react
export default function Textform(props) {
    const [text, setText] = useState("")
    const HandleUpperClick = () => {
        console.log('handled click')
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case", "success")
    }
    const HandleLowerClick = () => {
        console.log('handled click')
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case", "success")
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success")
    }
    const HandleLineBreaks =() => {
        let newText = text.replace(/(\r\n|\n|\r)/gm, " ");
        setText(newText);
        props.showAlert("Line Breaks Removed", "success")
    }
    const HandleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard Successfully", "success")
    }
    
    const HandleClear = () => {
        setText("");
        props.showAlert("Text Cleared", "warning")
    }

    const HandleChange = (e) => {
        setText(e.target.value)
    }
    // text = "new text..." // Wrong way to change text
    // setText("text changed") // correct way to change text
    return (
        <>
            <div className="container mt-4">
                <div className="container">
                    <h1 className='heading' style={{color: props.mode === 'light' ? 'cornflowerblue' : 'aquamarine'}}> The Ultimate <br />Text Utility Application</h1>
                </div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className={`form-control ${props.mode === 'light' ? 'light-mode' : 'dark-mode'}`} style={{backgroundColor: props.mode === 'light' ? 'white' : '#161b22', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="5" value={text} onChange={HandleChange} placeholder='Start typing here...'></textarea>
                </div>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleUpperClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleExtraSpaces}>Remove Extra space</button>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleLineBreaks}>Remove Line Breaks</button>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleCopy}>Copy Text</button>
                <button disabled={text.length===0} className={`btn mx-2 my-2 btn-outline-${props.mode === 'light' ? 'primary' : 'info'}`} onClick={HandleClear}>Clear</button>
            </div>
            <div className="container my-4 mb-4">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p>It takes around {0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} minutes to read the content</p>
            </div>
        </>
    )
}
