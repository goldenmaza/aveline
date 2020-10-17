import lodash from 'lodash';

// Contact loaders...
export const contactPortraitsLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        contact: keys
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
    const response = lodash.groupBy(raw, 'contact');
    return keys.map(k => response[k] || []);
};

export const contactProfilesLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        contact: keys
    };
    const args = data[0].args;
    if (args.hidden !== undefined) {
        where['hidden'] = args.hidden;
    }
    const raw = await db.models.social.findAll({
        raw: true,
        where
    });
    const response = lodash.groupBy(raw, 'contact');
    return keys.map(k => response[k] || []);
};
