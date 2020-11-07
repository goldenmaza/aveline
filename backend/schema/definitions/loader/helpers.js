import global from '../../../app';

export const prepareKeys = (data) => {
    let keys = [];

    data.forEach(item => {
        keys.push(item.id);
    });

    return keys;
}

export const prepareWhere = (fk, keys, args) => {
    let where = {}
    const allowedArgs = process.env.ARGS_TYPES.split(',');
    where[fk] = keys;

    for (let key in args) {
        if (args.hasOwnProperty(key)) {
            if (allowedArgs.includes(key)) {
                where[key] = args[key];
            }
        }
    }

    return where;
}

export const loaderLogging = (source, keys, where, raw, response) => {
    const data = {
        mode: process.env.SERVER_MODE,
        body: `${source}: ` + '\n' + JSON.stringify(keys) + '\n' + JSON.stringify(where) + '\n' + JSON.stringify(raw) + '\n' + JSON.stringify(response) + '\n'
    }
    global.dataloaderLogger.log(data);
}
