import Sequelize from 'sequelize';

// Sequelize definitions...
import { seqRegion } from './sequelize/region';
import { seqType } from './sequelize/type';
import { seqModel } from './sequelize/model';
import { seqCategory } from './sequelize/category';
import { seqItem } from './sequelize/item';
import { seqPage } from './sequelize/page';
import { seqContent } from './sequelize/content';
import { seqMultimedia } from './sequelize/multimedia';
import { seqOffice } from './sequelize/office';
import { seqContact } from './sequelize/contact';
import { seqSocial } from './sequelize/social';
import { seqNavigation } from './sequelize/navigation';

// Create a new Sequelize instance to setup the connection with a database (localhost)...
const db = new Sequelize('aveline', 'root', 'kng03tnTEWjMsXSz', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 7,
        min: 0,
        idle: 6000
    },
    define: {
        timestamps: false
    }
});

// Create a new Sequelize instance to setup the connection with a database (inleed)...
//const db = new Sequelize('hellstrand_aveline', 'hellstrand_aveline', 'aveline', {
//    dialect: 'mysql',
//    host: '127.0.0.1',
//    port: 3306,
//    pool: {
//        max: 7,
//        min: 0,
//        idle: 6000
//    },
//    define: {
//        timestamps: false
//    }
//});

// Validate the connection...
db.authenticate().then((val) => {
    console.log("Connection has been established successfully...");
}).catch((err) => {
    console.error("Unable to connect to the database: ", err);
});

// Declarations of definitions for Sequelize types...
const Region = db.define('region', seqRegion);
const Type = db.define('type', seqType);
const Model = db.define('model', seqModel);
const Category = db.define('category', seqCategory);
const Item = db.define('item', seqItem);
const Page = db.define('page', seqPage);
const Content = db.define('content', seqContent);
const Multimedia = db.define('multimedia', seqMultimedia);
const Office = db.define('office', seqOffice);
const Contact = db.define('contact', seqContact);
const Social = db.define('social', seqSocial);
const Navigation = db.define('navigation', seqNavigation);

// Relations - REFACTOR with Foreign keys...
//Model.belongsTo(Type);
//Category.belongsTo(Category);
//Item.belongsTo(Category);
//Content.belongsTo(Page);
//Multimedia.belongsTo(Page);

export default db;
