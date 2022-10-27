import React from "react";
import s from './CourseCard.module.css';

function CourseCard ({ name, img, links }) {
    return (
        <div className={s.container}>
            <img className={s.img} src={img} alt="" />
            <div className={s.info_container}>
                <div className={s.title}>{name.toLowerCase()}</div>
                <div className={s.link_container}>
                    <a className={s.link_container_link} href={links.info}>info</a>
                    <a className={s.link_container_link} href={links.buy}>buy</a>
                </div>
            </div>
        </div>
    )
};
export default CourseCard;