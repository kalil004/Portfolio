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
                    <div className="photo">
                        <img src={projeto.foto} alt="Imagem do projeto"/>
                    </div>
                    <div className="space">
                    </div>
                    <div className="desc">
                        <h1>{projeto.titulo}</h1>
                        <p>{projeto.texto}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card;
