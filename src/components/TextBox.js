import React, {useState} from 'react'

export default function (props) {
    const [text, setText] = useState("Enter your text");        // useState hook

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

    return (
        <div>
            <h1>{props.textBoxName}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="textBox" rows="8" onChange={handleChanging}></textarea>
            </div>
            <div className="btn btn-primary" onClick={convertUpperCase}>Convert into UpperCase</div>
            <div className="btn btn-primary mx-3" onClick={convertLowerCase}>Convert into LowerCase</div>
        </div>
    )
}
