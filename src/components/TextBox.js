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
    }

    const convertLowerCase = () => {                // Function to Convert text into Lower Case
        // console.log('LowerCase Clicked');
        let newText = text.toLowerCase();
        setText(newText);
    }

    let words = text.split(" ").length - 1;

    return (
        <>
        <div className='container'>
            <h1>{props.textBoxName}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} id="textBox" rows="8" onChange={handleChanging}></textarea>
            </div>
            <div className="btn btn-outline-primary" onClick={convertUpperCase}>Convert into UpperCase</div>
            <div className="btn btn-outline-primary mx-3" onClick={convertLowerCase}>Convert into LowerCase</div>
        </div>
        {/* Counting Words, characters & preview the written text */}
        <div className="container my-3">
            <p>Total Words used: <b>{words}</b></p>
            <p>Total Characters used: <b>{text.length}</b></p>
            <p>Total time took to read: <b>{Math.floor(0.08*words)}</b> minutes</p>
            <h3>Preview of your text</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
