import React from "react";

export default function Experience() {
    return (
        <div className="container">
            <div className="page-content p-5" id="exp">
                <h2 className="title display-4 text-white">Experience</h2>

                <hr/>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="resume-box">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <span className="time">August 2018 - Present</span>
                                    <h5>GitHub Campus Expert - GitHub</h5>
                                    <p>Responsible for building the on-campus community with the support of GitHub.</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <span className="time">June 2019 - Present</span>
                                    <h5>Opensource Developer Intern - Fossasia</h5>
                                    <p>Contributing to Fossasia's open event server and frontend as an Intern. Resolved numerous bugs and added new features to the platform.</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <span className="time">December 2018 - January 2019</span>
                                    <h5>Software Developer Intern - Hasura</h5>
                                    <p>Worked on Hasura's GraphQL engine and added new features in it.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}