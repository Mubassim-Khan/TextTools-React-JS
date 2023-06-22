import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      {/* For Navbar */}
      <Navbar title="Text Tools" home="Home" about="About Us" />
      {/* For Text Area */}
      <div className="container my-4">
        <TextBox textBoxName="Enter your Text Below"/>
      </div>
    </>
  );
}

export default App;
