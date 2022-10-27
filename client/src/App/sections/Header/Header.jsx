import React from "react";
import s from './Header.module.css';

function Header () {
    return (
        <header className={s.container}>

            <h1 className={s.container_title}>ONLINE COURSES</h1>

            <ul className={s.container_list}>
                <li className={s.container_list_item}><a href="#inicio">inicio</a></li>
                <li className={s.container_list_item}><a href="#cursos">cursos</a></li>
                <li className={s.container_list_item}><a href="#media">media</a></li>
            </ul>

        </header>
    )
};
export default Header;