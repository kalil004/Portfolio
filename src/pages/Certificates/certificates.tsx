import CardC from '../../components/CertificateCard/cardC';
import { certificados } from '../../data/certificados';

function Certificates() {
    return (
        <div className='certificados'>
        <h1>Meus certificados</h1>

        <CardC certificadosArray={certificados}/>

        </div>
    )
}

export default Certificates;