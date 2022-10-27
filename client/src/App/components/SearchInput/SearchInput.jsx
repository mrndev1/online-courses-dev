import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { get_specific_courses } from "../../../redux/actions/courses/getCourses";
import s from './SearchInput.module.css';

function SearchInput () {

    let dispatch = useDispatch();
    let [ input, set_input ] = useState('');
    let submit = () => {
        if (input.length > 0) dispatch(get_specific_courses(input));
        set_input('');
    };

    return <div className={s.container}>
        <input className={s.input} type="text" value={input} onChange={(event) => set_input(event.target.value)}/>
        <button className={s.btn} onClick={submit}>+</button>
    </div>
};
export default SearchInput;