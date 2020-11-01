import lodash from 'lodash';
import { prepareKeys, prepareWhere, loaderLogging } from './helpers';

// Contact loaders...
export const contactPortraitsLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('contact', keys, data[0].args);
    const raw = await db.models.multimedia.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'contact');
    loaderLogging(__filename + '(5)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

export const contactProfilesLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('contact', keys, data[0].args);
    const raw = await db.models.social.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'contact');
    loaderLogging(__filename + '(17)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};
