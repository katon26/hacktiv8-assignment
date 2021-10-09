import React, { useEffect } from 'react';
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import '../App.css';
import Header from './Header';
import CreateTask from './CreateTask';
import Backlog from './backlogCard';
import Progress from './progressCard';
import Evaluation from './evaluationCard';
import Done from './doneCard';



function App() {
  useEffect(() => {
    document.title = `Kanban Board`
  })

  return (
    <>
    <Header/>
    <div className="container">
      <div className="row">
      <CreateTask/>
        <div className="col">
        <div className="card">
          <div className="card-body">
          <Backlog/>
          </div>
        </div>
        </div>

        <div className="col">
        <div className="card">
          <div className="card-body">
          <Progress/>
          </div>
        </div>
        </div>

        <div className="col">
        <div className="card">
          <div className="card-body">
          <Evaluation/>
          </div>
        </div>
        </div>

        <div className="col">
        <div className="card">
          <div className="card-body">
          <Done/>
          </div>
        </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default App;
