import React, { useEffect } from 'react'
import images from '../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Presentation() {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="presentation container" id="about" data-aos="fade-down">
                <img src={images.img1} alt="image__1" className="presentation__picture" />
                <h2 className="subtitle">Mi nombre es Gojan Stiven Holguin Rincon</h2>
                <p className="presentation__copy">Actualmente soy un aprendiz de 18 años, dispuesto a aprender y demostrar mi capacidad como desarrollador Full Stack.</p>
                <a 
                    href="https://archive.org/download/hoja-de-vida-de-gojan-stiven-holguin-rincon/Hoja%20de%20vida%20de%20Gojan%20Stiven%20Holguin%20Rincon.docx" 
                    className="presentation__cv">
                        <FontAwesomeIcon icon={faFile} style={{color: '#000000'}} /> Descarga mi CV
                </a>
            </section>
    )
}

export default Presentation
