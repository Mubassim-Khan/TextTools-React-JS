import React, {useState} from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("");        // useState hook

    const handleChanging = (event) => {             // Event Listener/handler for the Text Area
        // console.log("Handle Changed");
        setText(event.target.value);
    }

    const convertUpperCase = () => {                // Function to Convert text into Upper Case 
        // console.log("Convert uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertMsg("Converted into UpperCase", "success");
    }

    const convertLowerCase = () => {                // Function to Convert text into Lower Case
        // console.log('LowerCase Clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlertMsg("Converted into LowerCase", "success");
    }

    const clearText = () => {                       // Function to Clear Text from box
        setText('');
        props.showAlertMsg("Text Field cleared", "success");
    }

    const copyText = () => {                        // Function to Copy Text
        let copy = document.getElementById("textBox");
        copy.select();
        navigator.clipboard.writeText(copy.value);
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

        if (toogle.textContent === "Speak Text") {
            toogle.innerHTML = "Stop";
        } else {
            toogle.innerHTML= "Speak Text";
            if (toogle.innerText === "Speak Text") {
                window.speechSynthesis.cancel();
            }
        }
    }

    let words = text.split(" ").length - 1;

    return (
        <>
        <div className='container'>
            <h1 style={{color: props.mode==="light"?"black":"white"}}>{props.textBoxName}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} id="textBox" rows="8" style={{backgroundColor: props.mode==="light"?"white":"#212529", color: props.mode==="light"?"black":"white"}} onChange={handleChanging}></textarea>
            </div>
            <div className="btn btn-outline-warning mx-2" onClick={convertUpperCase}>Convert into UpperCase</div>
            <div className="btn btn-outline-primary mx-2" onClick={convertLowerCase}>Convert into LowerCase</div>
            <div className="btn btn-outline-success mx-2" onClick={clearText}>Clear Text</div>
            <div className="btn btn-outline-info mx-2" onClick={copyText}>Copy to ClipBoard</div>
            <div className="btn btn-outline-primary mx-2" onClick={revString}>Reverse Text</div>
            <div className="btn btn-outline-warning mx-2" onClick={sortText}>Sort Text</div>
            <div className="btn btn-outline-danger mx-2" id='Toggle' onClick={speakText}>Speak Text</div>

        </div>
        {/* Counting Words, characters & preview the written text */}
        <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
            <p>Total Words used: <b>{words}</b></p>
            <p>Total Characters used: <b>{text.length}</b></p>
            <p>Total time took to read: <b>{Math.floor(0.08*words)}</b> minutes (approx)</p>
            <h3>Preview of your text</h3>
            <p>{text.length>0?text:<b>Enter text inside the box above to preview your text</b>}</p>
        </div>
        </>
    )
}
