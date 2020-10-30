import fs from 'fs';

class StreamUtil {
    constructor(dir, mode) {
        this.writeStream = null;
        this.directory = `${dir}/${mode}/`;
        this.queuedItems = [];
        this.queueInterval = setInterval(() => {
            if (this.queuedItems.length > 0) {
                if (this.writeStream === null) {
                    this.filename = this.generateFilename() + process.env.SERVER_LOGGING_EXTENSION;
                    this.filepath = this.directory + this.filename;
                    this.writeStream = fs.createWriteStream(this.filepath);
                }
                this.write(this.queuedItems.shift());
            }
        }, 1000);
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
