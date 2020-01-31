import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [github_username, setGitHubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      }, {
      timeout: 30000,
    }
    )
  }, []); //esse vetor vazio é para só chamar a função uma vez e não toda vez que o componente for renderizado

  async function handleAddDev(e){
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGitHubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)} />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/58959268?s=460&v=4" alt="Paulo Henrique Torres" />
              <div className="user-info">
                <strong>Paulo Henrique Torres</strong>
                <span>.Net Core, React Native, ReactJS</span>
              </div>
            </header>
            <p>Analista de Sistemas, Desenvolvedor .Net Core MVC / .Net WebForms / JavaScript / SQLServer / React Native</p>
            <a href="https://github.com/phtorres" target="_blank" rel="noopener noreferrer">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/58959268?s=460&v=4" alt="Paulo Henrique Torres" />
              <div className="user-info">
                <strong>Paulo Henrique Torres</strong>
                <span>.Net Core, React Native, ReactJS</span>
              </div>
            </header>
            <p>Analista de Sistemas, Desenvolvedor .Net Core MVC / .Net WebForms / JavaScript / SQLServer / React Native</p>
            <a href="https://github.com/phtorres" target="_blank" rel="noopener noreferrer">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/58959268?s=460&v=4" alt="Paulo Henrique Torres" />
              <div className="user-info">
                <strong>Paulo Henrique Torres</strong>
                <span>.Net Core, React Native, ReactJS</span>
              </div>
            </header>
            <p>Analista de Sistemas, Desenvolvedor .Net Core MVC / .Net WebForms / JavaScript / SQLServer / React Native</p>
            <a href="https://github.com/phtorres" target="_blank" rel="noopener noreferrer">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/58959268?s=460&v=4" alt="Paulo Henrique Torres" />
              <div className="user-info">
                <strong>Paulo Henrique Torres</strong>
                <span>.Net Core, React Native, ReactJS</span>
              </div>
            </header>
            <p>Analista de Sistemas, Desenvolvedor .Net Core MVC / .Net WebForms / JavaScript / SQLServer / React Native</p>
            <a href="https://github.com/phtorres" target="_blank" rel="noopener noreferrer">Acessar Perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/58959268?s=460&v=4" alt="Paulo Henrique Torres" />
              <div className="user-info">
                <strong>Paulo Henrique Torres</strong>
                <span>.Net Core, React Native, ReactJS</span>
              </div>
            </header>
            <p>Analista de Sistemas, Desenvolvedor .Net Core MVC / .Net WebForms / JavaScript / SQLServer / React Native</p>
            <a href="https://github.com/phtorres" target="_blank" rel="noopener noreferrer">Acessar Perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
