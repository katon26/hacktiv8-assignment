import React from "react";

export default function About() {
    return (
        <div className="container">
            <div className="page-content p-5" id="about">
                <h2 className="title display-4 text-white">About Me</h2>
                <p className="lead text-white mb-0">+62-8123456789</p>

                <hr/>
                
                <div className="row text-white">
                    <div className="col-lg-12">
                        <p className="lead">
                            I am an opensource contributor and have been build Zulip, Hasura, Fossasia, Publiclab and many other
                            projects. My tech stack includes Python and Javascript. Python for server side and scripting and
                            Javascript for the frontend. I use Django framework for the server side development and React for the
                            frontend development. I have also worked with GraphQL. I am a GitHub Campus Expert at my institute where
                            I am responsible for building on campus community. I am the lead organiser of Hack In The North and the
                            cofounder of Pragma Conference held at IIIT Allahabad.
                        </p>
                        
                    </div>        
                </div>
            </div>
        </div>
        
    )
}