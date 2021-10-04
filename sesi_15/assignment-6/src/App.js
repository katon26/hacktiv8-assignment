import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap icons
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from "./components/Education";
import Skills from './components/Skills';
import Interest from './components/Interest';
import Awards from './components/Awards';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />

          {/* <About/>
          <Experience/>
          <Education/>
          <Skills/>
          <Interest/>
          <Awards/> */}

          <Switch>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/interest">
              <Interest />
            </Route>
            <Route path="/awards">
              <Awards />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
