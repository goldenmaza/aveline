import lodash from 'lodash';

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
    return keys.map(k => response[k] || []);
};
