import './navbar.css';
import {Component} from 'react';

export default class Navbar extends Component {
    render() {
        return(
            <header className="header">
        <ul>
          <li>
        <a href='/'>Início</a>
          </li>
          <li>
        <a href='/curriculo'>Currículo</a>
          </li>
          <li>
        <a href='/projetos'>Projetos</a>
          </li>
          <li>
        <a href='/certificados'>Certificados</a>
          </li>
          <li>
        <a href='/sobremim'>Sobre mim</a>
          </li>
        </ul>
      </header>
        )
    }
}