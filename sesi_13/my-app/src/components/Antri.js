import React, { useState, useEffect } from "react";

// untuk assignment 11
export default function Antri() {
  const [name, setName] = useState('');
  
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
      <button >Antrikan</button>
      <button >Majukan</button>
      </div>

    </section>
  );
}