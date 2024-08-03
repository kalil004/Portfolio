import "./cardC.css";
import { Certificado } from "../../data/certificados";

interface CardProps {
    certificadosArray: Certificado[];
}

const CardC = ({ certificadosArray }: CardProps) => {
    return (
        <>
            {certificadosArray.map((certificado: Certificado, index: number) => (
                <div className='row' key={index}>
                    <div className="photo">
                        <img src={certificado.foto} alt="Imagem do projeto"/>
                    </div>
                    <div className="space">
                    </div>
                    <div className="desc">
                        <h1>{certificado.titulo}</h1>
                        <h3>{certificado.ano}</h3>
                        <p>{certificado.texto}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardC;
