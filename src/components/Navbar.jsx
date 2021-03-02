import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <Link smooth={true} to="Home" className="navbar-brand" href="#">NJO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link smooth={true} to="Home" className="nav-link" aria-current="page" href="#">Home</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="AboutMe" offset={-110} className="nav-link" href="#">About Me</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="TechStack" offset={-110} className="nav-link" href="#">Tech Stack</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Contact" offset={-110} className="nav-link" href="#">Contact Me</Link >
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Resume" className="nav-link" href="#">Resume</Link >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;