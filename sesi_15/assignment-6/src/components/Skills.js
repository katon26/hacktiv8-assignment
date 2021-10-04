import React from "react";

export default function Skills() {
    return (
        <div className="page-content p-5" id="content">
            <h2 className="title display-4 text-white">Skills</h2>

            <hr/>
            
            <p className="lead text-white">
                Programming Language & Tools
            </p>

            <div className="row text-white">
                <div className="col-lg-6">


                    <ul style={{ paddingLeft: 0 }}>
                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                HTML
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                Javascript
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                Nodejs
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                Django
                            </h5>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-6">
                    <ul>
                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                CSS3
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                React
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                Python
                            </h5>
                        </li>

                        <li style={{ listStyle: 'none' }}>
                            <i className="bi bi-patch-check-fill" style={{ position: 'absolute' }}></i>
                            <h5 style={{ padding: '0px 28px', display: 'inline-block', margin: '0 0 30px' }}>
                                Ember
                            </h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}