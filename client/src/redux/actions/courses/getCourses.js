import axios from 'axios';
import set_loading from '../loading/setLoading';

export let GET_COURSES = 'GET_COURSES';
export let GET_SPECIFIC_COURSES = 'GET_SPECIFIC_COURSES';

export let get_courses = () => {
    return async (dispatch) => {
        try {
            dispatch(set_loading());
            let courses = await axios.get('/get/courses');
            setTimeout(() => dispatch({ type: GET_COURSES, payload: courses.data }), 1000);

        } catch (e) { console.log(e) }
    }
};

export let get_specific_courses = (input) => {
    return async dispatch => {
        try {
            dispatch(set_loading());
            let specific_courses = await axios.get(`/get/courses/${input}`);
            setTimeout(() => dispatch({ type: GET_SPECIFIC_COURSES, payload: specific_courses.data }), 1000);
        } catch (e) { console.log(e) }
    }
};