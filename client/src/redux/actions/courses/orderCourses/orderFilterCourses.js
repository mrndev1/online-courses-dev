import set_loading from '../../loading/setLoading';
import { set_filter_type } from "./util";


export let FILTER_COURSES = 'FILTER_COURSES';

export let filter_courses = (types, courses, type_condition_selected) => {
    return dispatch => {
        dispatch(set_loading());
        let type_selected = set_filter_type(types, type_condition_selected);
        let new_arr = courses.filter(courses => courses.type === type_selected);
        setTimeout(() => dispatch({ type: FILTER_COURSES, payload: new_arr }), 1000);
    }
};