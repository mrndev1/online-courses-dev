import { GET_COURSES, GET_SPECIFIC_COURSES } from "../../actions/courses/getCourses";
import { FILTER_COURSES } from "../../actions/courses/orderCourses/orderFilterCourses";
import { LOADING } from "../../actions/loading/setLoading";

let initial_state = {
    arr: [], modifiable_arr: [], loading: false
}

const coursesReducer = (state=initial_state, action) => {
    switch (action.type) {
        case GET_COURSES: return {...state, arr: action.payload, modifiable_arr: action.payload, loading: false};
        case GET_SPECIFIC_COURSES: return {...state, modifiable_arr: action.payload, loading: false};
        case LOADING: return {...state, loading: true};
        case FILTER_COURSES: return {...state, modifiable_arr: action.payload, loading: false};
        default: return {...state};
    }
};
export default coursesReducer;