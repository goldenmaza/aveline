import LoggerUtil from './util/LoggerUtil';
import cluster from 'cluster';
import os from 'os';
import dotenv from 'dotenv';
dotenv.config();

import Express from 'express';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

if (cluster.isMaster) {
    const cpus = os.cpus();
    const masterLogger = new LoggerUtil(process.env.LOGGER_MASTER, process.pid);
    let masterData = {
        mode: process.env.SERVER_MODE,
        body: `Running NodeJS script: ${__filename}`
    }
    masterLogger.log(masterData);

    let slave = null;
    const desired_cores = parseInt(process.env.SERVER_CORES);
    const available_cores = cpus.length;
    const cluster_processes = desired_cores > available_cores ? available_cores : desired_cores;
    masterData.body = `Cores desired: ${desired_cores}`;
    masterLogger.log(masterData);
    masterData.body = `Cores available: ${available_cores}`;
    masterLogger.log(masterData);
    masterData.body = JSON.stringify(cpus, null, 2);
    masterLogger.log(masterData);

    for (let i = 0; i < cluster_processes; i++) {
        slave = cluster.fork();
        masterData.body = `Starting a cluster process: ${slave.process.pid}`;
        masterLogger.log(masterData);
    }
    masterData.body = `Cluster containing: ${cluster_processes} processes`;
    masterLogger.log(masterData);

    cluster.on('exit', (slave, code, signal) => {
        masterData.body = `Slave exit: ${slave.process.pid}, code: ${code}, signal: ${signal}`;
        masterLogger.log(masterData);
        if (process.env.SERVER_AUTOSTART) {
            slave = cluster.fork();
            masterData.body = `Starting a cluster process: ${slave.process.pid}`;
            masterLogger.log(masterData);
            masterData.body = `Cluster containing: ${Object.keys(cluster.workers).length} processes`;
            masterLogger.log(masterData);
        } else {
            masterData.body = 'Server autostart is set to FALSE, no new slaves will be created...';
            masterLogger.log(masterData);
        }
    });
} else {
    const slaveLogger = new LoggerUtil(process.env.LOGGER_SLAVE, process.pid);
    let slaveData = {
        mode: process.env.SERVER_MODE,
        body: `Running NodeJS script: ${__filename}`
    }
    slaveLogger.log(slaveData);

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

    exports.app = app;//Note: Required for the APIs...
    require('./api/graphql');
    require('./api/mail');

    slaveData.body = 'Express server configurations performed...';
    slaveLogger.log(slaveData);

    const port = process.env.SERVER_PORT;
    app.listen(port, () => {
        slaveData.body = `Application is listening at port: ${port}`
        slaveLogger.log(slaveData);
    });
}
