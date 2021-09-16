import React from 'react';
import './App.css';
import Users from './components/Users';
import Hero from './components/Hero';
import Coba from './components/Coba';
import Antri from './components/Antri';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>My First React App</h1>
      </header>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
          Ex laborum amet tempor qui labore. Irure occaecat sunt anim est eu in. Magna nisi esse nisi dolor labore est duis nulla mollit. Nisi officia officia ex fugiat nisi eiusmod ipsum ullamco in sint sunt occaecat. Pariatur consectetur eu pariatur exercitation incididunt incididunt laborum nisi adipisicing.
        </p>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>&copy; Myself - 2021</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr/>
        <Content />
        <hr/>
        <Users />
        <hr/>
        <Coba />
        <hr/>
        <Antri />
        <hr/>
        <Hero />
        <hr/>
        <Footer />
      </div>
    );
  }
}

export default App;
