import React, { useState } from 'react';
import Cliente from './Cliente';

function App() {
  const [nome, setNome] = useState('Paulo');
  const [tamanhoFonte, setFonte] = useState(15);
  const cliente = new Cliente();


  function mudarNome() {
    let t = tamanhoFonte + tamanhoFonte;
    //let x = nome + ' ' + nome;
    //setNome(x);
    setFonte(t);
  }
  
  return (
    <>
      <h1 style={{fontSize:tamanhoFonte}}>{nome}</h1>
      <button onClick={mudarNome}>Mudar nome</button>
      <button onClick={cliente.Alertar}>Alertar</button>
    </>
  );
}

export default App;
