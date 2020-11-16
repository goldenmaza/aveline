import db from '../db';
import global from '../../app';

let sequelizeData = {
    mode: '',
    body: ''
};

// Sequelize table definitions...
import { pageTable } from './table/page';
import { contentTable } from './table/content';
import { multimediaTable } from './table/multimedia';
import { officeTable } from './table/office';
import { contactTable } from './table/contact';
import { socialTable } from './table/social';

// Definitions for Sequelize models (tables)...
const Page = db.define('page', pageTable);
const Content = db.define('content', contentTable);
const SubContent = db.define('content', contentTable);
const SubSubContent = db.define('content', contentTable);
const Multimedia = db.define('multimedia', multimediaTable);
const Office = db.define('office', officeTable);
const Contact = db.define('contact', contactTable);
const Social = db.define('social', socialTable);

// Verifying that model definitions were created...
if (true) { //TODO: verify that model definitions were successful...
    sequelizeData.mode = process.env.SERVER_MODE;
    sequelizeData.body = 'Sequelize model definitions have been defined...';
    global.sequelizeLogger.log(sequelizeData);
} else {
    sequelizeData.mode = 'ERROR';
    sequelizeData.body = 'Sequelize model definitions was NOT defined...';
    global.sequelizeLogger.log(sequelizeData);
}

// Relationships between Page and Content tables, a Page can have several Content (paragraphs)...
Page.hasMany(Content, {
    as: "paragraphs",//Page's paragraphs...
    foreignKey: "page"
});
Content.belongsTo(Page, {
    as: "paragraphs",//Paragraph's page...
    foreignKey: "page"
});

// Relationships between Page and Multimedia tables, a Page can have several Multimedia (logotype, slider etc)...
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

// Relationships between Office and Social tables, an Office can have several Social (social media accounts)...
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

// Relationships between Contact and Multimedia tables, a Contact can have several Multimedia (employee thumbnail/portraits)...
Contact.hasMany(Multimedia, {
    as: "portraits",//Employee's portrait...
    foreignKey: "contact"
});
Multimedia.belongsTo(Contact, {
    as: "portraits",//Multimedia portrait for Contact...
    foreignKey: "contact"
});

// Relationships between Contact and Social tables, a Contact can have several Social (social media accounts)...
Contact.hasMany(Social, {
    as: "profiles",//Contact's social media...
    foreignKey: "contact"
});
Social.belongsTo(Contact, {
    as: "profiles",//Social media's for Contact...
    foreignKey: "contact"
});

// Verify that model associations were created...
if (true) { //TODO: verify that associations were successful...
    sequelizeData.mode = process.env.SERVER_MODE;
    sequelizeData.body = 'Sequelize model associations have been performed...';
    global.sequelizeLogger.log(sequelizeData);
} else {
     sequelizeData.mode = 'ERROR';
     sequelizeData.body = 'Sequelize model associations was NOT successful...';
     global.sequelizeLogger.log(sequelizeData);
 }

// Validate the Sequelize connection...
db.authenticate().then((val) => {
    sequelizeData.mode = process.env.SERVER_MODE;
    sequelizeData.body = 'Database connection has been successfully established...';
    global.sequelizeLogger.log(sequelizeData);
}).catch((err) => {
    sequelizeData.mode = 'ERROR';
    sequelizeData.body = `Unable to connect to the database: ${err}`;
    global.sequelizeLogger.log(sequelizeData);
});
