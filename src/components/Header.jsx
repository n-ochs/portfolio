import React from "react";
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
                 <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;