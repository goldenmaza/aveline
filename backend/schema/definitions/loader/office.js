import lodash from 'lodash';

//Office loaders...
export const officesThumbnailLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        office: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    if (args.box !== undefined) {
        where['box'] = args.box;
    }
    return await db.models.multimedia.findAll({
        where
    });
};

export const officesEmployeesLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        office: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    const raw = await db.models.contact.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'office');
    return keys.map(k => response[k] || []);
};

export const officesSocialsLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        office: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    const raw = await db.models.social.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'office');
    return keys.map(k => response[k] || []);
};
