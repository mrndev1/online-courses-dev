import React from "react";
import s from './CourseCardNotFound.module.css';
import img from '../../../img/err_load.png';


function CourseCardNotFound () {
    return (
        <div className={s.container}>
            <img className={s.img} src={img} alt="" />
            <div className={s.title}>cannot find courses</div>
        </div>
    )
};
export default CourseCardNotFound;