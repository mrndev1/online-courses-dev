import React from "react";
import { useSelector } from 'react-redux';
import s from './CoursesContainer.module.css';
import Loader from '../Loader/Loader';
import CourseCard from "../CourseCard/CourseCard";
import CourseCardNotFound from "../CourseCardNotFound/CourseCardNotFound";


function CoursesContainer ({ courses, elements_to_render }) {
   
    let loading = useSelector(state => state.loading);
    
    return (
        <div className={s.container}>
            {
                loading? <Loader/>
                : courses.length === 0? <CourseCardNotFound/>
                    : elements_to_render.map(
                        (course, index) => {
                            return <CourseCard key={index} name={course.name}
                                img={course.img} links={course.link}
                            />
                        }
                    )
            }
        </div>
    )
};
export default CoursesContainer;