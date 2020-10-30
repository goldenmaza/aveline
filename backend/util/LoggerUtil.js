import EventEmitter from 'events';
import StreamUtil from './StreamUtil';
import fs from 'fs';

class LoggerUtil extends EventEmitter {
    constructor(module, pid) {
        super();
        this.directory = `logging/${module}/${pid}/`;
        this.createDirectory(this.directory, 'INFO');
        this.infoWriter = new StreamUtil(this.directory, 'INFO');
        this.on('INFO', this.info);
        this.createDirectory(this.directory, 'DEBUG');
        this.debugWriter = new StreamUtil(this.directory, 'DEBUG');
        this.on('DEBUG', this.debug);
        this.createDirectory(this.directory, 'WARNING');
        this.warningWriter = new StreamUtil(this.directory, 'WARNING');
        this.on('WARNING', this.warning);
        this.createDirectory(this.directory, 'ERROR');
        this.errorWriter = new StreamUtil(this.directory, 'ERROR');
        this.on('ERROR', this.error);
    }

    info(data) { // Info logging (no console logging, only text file output)...
        this.infoWriter.queue(data);
    }

    debug(data) { // Debug logging (extended information with console logging)...
        console.log(data);
        this.debugWriter.queue(data);
    }

    warning(data) { // Warning logging (warning output)...
        this.warningWriter.queue(data);
    }

    error(data) { // Error logging (error output)...
        console.log(data);
        this.errorWriter.queue(data);
    }

    log(data) {
        this.emit(data.mode, data.body); // this will call either info, debug etc...
    }

    createDirectory(directory, mode) {
        fs.mkdir(directory + mode, { recursive: true }, (error) => {
            let createDirectoryData = {
                mode: process.env.SERVER_MODE,
                body: `Directory was successfully created: ${directory + mode}`
            }
            if (error === null) {
                this.log(createDirectoryData);
            } else {
                createDirectoryData.mode = 'ERROR';
                createDirectoryData.body = `Failure in ensuring directory: ${directory}, mode: ${mode}, error: ${JSON.stringify(error, null, 2)}`;
                this.log(createDirectoryData);
            }
        });
    }
}

export default LoggerUtil;
