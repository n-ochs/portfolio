import React from "react"
import Nick from "../img/me.jpg"

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Nick} alt="Nicholas Ochs"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>Hello! I am Nicholas Ochs, but most people call me Nick. I have been building computers for over 5 years and have recently found my new passion for web development. I am currently using a MERN Stack (MongoDB, ExpressJS, React, NodeJS)</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;