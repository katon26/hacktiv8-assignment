import React, { useState, useEffect } from "react";

export default function Test() {
  const [name, setName] = useState('');
//   const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = name;
  });

  function edit(e) {
    setName(e.target.value);
  }

  return (
    <section>
        <p>Masukkan nama</p>
      <input
        value={name}
        onChange={edit}
      />
      <div>
      <button onClick={name}>Antrikan</button>
      <button onClick={name}>Majukan</button>
      </div>
    </section>
  );
}