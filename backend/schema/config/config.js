import dotenv from 'dotenv';
dotenv.config();

//TODO: Refector to use for dev, test and prod...
module.exports = {
    'development': {
        'host': process.env.SEQUELIZE_HOST,
        'database': process.env.SEQUELIZE_DATABASE,
        'username': process.env.SEQUELIZE_USERNAME,
        'password': process.env.SEQUELIZE_PASSWORD,
        'dialect': process.env.SEQUELIZE_DIALECT
    },
    'test': {
        'host': process.env.SEQUELIZE_HOST,
        'database': process.env.SEQUELIZE_DATABASE,
        'username': process.env.SEQUELIZE_USERNAME,
        'password': process.env.SEQUELIZE_PASSWORD,
        'dialect': process.env.SEQUELIZE_DIALECT
    },
    'production': {
        'use_env_variable': process.env.SEQUELIZE_URL,
        'dialect': process.env.SEQUELIZE_DIALECT
    }
};
