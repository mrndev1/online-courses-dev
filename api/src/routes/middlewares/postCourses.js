const { Router } = require('express');
const Course = require('../../models/Course');

const route = Router();
route.post(
    '/courses', async (req, res) => {
        let courses_data = req.body;

        // checkquear que los datos ingresados sean correctos
        // que no se encuentra por el mismo nombre en la base de datos

        //await Course.bulkCreate(courses_data);
        //res.status(200).send('s')

        try {
            let courses_created = await Course.create(courses_data);
            Object.entries(courses_created).length > 0? res.status(200).send('course created')
            : res.status(200).send('no courses created');
        } catch (e) { res.status(400).send('ann error occured: ' + e) }

    }
);

module.exports = route;