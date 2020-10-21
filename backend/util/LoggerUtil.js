import EventEmitter from 'events';
import StreamUtil from './StreamUtil';

class LoggerUtil extends EventEmitter {
    constructor(module, mode) {
        super();
        this.moduleWriter = new StreamUtil(module, mode);
        this.on('INFO', this.info);
        this.on('DEBUG', this.debug);
        this.on('WARNING', this.warning);
        this.on('ERROR', this.error);
    }

    info(data) { // Info logging (no console logging, only text file output)...
        this.moduleWriter.queue(data);
    }

    debug(data) { // Debug logging (extended information with console logging)...
        this.complete(data);
    }

    warning(data) { // Warning logging (warning output)...
        this.complete(data);
    }

    error(data) { // Error logging (error output)...
        this.complete(data);
    }

    complete(data) {
        console.log(data);
        this.moduleWriter.queue(data);
    }

    log(data) {
        this.emit(data.mode, data.body); // this will call either info, debug etc...
    }
}

export default LoggerUtil;
