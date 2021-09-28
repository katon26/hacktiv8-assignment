import React from "react";

export default function Content() {
    return (
      <>
        <div className="p-5 mb-4 bg-light rounded-3 border">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Example Routing in React Apps with React Router</h1>
            <p className="col-md-8 fs-4">
            Want to make progress in your daily tasks? A smartly managed to-do list can make all the difference
            </p>
            <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Check my To Do List
            </button>
          </div>
        </div>
  
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row g-5">
      <div class="col-md-6">
        <h2>Starter projects</h2>
        <p>Ready to beyond the starter template? Check out these open source projects that you can quickly duplicate to a new GitHub repository.</p>
      </div>

      <div class="col-md-6">
        <h2>Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul class="icon-list">
          <li><a href="/docs/5.1/getting-started/introduction/">Bootstrap quick start guide</a></li>
          <li><a href="/docs/5.1/getting-started/webpack/">Bootstrap Webpack guide</a></li>
          <li><a href="/docs/5.1/getting-started/parcel/">Bootstrap Parcel guide</a></li>
          <li><a href="/docs/5.1/getting-started/contribute/">Contributing to Bootstrap</a></li>
        </ul>
      </div>
    </div>
      </>
    )
}