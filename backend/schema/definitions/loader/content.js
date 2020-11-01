import lodash from 'lodash';
import { prepareKeys, prepareWhere, loaderLogging } from './helpers';

//Content loaders...
export const contentCollageLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('content', keys, data[0].args);
    const raw = await db.models.multimedia.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'content');
    loaderLogging(__filename + '(5)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

export const contentParagraphsLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('content', keys, data[0].args);
    const raw = await db.models.content.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'content');
    loaderLogging(__filename + '(17)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};
