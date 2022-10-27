import React from "react";
import s from './IntroSection.module.css';
import img from '../../../img/book-3.gif';

function IntroSection () {
    return (
        <section id="inicio" className={s.container}>

            <div className={s.info}>
                <div>Bienvenidos!</div>
                <p className={s.info_txt}>somos una biblioteca virtual que ofrece cursos de progrmacion, disenio, fotografia, idiomas, marketin digital, etc.</p>
                <p className={s.info_txt}>Nuestro objetivo es que puedan aprender lo que quieran de una manera sencilla y economica.</p>
            </div>

            <div className={s.img}>
                <img className={s.img_gif} src={img} alt="loading giff"/>
            </div>

        </section>
    )
};
export default IntroSection;