const { Router } = require('express');
const getCourses = require('./middlewares/getCourses');
const postCourses = require('./middlewares/postCourses');

const routes = Router();
routes.use('/get', getCourses);
routes.use('/post', postCourses);


module.exports = routes;