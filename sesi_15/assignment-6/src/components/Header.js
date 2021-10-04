import React from "react";
import { NavLink } from "react-router-dom";
import ava from "../ava.png";

export default function Header() {
    
      
    return (
        
        <>
            <div className="container">
                <div className="vertical-nav" id="sidebar">
                    <div className="py-4 mb-4">
                        <div className="ava media d-flex align-items-center">
                            <img 
                              src={ava}
                              alt="ava" 
                              width="140"
                              class="mr-3 rounded-circle img-thumbnail shadow-sm"
                            />
                            {/* <div class="media-body">
                                <h4 class="m-0">LoremIpsum</h4>
                                <p class="font-weight-light text-muted mb-0">Full Stuck dev</p>
                            </div> */}
                        </div>
                    </div>
                    
                    <ul className="nav flex-column mb-0">
                        <li className="nav-item"><NavLink to="/about" className="nav-link"><i className="bi bi-linkedin"/><span/> About</NavLink></li>
                        <li className="nav-item"><NavLink to="/experience" className="nav-link">Experience</NavLink></li>
                        <li className="nav-item"><NavLink to="/education" className="nav-link ">Education</NavLink></li>
                        <li className="nav-item"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
                        <li className="nav-item"><NavLink to="/interest" className="nav-link">Interests</NavLink></li>
                        <li className="nav-item"><NavLink to="/awards" className="nav-link">Awards</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}