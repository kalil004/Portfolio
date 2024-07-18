import { Component } from "react";
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div>
                        <h2>Portfolio</h2>
                        <p>Kalil Alves Pereira</p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg> São José dos Campos - SP
                    </div>
                    <div className="info">
                        <h2>Páginas</h2>
                        <li>Início</li>
                        <li>Currículo</li>
                        <li>Projetos</li>
                        <li>Certificados</li>
                        <li>Sobre mim</li>
                    </div>
                    <div className="info">
                        <h2>Contatos</h2>
                        <li>Linkedin</li>
                        <li>Github</li>
                        <li>Instagram</li>
                    </div>
                    <div className="info">
                        <h2>Recursos</h2>
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Github</li>
                        <li>Vercel</li>
                    </div>
                </div>    
            </footer>
        )
    }
}