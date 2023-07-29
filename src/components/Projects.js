import '../styles/layout/projects.scss';
import Anonymous from '../images/Anominous.png';
import Disney from '../images/Disney.png';
import RickMorty from '../images/RickMorty.png';
import Awesome from '../images/Awesome.png';
import Brujas from '../images/Brujas.png';
import {Link} from 'react-router-dom';
const Projects = () => {
    return (
        <div className='projects'>
            <span className='title'>Bienvenid@ a mi Portfolio</span>
            <p className='desc'>Aquí podrás ver los proyectos que he ido desarrollando durante mi aprendizaje como programadora web.</p>
            <ul className="list">
                <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/project-promo-t-module-1-team-4/">
                    <li className="element">
                    <img className="element__img" src={Brujas}></img>
                    <div className="element__info">
                        <span className="element__info--title">Brujas de la programación</span>
                        <p className="element__info--desc">Página de presentación de las integrantes del grupo</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    </li>
                </a>
                <a target="_blank" className="linkhref" href="http://beta.adalab.es/project-promo-t-module-2-team-3/">
                    <li className="element">
                    <img className="element__img" src={Awesome}></img>
                    <div className="element__info">
                        <span className="element__info--title">Awesome Profile Cards</span>
                        <p className="element__info--desc">Creador de tarjetas virtuales personalizables</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    </li>
                </a>
                <a target="_blank" className="linkhref" href="http://beta.adalab.es/modulo-3-evaluacion-final-AndreaFerreiro/#/">
                    <li className="element">
                    <img className="element__img" src={RickMorty}></img>
                    <div className="element__info">
                        <span className="element__info--title">Rick y Morty</span>
                        <p className="element__info--desc">Visualizador y buscador de información sobre los personajes de la serie Rick Y Morty</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    </li>
                </a>
                <a target="_blank"  className="linkhref" href="http://beta.adalab.es/modulo-1-evaluacion-final-AndreaFerreiro/">
                    <li className="element">
                    <img className="element__img" src={Anonymous}></img>
                    <div className="element__info">
                        <span className="element__info--title">Anonymous Proxy</span>
                        <p className="element__info--desc">Proyecto de maquetación web</p>
                        <p className="element__info--tech">HTML5 - CSS3</p>
                    </div>
                    </li>
                </a>
                <a target="_blank"  className="linkhref" href="http://beta.adalab.es/modulo-2-evaluacion-final-AndreaFerreiro/">
                    <li className="element">
                    <img className="element__img" src={Disney}></img>
                    <div className="element__info">
                        <span className="element__info--title">Disney Characters</span>
                        <p className="element__info--desc">Buscador de personajes Disney con posibilidad de añadir a "Favoritos"</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    </li>
                </a>
            </ul>
            <div className='containerButton'>
                <Link to="/"><button className='button'>Volver</button></Link>
            </div>
        </div>
        
    )
}
export default Projects;