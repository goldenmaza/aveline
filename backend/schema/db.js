import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// Sequelize table definitions...
import { pageTable } from './definitions/table/page';
import { contentTable } from './definitions/table/content';
import { multimediaTable } from './definitions/table/multimedia';
import { officeTable } from './definitions/table/office';
import { contactTable } from './definitions/table/contact';
import { socialTable } from './definitions/table/social';
import { navigationTable } from './definitions/table/navigation';

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
const Page = db.define('page', pageTable);
const Content = db.define('content', contentTable);
const SubContent = db.define('content', contentTable);
const SubSubContent = db.define('content', contentTable);
const Multimedia = db.define('multimedia', multimediaTable);
const Office = db.define('office', officeTable);
const Contact = db.define('contact', contactTable);
const Social = db.define('social', socialTable);
const Navigation = db.define('navigation', navigationTable);

//TODO: Refactor associations to index.js under definitions/index.js
// Relationships between Page and Content tables, a Page can have several Content (paragraphs)...
Page.hasMany(Content, {
    as: "paragraphs",//Page's paragraphs...
    foreignKey: "page"
});
Content.belongsTo(Page, {
    as: "paragraphs",//Paragraph's page...
    foreignKey: "page"
});

//// Relationships between Page and Multimedia tables, a Page can have several Multimedia (logotype, slider etc)...
Page.hasMany(Multimedia, {
    as: "media",//Page's collage...
    foreignKey: "page"
});
Multimedia.belongsTo(Page, {
    as: "media",//Collage thumbnail's for home route...
    foreignKey: "page"
});

// Relationships between Content and Multimedia tables, a Content (paragraphs) can have several Multimedia (collage)...
Content.hasMany(Multimedia, {
    as: "collage",//Paragraph's collage...
    foreignKey: "content"
});
Multimedia.belongsTo(Content, {
    as: "collage",//Collage thumbnail's paragraph...
    foreignKey: "content"
});

// Relationships between Content and Content rows, a Content (paragraphs) can have several nesting Content (paragraphs)...
Content.hasMany(SubContent, {
    as: "subparagraphs",//Paragraph's paragraphs...
    foreignKey: "content"
});
SubContent.hasMany(SubSubContent, {
    as: "subsubparagraphs",//Paragraph's paragraphs...
    foreignKey: "content"
});

// Relationships between Office and Contact tables, an Office can have several Contact (employees)...
Office.hasMany(Contact, {
    as: "employees",//Office's employees...
    foreignKey: "office"
});
Contact.belongsTo(Office, {
    as: "employees",//Employee's office"...
    foreignKey: "office"
});

//// Relationships between Office and Social tables, an Office can have several Social (social media accounts)...
Office.hasMany(Social, {
    as: "socials",//Office's social media...
    foreignKey: "office"
});
Social.belongsTo(Office, {
    as: "socials",//Social media's office"...
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

//// Relationships between Contact and Multimedia tables, a Contact can have several Multimedia (employee thumbnail/portraits)...
Contact.hasMany(Multimedia, {
    as: "portraits",//Employee's portrait...
    foreignKey: "contact"
});
Multimedia.belongsTo(Contact, {
    as: "portraits",//Multimedia portrait for Contact...
    foreignKey: "contact"
});

//// Relationships between Contact and Social tables, a Contact can have several Social (social media accounts)...
Contact.hasMany(Social, {
    as: "profiles",//Contact's social media...
    foreignKey: "contact"
});
Social.belongsTo(Contact, {
    as: "profiles",//Social media's for Contact...
    foreignKey: "contact"
});

export default db;
