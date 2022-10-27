const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Course = sequelize.define(
    'Course', {
        name: {
            type: DataTypes.STRING, allowNull: false,
            validate: { is: /^[A-Za-z\s]*$/, notEmpty: true, }
        },

        type: {
            type: DataTypes.STRING, allowNull: false,
            validate: { is: /^[A-Za-z\s]*$/, notEmpty: true, }
        },

        img: {
            type: DataTypes.STRING, allowNull: false,
            validate: { notEmpty: true }
        },

        link: { type: DataTypes.JSON }
        
    }, { timestamps: false }
);

module.exports = Course;