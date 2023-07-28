import '../styles/layout/contact.scss';
import contact from '../images/contacto.png';
import tel from '../images/telefono.png';
import email from '../images/email.png';
import github from '../images/github.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import {Link} from 'react-router-dom';
const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__imgContainer'>
                <img className='contact__imgContainer--img' src={contact}></img>
                <span className='contact__imgContainer--title'>Encuéntrame Online</span>
            </div>
            <div className='contact__buttons'>
                <a className='linkhref' target='_blank' href='mailto:andreafga28@gmail.com' title='Envíame un email'><button className='contact__buttons--button'>
                    <img className='logo' src={email}></img>
                    <span className='name'>Email</span>
                </button></a>
                <a className='linkhref' target='_blank' href='tel:+34722640381' title='Llámame'><button className='contact__buttons--button'>
                    <img className='logo' src={tel}></img>
                    <span className='name'>Teléfono</span>
                </button></a>
                <a className='linkhref' target='_blank' href='https://github.com/AndreaFerreiro' title='Echale un vistazo a mi GitHub'><button className='contact__buttons--button'>
                    <img className='logo' src={github}></img>
                    <span className='name'>GitHub</span>
                </button></a>
                <a className='linkhref' target='_blank' href='https://www.linkedin.com/in/andrea-ferreiro-garc%C3%ADa-38b83b27a/' title='Echale un vistazo a mi Linkedin'><button className='contact__buttons--button'>
                    <img className='logo' src={linkedin}></img>
                    <span className='name'>Linkedin</span>
                </button></a>
                <a className='linkhref' target='_blank' href='https://twitter.com/andreaferreirog'><button className='contact__buttons--button' title='Echale un vistazo a mi Twitter'>
                    <img className='logo' src={twitter}></img>
                    <span className='name'>Twitter</span>
                </button></a>
                <a className='linkhref' target='_blank' href='https://m.facebook.com/andrea.ferreirogarcia.56?eav=AfbMo3M5J2fONqx2rv6KLSzKqh76dZAKsvZYrBV1WwvwrEr34oxlbd5uhc5JGfkGKvQ&paipv=0' title='Echale un vistazo a mi Facebook'><button className='contact__buttons--button'>
                    <img className='logo' src={facebook}></img>
                    <span className='name'>Facebook</span>
                </button></a>
            </div>
            <div className='containerButton'>
                <Link to="/"><button className='button'>Volver</button></Link>
            </div>
        </section>
    )
}
export default Contact;