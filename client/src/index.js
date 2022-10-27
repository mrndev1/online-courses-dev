import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';
import reportWebVitals from './reportWebVitals';

import App from './App/App';
import store from './redux/store'
import axios from 'axios';

// manejar variables de entorno
dotenv.config();

// se le setea como url default. (heroku o localhost)
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


const routes = ( <React.StrictMode><Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider></React.StrictMode> )
const root = document.getElementById('root');
render(routes, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
