import '../styles/layout/projects.scss';
import Anonymous from '../images/Anominous.png';
import Disney from '../images/Disney.png';
import RickMorty from '../images/RickMorty.png';
import {Link} from 'react-router-dom';
const Projects = () => {
    return (
        <div className='projects'>
            <span className='title'>Bienvenid@ a mi Portfolio</span>
            <p className='desc'>Aquí podrás ver los proyectos que he ido desarrollando durante mi aprendizaje como programadora web.</p>
            <ul className="list">
                <a target="_blank" className="linkhref" href="http://beta.adalab.es/modulo-3-evaluacion-final-AndreaFerreiro/#/">
                    <li className="element">
                    <img className="element__img" src={RickMorty}></img>
                    <div className="element__info">
                        <span className="element__info--title">Rick y Morty</span>
                        <p className="element__info--desc">Proyecto de maquetación y programación web</p>
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
                        <p className="element__info--desc">Proyecto de maquetación y programación web</p>
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