import React from 'react';
// import './App.css';

function Header() {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
            <li className="nav-item" ><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Features</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">FAQs</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">About</a></li>
          </ul>
          <ul className="nav">
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Login</a></li>
            <li className="nav-item"><a href="/" className="nav-link link-dark px-2 active" aria-current="page">Sign up</a></li>
          </ul>
        </div>
      </nav>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
              <span className="fs-4">My First React App</span>
            </a>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
          </div>
        </header>
    </>
  )
}

function Content() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg">Example button</button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="text-muted py-5 border-top">
      <div className="container">
        <p className="mb-1">This is My First React app in Bootstrap</p>
        <p className="mb-0">New to React? <a href="https://reactjs.org">Visit the homepage</a></p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
      </div>
      <hr/>
      <Footer />
    </>
  );
}

export default App;
