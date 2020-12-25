import LoggerUtil from './util/LoggerUtil';
import Express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
dotenv.config({ path: path.join(__dirname, `.env.${environment}`) });

const slaveLogger = new LoggerUtil(process.env.LOGGER_SLAVE, process.pid);
let slaveData = {
    mode: process.env.SERVER_MODE,
    body: `Running NodeJS script: ${__filename}`
}
slaveLogger.log(slaveData);
exports.slaveLogger = slaveLogger;

exports.dataloaderLogger = new LoggerUtil(process.env.LOGGER_DATALOADER, process.pid);
slaveData.body = 'Dataloader logger has been initialized...';
slaveLogger.log(slaveData);
exports.sequelizeLogger = new LoggerUtil(process.env.LOGGER_SEQUELIZE, process.pid);
slaveData.body = 'Sequelize logger has been initialized...';
slaveLogger.log(slaveData);
exports.graphqlLogger = new LoggerUtil(process.env.LOGGER_GRAPHQL, process.pid);
slaveData.body = 'GraphQL logger has been initialized...';
slaveLogger.log(slaveData);
exports.mailerLogger = new LoggerUtil(process.env.LOGGER_NODEMAILER, process.pid);
slaveData.body = 'Mailer logger has been initialized...';
slaveLogger.log(slaveData);

const app = Express();
slaveData.body = 'Express server has been initialized...';
slaveLogger.log(slaveData);

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

app.use(helmet());
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
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

exports.app = app; // Note: Required for the APIs...
require('./api/graphql');
require('./api/mail');

slaveData.body = 'Express server configurations performed...';
slaveLogger.log(slaveData);
