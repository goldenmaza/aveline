import lodash from 'lodash';
import { prepareKeys, prepareWhere, loaderLogging } from './helpers';

//Page loaders...
export const pagesCollageLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('page', keys, data[0].args);
    const raw = await db.models.multimedia.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'page');
    loaderLogging(__filename + '(5)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

export const pagesParagraphsLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('page', keys, data[0].args);
    const raw = await db.models.content.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'page');
    loaderLogging(__filename + '(17)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};
