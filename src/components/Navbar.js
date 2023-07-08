import React from 'react'
import propTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    let changeTitleAbout = () => {
        document.title = "Text Tools - About Us";
    }

    let changeTitleHome = () => {
        document.title = "Text Tools - Word Counter | Character Counter | LowerCase Converter | UpperCase Converter | Text Sorter | Text to Speech";
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <img src="https://pbs.twimg.com/profile_images/1220285531164233729/A98RISKc_400x400.jpg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" style={{ borderRadius: "100%", height: "50px", width: "50px" }} />
                <Link className="navbar-brand mx-2" onClick={changeTitleHome} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" onClick={changeTitleHome} to="/">{props.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" onClick={changeTitleAbout} to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                        <input className="form-check-input" onClick={props.changeTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
    home: propTypes.string.isRequired,
    about: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title of Page",
    home: "Home",
    about: "About"
}