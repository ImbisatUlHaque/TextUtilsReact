import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        if (text.length ) {
            
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handlePaste = () => {
        setText(text.concat(text));
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClear = () => {
        setText('');
    }

    const textColor = props.mode === 'light' ? 'black' : 'white';
    const backgroundColor = props.mode === 'light' ? 'white' : '#292c32';

    return (
        <>
            <div className="container" style={{ color: textColor }}>
                <div className="container my-3" >
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ background: backgroundColor, color: textColor }}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handlePaste}>Paste Copied Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                </div>
                <div className="container my-3">
                    <h1>Your Text Summary</h1>
                    <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} Character</p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                </div>
            </div>
        </>
    )
}
