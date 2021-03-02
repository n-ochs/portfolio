import React from "react";
import { LinkedinShareButton, LinkedinIcon,  } from "react-share";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Nicholas J. Ochs</p>
                        </div>
                        <div className="d-flex">
                            <a href="mailto:nickochs@protonmail.com">Email</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Tech Stack</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contact</a>
                                <br/>
                                <a className="footer-nav">Resume</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 alight-items-center">
                        <div className="d-flex justify-content-center">
                            <a href="https://www.linkedin.com/in/nicholas-ochs-221235158/">
                                <LinkedinIcon className="mx-3" size={36} url={"https://www.linkedin.com/in/nicholas-ochs-221235158/"} />
                            </a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright &copy;
                             {new Date().getFullYear()}&nbsp;| Nicholas J. Ochs | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;