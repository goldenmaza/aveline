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
    where[fk] = keys;

    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    if (args.box !== undefined) {
        where['box'] = args.box;
    }
    if (args.main !== undefined) {
        where['main'] = args.main;
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
