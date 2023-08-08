import '../styles/layout/header.scss';
import logo from '../images/LogoB.png';
import { Link } from 'react-router-dom';
import {useLocation} from 'react-router';
const Header = () => {
    let location = useLocation();
    let path = location.pathname;
    const showNav = () => {
        if (path !== '/'){
          return(
            <nav>
                <ul className='header__nav'>
                    <Link className='link' to="/"><li className='header__nav--element'>Inicio</li></Link>
                    <Link className='link' to="/Bio"><li className='header__nav--element'>Biografía</li></Link>
                    <Link className='link' to="/Contact"><li className='header__nav--element'>Contacto</li></Link>
                    <Link className='link' to="/Projects"><li className='header__nav--element'>Proyectos</li></Link>
                </ul>
            </nav>
          )
        }else{
            return(
                <span className='header__title'>PortFolio</span>
            )
        }
      }
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Logo Andrea"/>
            {showNav()}
        </header>
    )
}
export default Header;