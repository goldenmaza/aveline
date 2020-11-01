import lodash from 'lodash';
import { prepareKeys, prepareWhere, loaderLogging } from './helpers';

//Office loaders...
export const officesThumbnailLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('office', keys, data[0].args);
    const raw = await db.models.multimedia.findAll({
        raw: true,
        where
    });
    const response = '<IGNORE - RAW NOT PROCESSED>';
    loaderLogging(__filename + '(5)', keys, where, raw, response);
    return raw;
};

export const officesEmployeesLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('office', keys, data[0].args);
    const raw = await db.models.contact.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'office');
    loaderLogging(__filename + '(17)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};

export const officesSocialsLoaderHandler = async (data, db) => {
    const keys = prepareKeys(data);
    const where = prepareWhere('office', keys, data[0].args);
    const raw = await db.models.social.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'office');
    loaderLogging(__filename + '(29)', keys, where, raw, response);
    return keys.map(k => response[k] || []);
};
