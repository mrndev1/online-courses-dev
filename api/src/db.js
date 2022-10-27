require('dotenv').config(); // averiguar bien que hace
const { Sequelize } = require('sequelize');
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;

// NODE_ENV es una variable de entorno que se utiliza para determinar si el entorno es de produccion o development.
const sequelize = process.env.NODE_ENV === 'production'
? new Sequelize(
  {
    // heroku provee un nombre a la base de datos que no conocemos
    database: DB_NAME, dialect: "postgres", host: DB_HOST, port: 5432, username: DB_USER, password: DB_PASSWORD,
    pool: { max: 3, min: 1, idle: 10000 }, dialectOptions: { ssl: { require: true, rejectUnauthorized: false }, keepAlive: true },
    ssl: true,
  }
)
: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

module.exports = sequelize;