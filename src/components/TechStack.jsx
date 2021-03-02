import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faNetworkWired } from "@fortawesome/free-solid-svg-icons";


function TechStack() {
    return (
        <div className="tech-stack">
            <h1 className="py-5">Tech Stack</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDatabase} size={"2x"} />
                                </div>
                                <h3>MongoDB</h3>
                                <p>NoSQL Database</p>
                            </div>
                        </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faNetworkWired} size={"2x"} />
                            </div>
                            <h3>ExpressJS</h3>
                            <p>Web Application Framework</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faReact} size={"2x"} />
                            </div>
                            <h3>React</h3>
                            <p>Front End Framework</p>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faNodeJs} size={"2x"}/>
                            </div>
                            <h3>NodeJS</h3>
                            <p>Server Side Environment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack
