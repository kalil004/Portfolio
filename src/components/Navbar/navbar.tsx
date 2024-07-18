import './navbar.css';
import {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <header className="header">
        <ul>
          <li>
        <a href=''>Início</a>
          </li>
          <li>
        <a href=''>Currículo</a>
          </li>
          <li>
        <a href=''>Projetos</a>
          </li>
          <li>
        <a href=''>Certificados</a>
          </li>
          <li>
        <a href=''>Sobre mim</a>
          </li>
        </ul>
      </header>
        )
    }
}