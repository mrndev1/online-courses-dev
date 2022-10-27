const app = require('./src/app');
const sequelize = require('./src/db');


// (se declara una variable de entorno con el puerto (3001)) o (heroku provee un puerto)
sequelize.sync({ force: false }).then(
    () => app.listen(process.env.PORT, () => console.log('listening') )
);