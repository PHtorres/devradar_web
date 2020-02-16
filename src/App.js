import React, { useState, useEffect } from 'react';
import API from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await API.get('/devs');
      console.log(response);
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(dados) {
    const response = await API.post('/devs', dados);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
         <DevForm aoSubmeter={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
