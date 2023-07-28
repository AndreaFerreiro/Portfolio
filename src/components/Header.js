import '../styles/layout/header.scss';
import logo from '../images/LogoB.png';
const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Logo Andrea"/>
            <span className="header__title">PortFolio</span>
        </header>
    )
}
export default Header;