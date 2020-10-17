import lodash from 'lodash';

//Content loaders...
export const contentCollageLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        content: keys
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
    const response = lodash.groupBy(raw, 'content');
    return keys.map(k => response[k] || []);
};

export const contentParagraphsLoaderHandler = async (data, db) => {
    let keys = [];
    data.forEach(item => {
        keys.push(item.id);
    });
    let where = {
        content: keys
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
    const response = lodash.groupBy(raw, 'content');
    return keys.map(k => response[k] || []);
};
