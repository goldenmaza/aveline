import Sequelize from 'sequelize';
import global from '../app';

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

const data = {
    mode: process.env.SERVER_MODE,
    body: 'Sequelize instance has been created...'
};
global.sequelizeLogger.log(data);

export default db;
