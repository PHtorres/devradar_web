import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('Paulo');

  function mudarNome() {
    setNome('Pedro');
  }
  return (
    <>
      <h1>{nome}</h1>
      <button onClick={mudarNome}>Mudar nome</button>
    </>
  );
}

export default App;
