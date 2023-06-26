import Accordian from "./components/Accordian";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, {useState} from 'react'

function App() {
  const [theme, setTheme] = useState("light");

  let changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      {/* For Navbar */}
      <Navbar title="Text Tools" home="Home" about="About Us" mode={theme} changeTheme={changeTheme}/>
      {/* For Text Area */}
      <div className="container my-4">
        <TextBox textBoxName="Enter your Text Below" mode={theme}/>
      </div>
      {/* For Accordian/Dark Mode */}
      <div className="container my-3">
        <Accordian/>
      </div>

    </>
  );
}

export default App;
