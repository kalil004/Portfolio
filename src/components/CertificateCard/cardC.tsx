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
          <div className="card-photo">
            <img src={certificado.foto} alt={`Imagem do certificado ${certificado.titulo}`} />
          </div>
          <div className="desc-card">
            <div className="desc">
              <h1>{certificado.titulo}</h1>
              <h3>{certificado.ano}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardC;
