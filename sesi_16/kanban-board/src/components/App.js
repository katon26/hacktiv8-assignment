import React, { useState } from 'react';
import '../App.css';
import "bootstrap"; // import JS
import "bootstrap/dist/css/bootstrap.min.css"; // import CSS
import Column from './Column';
import Header from './Header';

const initialState = [
  {
    title: ['Backlog'],
    todos: ['Create Template', 'Create Mockup', 'Adjust the web header'],
    color: 'grey',
    input: ''
  },
  {
    title: ['In Progress'],
    todos: ['Initiate Docker for the project'],
    color: 'yellow',
    input: ''
  },
  {
    title: ['Evaluation'],
    todos: ['Finalize the T.O.R'],
    color: 'blue',
    input: ''
  },
  {
    title: 'Done',
    todos: ['Recruit Ruby developers', 'Recruit FE developers', 'Recruit Project Manager'],
    color: 'green',
    input: ''
  },
]

function App() {
  const [col, setCol] = useState(initialState);

  const handleInputChange = (value, colIndex) => {
    const nextCol = [...col];
    nextCol[colIndex].input = value;
    setCol(nextCol);
  };

  const handleAddTodo = (colIndex) => {
    const nextCol = [...col];
    nextCol[colIndex].todos.push(nextCol[colIndex].input);
    nextCol[colIndex].input = '';
    setCol(nextCol);
  };

  const handleShift = (itemIndex, fromCol, toCol) => {
    const nextCol = [...col];
    const temp = nextCol[fromCol].todos[itemIndex];
    nextCol[fromCol].todos.splice(itemIndex, 1);
    nextCol[toCol].todos.push(temp);
    setCol(nextCol);
  };

  return (
    <>
      <Header />
      <div className="container">
        
        <div className="row">
          {col.map((v, i) => (
            <Column 
              index={i}
              handleInputChange={handleInputChange}
              data={v}
              key={i}
              handleAddTodo={handleAddTodo}
              handleShift={handleShift}
              isFirst={i === 0}
              isLast = {i === col.length - 1}
            />
          ))} 
        </div>
        
      </div>
    </>
  );
}

export default App;
