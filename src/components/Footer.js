import logo from '../images/LogoN.png';
import '../styles/layout/footer.scss';
const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__name'>Andrea Ferreiro García</p>
            <img className='footer__logo' src={logo}></img>
        </footer>
    )
}
export default Footer;