import './navbar.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg custom-navbar px-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/habilidades">Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projetos">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/certificados">Certificados</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/sobremim">Sobre mim</a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
