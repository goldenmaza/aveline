import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Sequelize definitions...
import { seqPage } from './definitions/page';
import { seqContent } from './definitions/content';
import { seqMultimedia } from './definitions/multimedia';
import { seqOffice } from './definitions/office';
import { seqContact } from './definitions/contact';
import { seqSocial } from './definitions/social';
import { seqNavigation } from './definitions/navigation';

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
        port: process.env.SEQUELIZE_PORT,
        pool: {
            min: process.env.SEQUELIZE_POOL_MIN,
            max: process.env.SEQUELIZE_POOL_MAX,
            idle: process.env.SEQUELIZE_POOL_IDLE
        },
        define: {
            timestamps: false
        }
    }
);

// Validate the connection...
db.authenticate().then((val) => {
    console.log("Connection has been established successfully...");
}).catch((err) => {
    console.error("Unable to connect to the database: ", err);
});

// Declarations of definitions for Sequelize models...
const Page = db.define('page', seqPage);
const Content = db.define('content', seqContent);
const Multimedia = db.define('multimedia', seqMultimedia);
const Office = db.define('office', seqOffice);
const Contact = db.define('contact', seqContact);
const Social = db.define('social', seqSocial);
const Navigation = db.define('navigation', seqNavigation);

// Relations - REFACTOR with Foreign keys...
//Content.belongsTo(Page);
//Multimedia.belongsTo(Page);

export default db;
