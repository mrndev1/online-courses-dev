import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { get_courses } from "../../../redux/actions/courses/getCourses";
import { filter_courses } from "../../../redux/actions/courses/orderCourses/orderFilterCourses";
import s from './FilterNav.module.css';

function FilterNav () {

    let dispatch = useDispatch();
    let courses = useSelector(state => state.arr);
    let [ option, set_option ] = useState('TYPE');


    let get_types = courses.map((course) => course.type )
    let types =  get_types.filter((type, index) => { if (get_types.indexOf(type) === index) { return type } } )

    let set_order = (event) => {
        set_option(event.target.value);
        if (event.target.value !== 'TYPE') dispatch(filter_courses(types, courses, event.target.value));
        setTimeout(() => set_option('TYPE'), 300);
    };

    return (
        <div className={s.container}>
            <button className={`${s.btn} ${s.btn_left}`} onClick={() => dispatch(get_courses())}>ALL</button>
            <select className={`${s.btn} ${s.btn_right}`} value={option} onChange={set_order}>
                <option>{option}</option>
                {
                    types.length && types.map(
                        (type, index) =>  <option key={index}>{type}</option>
                    )
                }
            </select>
        </div>
    )
};
export default FilterNav;