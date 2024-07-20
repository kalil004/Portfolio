import './curriculum.css';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

function Curriculum() {
    return (
        <div className='curriculum'>
            <Navbar/>
            <iframe src='https://docs.google.com/document/d/1Rir_6il3gY53lOzzcG8dlDPXoNay9nc-ojPCXYp1IO4/edit?usp=sharing' title='PDF Viewer' width="99%" height="950px"></iframe>
            <Footer/>
        </div>
    )
}

export default Curriculum;