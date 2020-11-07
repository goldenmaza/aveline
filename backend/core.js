import LoggerUtil from './util/LoggerUtil';
import cluster from 'cluster';
import os from 'os';
import dotenv from 'dotenv';
dotenv.config();

import global from './app';

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
    const port = process.env.SERVER_PORT;
    let slaveData = {
        mode: process.env.SERVER_MODE,
        body: ''
    }
    global.app.listen(port, () => {
        slaveData.body = `Application is listening at port: ${port}`
        global.slaveLogger.log(slaveData);
    });
}
