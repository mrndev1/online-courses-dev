import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import s from './CourseSection.module.css';
import { get_courses } from "../../../redux/actions/courses/getCourses";
import FilterNav from "../../components/FilterNav/FilterNav";
import SearchInput from "../../components/SearchInput/SearchInput";
import Pagination from "../../components/Pagination/Pagination";
import CoursesContainer from "../../components/CoursesContainer/CoursesContainer";

function CourseSection () {

    let courses = useSelector(state => state.modifiable_arr);
    let dispatch = useDispatch();

    let [ current_page, set_current_page ] = useState(1);
    let [ elements_per_page, set_elements_per_page ] = useState(6);

    let page_cant = Math.ceil(courses.length / elements_per_page);
    let last_index = current_page * elements_per_page;
    let first_index = last_index - elements_per_page;
    let elements_to_render = courses.slice(first_index, last_index);

    let pagination = (page) => { set_current_page(page) }
    useEffect(() => dispatch(get_courses()), [dispatch]);

    return (
        <section id="cursos" className={s.container}>

            <div className={s.nav}>
                <FilterNav/>
                <SearchInput/>
                <Pagination current_page={current_page}
                    page_cant={page_cant} pagination={pagination}
                />
            </div>

            <CoursesContainer courses={courses} elements_to_render={elements_to_render}/>


        </section>
    )
};
export default CourseSection;