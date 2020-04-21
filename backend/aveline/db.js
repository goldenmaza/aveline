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

// Create a new Sequelize instance to setup the connection with a database...
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

// Relations - REFACTOR with Foreign keys...
//Model.belongsTo(Type);
//Category.belongsTo(Category);
//Item.belongsTo(Category);
//Content.belongsTo(Page);
//Multimedia.belongsTo(Page);

export default db;
