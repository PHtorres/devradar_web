import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
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
