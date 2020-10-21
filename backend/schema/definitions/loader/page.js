import lodash from 'lodash';
import global from '../../../app';

//Page loaders...
export const pagesCollageLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        page: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    if (args.box !== undefined) {
        where['box'] = args.box;
    }
    const raw = await db.models.multimedia.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'page');
    loader_logging(__filename + ':5', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

export const pagesParagraphsLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        page: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    if (args.box !== undefined) {
        where['box'] = args.box;
    }
    const raw = await db.models.content.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'page');
    loader_logging(__filename + ':29', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

function loader_logging(fun, keys, where, raw, response) {
    const data = {
        mode: process.env.SERVER_MODE,
        body: `PageHandler (${fun}): ` + '\n' + JSON.stringify(keys) + '\n' + JSON.stringify(where) + '\n' + JSON.stringify(raw) + '\n' + JSON.stringify(response) + '\n'
    }
    global.dataloaderLogger.log(data);
}
