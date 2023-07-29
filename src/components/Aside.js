import '../styles/layout/aside.scss';
import perfil from '../images/perfil.jpeg';
import {Link} from 'react-router-dom';
const Aside = () => {
    return (
        <aside className="aside">
            <div className='perfil'>
                <div className='aside__img'>
                    <img className='aside__img--src' src={perfil}></img>
                </div>
                <div className='aside__info'>
                    <span className='aside__info--name'>Andrea Ferreiro</span>
                    <p className='aside__info--desc'>Junior Full-Stack Developer</p>
                </div>
            </div>
            
            <div className='aside__buttons'>
                <Link to="/Bio"><button className='aside__buttons--click'>Biografía y CV</button></Link>
                <Link to="/Contact"><button className='aside__buttons--click'>Contáctame</button></Link>
                <Link to="/Projects"><button className='aside__buttons--click'>Mis proyectos</button></Link>
            </div>
        </aside>
    )
}
export default Aside;