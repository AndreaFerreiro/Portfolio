import perfil from '../images/perfil.jpeg';
import '../styles/layout/bio.scss';
import {Link} from 'react-router-dom';
const Bio = () => {
    return (
        <section className='bio'>
            <article className='bio__perfil'>
                <div className='img'>
                    <img className='img__src' src={perfil}></img>
                </div>
                <div className='info'>
                    <span className='info__name'>Andrea Ferreiro</span>
                    <p className='info__desc'>Junior Full-Stack Developer</p>
                    <button className='info__button'>Descargar CV</button>
                </div>
            </article>
            <article className='bio__biograph'>
                <span className='bio__biograph--title'>Un poquito sobre mi</span>
                <p className='bio__biograph--text'>El día 4 de agosto es el día en el que comencé mi trayectoria en la carrera más importante de todas; la carrera de vida.<br></br> 
                A pesar de no llevar mucho tiempo cursándola, he ido acumulando experiencias tanto laborales como personales que me han convertido en la persona que ahora soy.<br></br>
                Diferentes puestos de trabajo me han ayudado a desarrollar capacidades y habilidades como la comunicación, el orden y el trabajo en equipo, las cuales, para mi, se han convertido en fundamentales. <br></br>
                El hecho de haber trabajado siempre cara al público me ha dado experiencias que a día de hoy son mi base a la hora de hablar con el cliente, entender sus necesidades y preocupaciones y ofrecer la mejor solución a estas.<br></br>
                Buscando un cambio en mi vida he encontrado un mundo que me apasiona; El mundo de la programación web, en el que me encantaría desarrollar y ampliar los conocimientos que he adquirido hasta el momento.<br></br>
                Sin miedo a afrontar nuevos desafíos y aprender cosas nuevas, me presento a este mundillo dispuesta a dar lo mejor de mi y convertirme en la programadora web que aspiro ser.
                </p>
            </article>
            <div className='containerButton'>
                <Link to="/"><button className='button'>Volver</button></Link>
            </div>
        </section>
    )
    
}
export default Bio;