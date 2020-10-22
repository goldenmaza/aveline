import LoggerUtil from './util/LoggerUtil';
import dotenv from 'dotenv';
dotenv.config();

const appLogger = new LoggerUtil(process.env.LOGGER_APP);
let appData = {
    mode: process.env.SERVER_MODE,
    body: `Running NodeJS script: ${__filename}`
}
appLogger.log(appData);

exports.dataloaderLogger = new LoggerUtil(process.env.LOGGER_DATALOADER);
exports.sequelizeLogger = new LoggerUtil(process.env.LOGGER_SEQUELIZE);
exports.graphqlLogger = new LoggerUtil(process.env.LOGGER_GRAPHQL);
exports.mailerLogger = new LoggerUtil(process.env.LOGGER_NODEMAILER);

import Express from 'express';
import path from 'path';
//import Helmet from 'helmet';
//import Compression from 'compression';
import Parser from 'body-parser';
import cors from 'cors';

const app = Express();
exports.app = app;
appData.body = 'Express server has been initialized...';
appLogger.log(appData);

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

//app.use(Helmet());
//app.use(Compression());
app.use(Parser.json());
app.use(Parser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

require('./api/graphql');
require('./api/mail');

appData.body = 'Express server configurations performed...';
appLogger.log(appData);

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    appData.body = `Application is listening at port: ${port}`
    appLogger.log(appData);
});
