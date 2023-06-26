import React, { useState } from 'react'

export default function Accordian() {

  const [style, setStyle] = useState({        // By Default Style when the page will load or reload
    color: "black",
    backgroundColor: "white",
    border: "3px solid white"
  })

  const [buttonText, setButtonText] = useState("Enable Dark Mode");      // Default Text on the Button
  const [btnColor, setBtnColor] = useState("dark");


  let changeTheme = () => {                 // Toggle the style when the button will click
    if (style.backgroundColor === "white") {
      setStyle({
        color: "white",
        backgroundColor: "#212529",
        border: "3px solid #343a40",
      });
      setButtonText("Enable Light Mode");
      setBtnColor("light");
    }
    else {
      setStyle({
        color: "black",
        backgroundColor: "white",
        border: "3px solid white"
      });
      setButtonText("Enable Dark Mode");
      setBtnColor("dark");
    }
  }

  return (
    <>
      <div className='container' style={style}>
        <h1 className="my-3">More About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <strong>This is the first item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, iste voluptatem fugit suscipit ea beatae fuga officia! Similique sed, quidem ea nemo minima magnam veritatis eaque saepe voluptas dignissimos aliquid.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <strong>This is the second item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum minima, non cumque doloremque incidunt libero consequatur rem, nesciunt, qui asperiores obcaecati eligendi aspernatur est quas animi tempora cupiditate cum similique?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <strong>This is the third item's accordion body.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis earum dignissimos, voluptas qui doloribus dicta repellat similique vero quaerat nesciunt labore veritatis, recusandae error maxime accusamus soluta numquam praesentium pariatur.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`btn btn-${btnColor} my-4`} onClick={changeTheme}>{buttonText}</div>
      </div>
    </>
  )
}
