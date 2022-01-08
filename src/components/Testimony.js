import React, { useEffect } from 'react'
import images from '../assets/images'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimony() {

    useEffect(() => {
        Aos.init({ duration: 2000})
    }, [])

    return (
        <section className="testimony container" data-aos="flip-up">
                <h2 className="subtitle">¿Qué dicen de mi trabajo?</h2>

                <div className="testimony__grid">
                    <article className="testimony__item">
                        <div className="testimony__person">
                            <img src={images.img7} alt="image__9" className="testimony__img" />
                            <div className="testimony__text">
                                <h3 className="testimony__name">Irlant Oviedo</h3>
                                <p className="testimony__verification">Administrador de empresas</p>
                            </div>
                        </div>
                        <p className="testimony__review">Me parece un trabajo excelente, con detalles muy cuidado, como tener centrado y buen distribuido los espacios y colores muy elegantes y agradables para el ojo, me ve un lugar estable y eficaz.</p>
                    </article>

                    <article className="testimony__item">
                        <div className="testimony__person">
                            <img src={images.img8} alt="image__9" className="testimony__img" />
                            <div className="testimony__text">
                                <h3 className="testimony__name">Gohan Holguin</h3>
                                <p className="testimony__verification">Content creator</p>
                            </div>
                        </div>
                        <p className="testimony__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto doloribus alias eius nisi dolor earum quod. Adipisci perferendis nesciunt illum.</p>
                    </article>

                </div>
            </section>
    )
}

export default Testimony
