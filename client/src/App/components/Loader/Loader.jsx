import React from "react";
import s from './Loader.module.css';

function Loader () {
    return <div className={s.container}>
        <div className={s.container_load}></div>
    </div>
};

export default Loader;