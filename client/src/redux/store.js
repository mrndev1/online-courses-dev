import { createStore, applyMiddleware } from 'redux';
import coursesReducer from './reducers/coursesReducer/coursesReducer'
import thunk from 'redux-thunk';

const store = createStore(coursesReducer, applyMiddleware(thunk));
export default store;