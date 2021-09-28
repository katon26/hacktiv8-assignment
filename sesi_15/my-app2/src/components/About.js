import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    
    

    return (
        <div className="p-5 mb-4 bg-light rounded-3 border">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Under contruction</h1>
                <p className="col-md-8 fs-4">
                Under construction
                </p>
                <Link to="/" className="btn btn-primary btn-lg">
                Home
                </Link>
            </div>
        </div>
    )
    
}