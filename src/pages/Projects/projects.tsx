import Card from '../../components/ProjectCard/card';
import { projetos } from '../../data/projetos';
import './projects.css'

function Projects() {
    return (
        <div className='projects'>
        <h1>Meus projetos</h1>

        <Card projetosArray={projetos}/>

        </div>
    )
}

export default Projects;