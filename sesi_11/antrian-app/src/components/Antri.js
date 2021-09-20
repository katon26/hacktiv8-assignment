import React, { useState, useEffect } from "react";

function Antri() {
  const [name, setName] = useState('');
  
  useEffect(() => {
    document.title = name;
  });

  function edit(e) {
    setName(e.target.value);
  }


  return (
    <section className="content">
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

export default Antri;