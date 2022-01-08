import React, { useEffect } from 'react'
import images from '../assets/images'
import svgImage from '../assets/svg/team_collaboration.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJava, faJsSquare, faPython, faGitAlt, faAngular, 
    faReact } from '@fortawesome/free-brands-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="about container">

                <div className="about__text" id="skills" data-aos="fade-right">
                    <h2 className="subtitle">Mis habilidades</h2>
                    <p className="about__paragraph">Soy desarrollador Full Stack, con un enfoque principal en el desarrollo FrontEnd, cuento con conocimientos en  la parte Front como: <FontAwesomeIcon icon={faHtml5} style={{color: '#E34C26'}} /> Html, <FontAwesomeIcon icon={faCss3} style={{color: '#1C78C0'}} /> Css, <FontAwesomeIcon icon={faJsSquare} style={{color: '#F0DB4F'}} /> JavaScript, <FontAwesomeIcon icon={faReact} style={{color: '#165CAA'}} /> React, diseño responsive. </p>
                    <p className="about__paragraph">Por la parte BackEnd: <FontAwesomeIcon icon={faPython} style={{color: '#306998'}} /> Python, <FontAwesomeIcon icon={faJava} style={{color: '#D51F06'}} /> Java, SQL, manejo el framework de Django, uso la metodologia de Scrum y tengo conocimetos sobre <FontAwesomeIcon icon={faGitAlt} style={{color: '#BD2C00'}} /> Git. Actualmente estoy en el aprendizaje de MongoDB, <FontAwesomeIcon icon={faAngular} style={{color: '#B52E31'}} /> Angular y .Net, ademas de lenguajes de moviles como Kotlin o React Native.</p>
                </div>

                <figure className="about__img" data-aos="fade-right">
                    <img src={images.img5} alt="image__2" className="about__picture" />
                </figure>

                <figure className="about__img about__img--left" data-aos="fade-left">
                    <img src={svgImage} alt="image__3" className="about__picture" />
                </figure>

                <div className="about__text" data-aos="fade-left">
                    <h2 className="subtitle">Sobre mi trabajo</h2>
                    <p className="about__paragraph">Me gusta tener una seguridad de que el cliente le guste mi trabajo, ademas de mantener un constante cambio entre versiones para que el diseño y su funcionalidad siempre esten en buen funcionamiento.</p>
                    <p className="about__paragraph">Normalmente me gusta trabajar con amigos desarrolladores para tener un mejor punto de vista y estar al tanto de alguna anomalia dentro del software, he hecho diferentes proyectos como muestra de ello.</p>
                </div>

            </section>
    )
}

export default About
