import React, { useState } from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");        // useState hook

    const handleChanging = (event) => {             // Event Listener/handler for the Text Area
        setText(event.target.value);
    }

    const convertUpperCase = () => {                // Function to Convert text into Upper Case 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertMsg("Converted into UpperCase", "success");
    }

    const convertLowerCase = () => {                // Function to Convert text into Lower Case
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlertMsg("Converted into LowerCase", "success");
    }

    const clearText = () => {                       // Function to Clear Text from box
        setText('');
        props.showAlertMsg("Text Field Cleared", "success");
    }

    const copyText = () => {                        // Function to Copy Text
        navigator.clipboard.writeText(text);
        props.showAlertMsg("Copied to ClipBoard", "success");
    }

    const revString = () => {                       // Function to Reverse String
        let splitText = text.split("");
        let rev = splitText.reverse();
        let joinText = rev.join("");
        setText(joinText);
        props.showAlertMsg("Converted into Reverse Order", "success");
    }

    const sortText = () => {                        // Function to Sort Text (Alphabetic Order / Assecending Order)
        let splitText = text.split("");
        let sort = splitText.sort();
        let joinText = sort.join("");
        setText(joinText);
        props.showAlertMsg("Sorted into Asscending / Alphabetical Order", "success");
    }

    const speakText = () => {                       // Function for text to speech
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlertMsg("Processing Request, Please wait", "warning");
        const toogle = document.getElementById("Toggle");

        if (toogle.textContent === "Text to Speech") {
            toogle.innerHTML = "Stop";
        } else {
            toogle.innerHTML = "Text to Speech";
            if (toogle.innerText === "Text to Speech") {
                window.speechSynthesis.cancel();
            }
        }
    }

    let words = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length

    return (
        <>
            <div className='container'>
                <h1 className='mb-3' style={{ color: props.mode === "light" ? "black" : "white" }}>{props.textBoxName}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-4" value={text} id="textBox" rows="8" placeholder='Enter Text Here' style={{ backgroundColor: props.mode === "light" ? "white" : "#212529", color: props.mode === "light" ? "black" : "white" }} onChange={handleChanging}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-outline-warning mx-2 my-1" onClick={convertUpperCase}>Convert into UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={convertLowerCase}>Convert into LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-2 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-info mx-2 my-1" onClick={copyText}>Copy to ClipBoard</button>
                <button disabled={text.length === 0} className="btn btn-outline-primary mx-2 my-1" onClick={revString}>Reverse Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-warning mx-2 my-1" onClick={sortText}>Sort Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-2 my-1" id='Toggle' onClick={speakText}>Text to Speech</button>
            </div>

            {/* Counting Words, characters & preview the written text */}

            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <p>Total Words: <b>{words}</b></p>
                <p>Total Characters: <b>{text.length}</b></p>
                <p>Total time took to read: <b>{Math.floor(0.08 * words)}</b> minutes (approx)</p>
                <h3>Preview of Text</h3>
                <p>{text.length > 0 ? text : <b>No Text to Preview</b>}</p>
            </div>
        </>
    )
}
