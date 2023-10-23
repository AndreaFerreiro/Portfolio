import '../styles/layout/projects.scss';
import Anonymous from '../images/Anominous.png';
import Disney from '../images/Disney.png';
import RickMorty from '../images/RickMorty.png';
import Awesome from '../images/Awesome.png';
import Brujas from '../images/Brujas.png';
import Junior from '../images/junior.png';
import Friends from '../images/Friends.jpeg';
import Mole from '../images/whackAMole.jpeg';
import Memory from '../images/memory.png';
import ConnectFour from '../images/connect.png';
import Snake from '../images/snake.jpeg';
import Invaders from'../images/spaceInvaders.png';
import Flappy from '../images/FlappyBird.jpeg';
import {Link} from 'react-router-dom';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Projects = () => {
    return (
        <div className='projects'>
            <span className='title'>Bienvenid@ a mi Portfolio</span>
            <p className='desc'>Aquí podrás ver los proyectos que he ido desarrollando durante mi aprendizaje como programadora web.</p>
            <ul className="list">
                    <li className="element">
                    <img className="element__img" src={Junior}></img>
                    <div className="element__info">
                        <span className="element__info--title">Programadoras Junior</span>
                        <p className="element__info--desc">Aplicación web en la que poder ver y/o subir proyectos</p>
                        <p className="element__info--tech">HTML5 - CSS3 - REACT - EXPRESS - MySQL - FREEDB</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://programadoras-junior.onrender.com/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/project-promo-t-module-4-team-1"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={Awesome}></img>
                        <div className="element__info">
                            <span className="element__info--title">Awesome Profile Cards</span>
                            <p className="element__info--desc">Creador de tarjetas virtuales personalizables</p>
                            <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="http://beta.adalab.es/project-promo-t-module-2-team-3/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/project-promo-t-module-2-team-3"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={RickMorty}></img>
                        <div className="element__info">
                            <span className="element__info--title">Rick y Morty</span>
                            <p className="element__info--desc">Visualizador y buscador de información sobre los personajes de la serie Rick Y Morty</p>
                            <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/modulo-3-evaluacion-final-AndreaFerreiro/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/modulo-3-evaluacion-final-AndreaFerreiro"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={Friends}></img>
                        <div className="element__info">
                            <span className="element__info--title">Frases de Friends</span>
                            <p className="element__info--desc">Archivo de frases dichas en la serie "Friends"; buscador y formulario para añadir nuevas</p>
                            <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/modulo-3-evaluacion-intermedia-AndreaFerreiro/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/modulo-3-evaluacion-intermedia-AndreaFerreiro"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={Disney}></img>
                        <div className="element__info">
                            <span className="element__info--title">Disney Characters</span>
                            <p className="element__info--desc">Buscador de personajes Disney con posibilidad de añadir a "Favoritos"</p>
                            <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/modulo-2-evaluacion-final-AndreaFerreiro/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/modulo-2-evaluacion-final-AndreaFerreiro"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={Anonymous}></img>
                        <div className="element__info">
                            <span className="element__info--title">Anonymous Proxy</span>
                            <p className="element__info--desc">Proyecto de maquetación web</p>
                            <p className="element__info--tech">HTML5 - CSS3</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/modulo-1-evaluacion-final-AndreaFerreiro/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/modulo-1-evaluacion-final-AndreaFerreiro"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
                    <li className="element">
                        <img className="element__img" src={Brujas}></img>
                        <div className="element__info">
                            <span className="element__info--title">Brujas de la programación</span>
                            <p className="element__info--desc">Página de presentación de las integrantes del grupo</p>
                            <p className="element__info--tech">HTML5 - CSS3</p>
                        </div>
                        <p className='containerIcons'>
                            <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/project-promo-t-module-1-team-4/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                            <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/project-promo-t-module-1-team-4"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                        </p>
                    </li>
            </ul>
            <span className='desc'>Vamos a jugar!! (Solo maquetado en desktop)</span>
            <ul className='list'>
                <li className="element">
                    <img className="element__img" src={Flappy}></img>
                    <div className="element__info">
                        <span className="element__info--title">Tetris</span>
                        <p className="element__info--desc">{'Usa la flecha "arriba" para girar la piezas "abajo" para acelerar su bajada y  las flechas --> <-- para desplazarla lateralmente.'}</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                <li className="element">
                    <img className="element__img" src={Mole}></img>
                    <div className="element__info">
                        <span className="element__info--title">Whack-a-Mole</span>
                        <p className="element__info--desc">Atrapa el topo todas las veces que puedas en un minuto, sé rápido!</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Whack-a-mole/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Whack-a-mole"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={Memory}></img>
                    <div className="element__info">
                        <span className="element__info--title">Memory Game</span>
                        <p className="element__info--desc">Encuentra todas las parejas de cartas.</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/MemoryGame/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/MemoryGame"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={ConnectFour}></img>
                    <div className="element__info">
                        <span className="element__info--title">Connect Four</span>
                        <p className="element__info--desc">Enfréntate a tu adversario y consigue alinear 4 de tus fichas para ganar!</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={Snake}></img>
                    <div className="element__info">
                        <span className="element__info--title">Snake</span>
                        <p className="element__info--desc">Utiliza las flechas para dirigir la serpiente y comer tantas manzanas como puedas.</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={Flappy}></img>
                    <div className="element__info">
                        <span className="element__info--title">Flappy-Bird</span>
                        <p className="element__info--desc">Esquiva los obtáculos para llegar tan lejos como puedas. Utiliza la tecla SPACE para saltar y coger altura.</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={Invaders}></img>
                    <div className="element__info">
                        <span className="element__info--title">Space-Invaders</span>
                        <p className="element__info--desc">{'Desplaza el lanza cohetes usando las flechas <-- y --> y dispara presionando la tecla SPACE.'}</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
                 <li className="element">
                    <img className="element__img" src={ConnectFour}></img>
                    <div className="element__info">
                        <span className="element__info--title">Frooger</span>
                        <p className="element__info--desc">Conduce la rana hasta la meta esquivando los obstáculos. Emplea las diferentes flechas para moverte por el mapa.</p>
                        <p className="element__info--tech">HTML5 - CSS3 - JS</p>
                    </div>
                    <p className='containerIcons'>
                        <a target="_blank" className="linkhref" href="https://andreaferreiro.github.io/Connect-Four/"><FontAwesomeIcon className='icon' icon={faGlobe}/></a>
                        <a target="_blank" className="linkhref" href="https://github.com/AndreaFerreiro/Connect-Four"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    </p>
                 </li>
            </ul>
        </div>
    )
}
export default Projects;