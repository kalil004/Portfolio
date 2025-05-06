import "./card.css";
import { Projeto } from "../../data/projetos";

interface CardProps {
    projetosArray: Projeto[];
}

const Card = ({ projetosArray }: CardProps) => {
    return (
        <>
            {projetosArray.map((projeto: Projeto, index: number) => (
                <div className='row' key={index}>
                <div className="card-photo">
                  <img src={projeto.foto} alt={`Imagem do projeto ${projeto.titulo}`} />
                </div>
                <div className="desc-card">
                  <div className="desc">
                    <h1>{projeto.titulo}</h1>
                    <p>{projeto.texto}</p>
                    <div className="tech-badges">
                      {projeto.tecnologias?.map((tech, i) => (
                        <span className="badge" key={i}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            ))}
        </>
    )
}

export default Card;
