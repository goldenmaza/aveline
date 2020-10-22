import EventEmitter from 'events';
import StreamUtil from './StreamUtil';

class LoggerUtil extends EventEmitter {
    constructor(module) {
        super();
        this.infoWriter = new StreamUtil(module, 'INFO');
        this.on('INFO', this.info);
        this.debugWriter = new StreamUtil(module, 'DEBUG');
        this.on('DEBUG', this.debug);
        this.warningWriter = new StreamUtil(module, 'WARNING');
        this.on('WARNING', this.warning);
        this.errorWriter = new StreamUtil(module, 'ERROR');
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
}

export default LoggerUtil;
