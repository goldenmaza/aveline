import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Sequelize table definitions... //TODO: rename to <tablename>Table
import { seqPage } from './definitions/page';//TODO: relocate files from "definitions" to "definitions/output"
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

// Validate the connection...
db.authenticate().then((val) => {
    console.log("Connection has been established successfully...");
}).catch((err) => {
    console.error("Unable to connect to the database: ", err);
});

// Definitions for Sequelize models (tables)...//TODO: Refactor to index.js under definitions/index.js
const Page = db.define('page', seqPage);
const Content = db.define('content', seqContent);
const Multimedia = db.define('multimedia', seqMultimedia);
const Office = db.define('office', seqOffice);
const Contact = db.define('contact', seqContact);
const Social = db.define('social', seqSocial);
const Navigation = db.define('navigation', seqNavigation);

//TODO: Refactor associations to index.js under definitions/index.js
//// Relationships between Page and Content tables, a Page can have several Content (paragraphs)...
//Page.hasMany(Content, {
//    as: "Page's paragraphs",
//    foreignKey: "page"
//});
//Content.belongsTo(Page, {
//    as: "Paragraph's page",
//    foreignKey: "page"
//});
//
//// Relationships between Page and Multimedia tables, a Page can have several Multimedia (logotype, slider etc)...
//Page.hasMany(Multimedia, {
//    as: "Page's multimedia",
//    foreignKey: "page"
//});
//Multimedia.belongsTo(Page, {
//    as: "Multimedia thumbnail for Page",
//    foreignKey: "page"
//});
//
//// Relationships between Content and Multimedia tables, a Content (paragraphs) can have several Multimedia (collage)...
//Content.hasMany(Multimedia, {
//    as: "Paragraph's collage",
//    foreignKey: "content"
//});
//Multimedia.belongsTo(Content, {
//    as: "Collage thumbnail",
//    foreignKey: "page"
//});
//
//// Relationships between Content and Content rows, a Content (paragraphs) can have several nesting Content (paragraphs)...
//Content.belongsTo(Content, {
//    as: "Nesting paragraphs",
//    foreignKey: "content"
//});
//
//// Relationships between Office and Contact tables, an Office can have several Contact (employees)...
Office.hasMany(Contact, {
    as: "employees",//Office's employees...
    foreignKey: "office"
});
Contact.belongsTo(Office, {
    as: "employees",//Employee's office",
    foreignKey: "office"
});

// Relationships between Office and Multimedia tables, an Office can have a single Multimedia (regional thumbnail)...
Office.hasOne(Multimedia, {//the FK will be in the target (Multimedia)...
    as: "thumbnail",//Office's regional thumbnail...
    foreignKey: "office"
});
Multimedia.belongsTo(Office, {//the FK will be in the source (Multimedia)...
    as: "thumbnail",//Multimedia thumbnail for Office...
    foreignKey: "office"
});

//// Relationships between Contact and Multimedia tables, a Contact can have a single Multimedia (employee thumbnail)...
Contact.hasOne(Multimedia, {
    as: "portrait",//Employee's portrait...
    foreignKey: "contact"
});
Multimedia.belongsTo(Contact, {
    as: "portrait",//Multimedia portrait for Contact...
    foreignKey: "contact"
});

export default db;
