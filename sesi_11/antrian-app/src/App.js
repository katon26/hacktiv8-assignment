import './App.css';
import React, { useState, useEffect } from 'react';
// import Antri from './components/Antri';


function App() {
  const [name, setName] = useState('');
  const [antri, setAntri] = useState([]);
  const [isDisable, setisDisable] = useState(true);

  useEffect(() => {
    document.title = name;
  });

  function edit(e) {
    setName(e.target.value);
    if(e.target.value.length === 0){
      handleIsValue(true)
    }else{
      handleIsValue(false)
    }
  }

  const handleIsValue = (value) =>{
    setisDisable(value)
  }

  function btnAntri() {
    if(antri[0] === '[ Antrian Kosong ! ]'){
      setAntri(antri => [...antri.slice(1), name])
    }
    else{
      setAntri(antri => [...antri ,name])
    }
  }

  function btnMaju() {
    if(antri.length === 0){
      alert(`Antrian kosong`)
    }else{
      setAntri([...antri.slice(1)])
    }
  }

  const Result = ({name}) => <span> {name}</span>

  return (
    <section className="content">
      <div className="container">
        <header className="header">
          <h1>Simulasi Antrian</h1>
        </header>
        <hr />
      
        <p>Masukkan nama</p>
        <input
          value={name}
          onChange={edit}
        />

        <div>
          <button onClick={btnAntri} disabled={isDisable}>Antrikan!</button>
          <button onClick={btnMaju}>Majukan!</button>
        </div>
        
        <hr />

        <div>
          {
            antri.length === 0 ?
              <p>[ Antrian Kosong ! ]</p>
              :
              antri.map((name, i) => (
                <Result 
                  name={name}
                  key={name + i}
                />
              ))
          }
        </div>

      </div>
      
      

    </section>
  );
}

export default App;
