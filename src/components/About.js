import React from 'react'

export default function About(props) {

  const style = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "dark" ? "#212529" : "white"
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1 className="my-3 mb-3">More About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Manipulate your Text</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <p>Text Tools provides you number of features, to convert your text into number of ways quickly & efficiently.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <p>Text Tools software is totally free to use application tool, that provides instant character count & word count for a given text. It is suitable for writing text with word / character limit.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatiable</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={style}>
                <p>Text Tools works on any Browser such as Chrome, FireFox, Internet Explorer, Safari, Opera.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
