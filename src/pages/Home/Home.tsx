import './Home.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">

      <div className='main'>
        <div className='main-text'>
          <h1>Bem-vindo!</h1>
          <h2>Me chamo Kalil, e este é o meu mundo.</h2>
        </div>

        <div className='main-photo-wrapper'>
    <img src='images/fotokalil.jpeg' alt="Foto de Kalil" className="photo" />
    <p className='photo-desc'>
    Sou um estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, desenvolvimento web e tudo o que envolve criar soluções inteligentes.

Trabalho com React, TypeScript e Python, sempre buscando desenvolver aplicações funcionais, modernas e escaláveis. Já participei de projetos acadêmicos com foco em metodologias ágeis, integração com bancos de dados e serviços em nuvem — e estou sempre em busca de aprender mais.

Se você curte tecnologia, inovação e bons desafios, bem-vindo a bordo!
    </p>
  </div>
</div>

      <div className="social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kalil004"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kalil-pereira/"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/kalil.004/"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <div className='about-me'>
        <h1>Formações</h1>
        <ul>
          <li>Ensino Fundamental e Médio (2011 - 2022) | Escola Estadual Professora Ayr Picanço Barbosa de Almeida</li>
          <li>Ensino Superior (2023 - atual) | Fatec São José dos Campos, no curso de Análise e Desenvolvimento de Sistemas</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
