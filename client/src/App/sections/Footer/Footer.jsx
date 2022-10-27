import React from "react";
import s from './Footer.module.css';
import img from '../../../img/girl-g094720a96_1920.jpg';


function Footer () {
    return (
        <footer className={s.container}>

            <ul className={s.list}>
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#cursos">CURSOS</a></li>
            </ul>

            <img className={s.img} src={img} alt="img"/>

            <ul id="media" className={s.list}>
                <li><a href="#">TIKTOK</a></li>
                <li><a href="#">FACEBOOK</a></li>
                <li><a href="#">INSTAGRAM</a></li>
            </ul>

        </footer>
    )
};
export default Footer;