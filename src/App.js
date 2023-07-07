import './App.css';
import Accordian from "./components/Accordian";
import AlertMsg from "./components/AlertMsg";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  // For Changing Theme into Dark & Light

  const [theme, setTheme] = useState("light");

  let changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      document.title = "Text Tools - Word Counter | Character Counter | LowerCase Converter | UpperCase Converter | Text Sorter | Text to Speech (Dark Mode)";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Tools - Word Counter | Character Counter | LowerCase Converter | UpperCase Converter | Text Sorter | Text to Speech (Light Mode)";
    }
  }

  // For Alert Mesages

  const [alert, setAlert] = useState(null);

  let showAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <BrowserRouter>
        {/* For Navbar */}
        <Navbar title="Text Tools" home="Home" about="About Us" mode={theme} changeTheme={changeTheme} />
        {/* For Alert Messages (must be below Navbar) */}
        <AlertMsg alert={alert} />
        {/* For Text Area */}
        <Routes>

          <Route exact path='/' element={<div className="container my-4"><TextBox textBoxName="Enter Text Below" mode={theme} showAlertMsg={showAlertMsg} /> </div>} >

          </Route>

          <Route exact path="/about" element={<div className="container my-3"><Accordian mode={theme} /></div>}>
          </Route>

        </Routes>
      </BrowserRouter>
      {/* For Accordian (Sample Dark Mode) */}
      {/* <div className="container my-3">
        <Accordian/>
      </div> */}
    </>
  );
}

export default App;
