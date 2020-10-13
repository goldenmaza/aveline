import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

//TODO: Refector to use for dev, test and prod...
//const env = process.env.NODE_ENV || 'development';
//const config = require('./../config/config.js')[env];
//config.database (same as process.env.SEQUELIZE_DATABASE) etc

// Create a new Sequelize instance to setup the connection with a database (localhost)...
const db = new Sequelize(
    process.env.SEQUELIZE_DATABASE,
    process.env.SEQUELIZE_USERNAME,
    process.env.SEQUELIZE_PASSWORD, {
        dialect: process.env.SEQUELIZE_DIALECT,
        host: process.env.SEQUELIZE_HOST,
        port: parseInt(process.env.SEQUELIZE_PORT),
        pool: {
            min: parseInt(process.env.SEQUELIZE_POOL_MIN),
            max: parseInt(process.env.SEQUELIZE_POOL_MAX),
            idle: parseInt(process.env.SEQUELIZE_POOL_IDLE)
        },
        define: {
            timestamps: false
        }
    }
);

export default db;
