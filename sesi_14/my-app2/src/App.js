import { useEffect, useState } from "react";
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
// import Users from './pages/Users';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
              <span className="fs-4">Testing example</span>
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
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Why do we need Test?</h1>
          <p className="col-md-8 fs-4">
            To guarantee our code quality. And to show the pople that we also care 
            about it and wish to give somthing that already proven, at least by ourself
          </p>
          <button className="btn btn-primary btn-lg" type="button" path="/pages/Users.js">
            Users List
          </button>
        </div>
      </div>
    </>
  )
}

function Users(){
  const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    })
    return(
      <table class="table table-striped">
          <thead>
              <tr class="table-dark">
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
              </tr>
          </thead>
          <tbody>
              {users.map((user, index) => (
              <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
              </tr>        
              ))}
          </tbody>
      </table>
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
      <Users/>
      <hr/>
      <Footer />
    </>
  );
}

export default App;
