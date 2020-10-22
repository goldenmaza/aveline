import fs from 'fs';
import path from 'path';

class StreamUtil {
    constructor(module, mode) {
        this.directory = `logging/${module}/${mode}/`;
        this.filename = this.generateFilename() + '.txt';
        this.filepath = this.directory + this.filename;
        this.ensureDirectoryExistence(this.filepath);
        this.writeStream = fs.createWriteStream(this.filepath);
        this.queuedItems = [];
        this.queueInterval = setInterval(() => {
            if (this.queuedItems.length > 0) {
                this.write(this.queuedItems.shift());
            }
        }, 1000);
    }

    ensureDirectoryExistence(filepath) {
        const dirname = path.dirname(filepath);
        if (fs.existsSync(dirname)) {
            return true;
        }
        this.ensureDirectoryExistence(dirname);
        fs.mkdirSync(dirname);
    }

    generateFilename() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ((date.getMonth() + 1) < 10 ? '0' : '') + date.getMonth() + 1;
        const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
        const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        return `${year}${month}${day}_${hours}${minutes}${seconds}`;
    }

    generateOutputDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = ((date.getMonth() + 1) < 10 ? '0' : '') + date.getMonth() + 1;
        const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
        const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
        const milliseconds = date.getMilliseconds();
        return `${year}-${month}-${day} | ${hours}:${minutes}:${seconds}.${milliseconds}`;
    }

    queue(data) {
        this.queuedItems.push(data);
    }

    write(data) {
        this.writeStream.write(`============= ${this.generateOutputDate()} =============\n`);
        this.writeStream.write(data + '\n');
    }
}

export default StreamUtil;
