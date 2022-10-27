const { Router } = require('express');
const { Op } = require('sequelize');
const Course = require('../../models/Course');

const route = Router();
route.get(
    '/courses', async (req, res) => {
        
        try {
            let course = await Course.findAll();
            Object.entries(course).length > 0? res.status(200).send(course)
            : res.status(200).send([]);
        } catch (e) { res.status(400).send('ann error occures: ' + e) }

    }
);

route.get(
    '/courses/:courses', async (req, res) => {
        let { courses } = req.params;

        try {
            let courses_data = await Course.findAll(
                {
                    where: {
                        [Op.or]: [
                            { name: {  [Op.like]: `%${courses.toUpperCase()}%` }},
                            { type: courses.toUpperCase() }
                        ]
                    }
                }
            );
            
            courses_data.length > 0? res.status(200).send(courses_data)
            : res.status(200).send([]);
        } catch (e) { res.status(400).send('an error occurred: ' + e) }
    }
);


module.exports = route;