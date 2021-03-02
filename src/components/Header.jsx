import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

function Header() {
    return (
        <div id="Home" className="header-wrapper">
            <div className="main-info">
                <h1>Nicholas J. Ochs</h1>
                <Typed
                    className="typed-text"
                    strings={["Full Stack Developer", "Software Engineer", "Insurance Underwriter"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                 />
                <Link smooth={true} to="Contact" offset={-110} className="btn-main-offer" href="#">Contact Me</Link >            
                </div>
        </div>
    )
}

export default Header;