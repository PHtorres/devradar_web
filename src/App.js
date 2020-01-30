import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('Paulo');

  function mudarNome() {
    let x = nome + ' ' + nome;
    setNome(x);
  }
  return (
    <>
      <h1>{nome}</h1>
      <button onClick={mudarNome}>Mudar nome</button>
    </>
  );
}

export default App;
