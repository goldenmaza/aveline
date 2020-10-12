import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from '../types/multimedia';
import Paragraph from '../types/content';

import db from '../db';

// This is the Sequelize model definition (output type) of the Page table...
const Page = new GraphQLObjectType({
    name: 'Page',
    description: 'This represents a Page',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(page) {
                    return page.id;
                }
            },
            page: {
                type: GraphQLInt,
                resolve(page) {
                    return page.page;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(page) {
                    return page.ordering;
                }
            },
            main: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.main;
                }
            },
            box: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.box;
                }
            },
            sitemap: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.sitemap;
                }
            },
            layout: {
                type: GraphQLInt,
                resolve(page) {
                    return page.layout;
                }
            },
            route: {
                type: GraphQLString,
                resolve(page) {
                    return page.route;
                }
            },
            label: {
                type: GraphQLString,
                resolve(page) {
                    return page.label;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.hidden;
                }
            },
            title: {
                type: GraphQLString,
                resolve(page) {
                    return page.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(page) {
                    return page.aria;
                }
            },
            collage: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    },
                    box: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Multimedia),
                async resolve(parent, args) {
                    let where = {
                        page: parent.dataValues.id
                    };
                    if (args.hidden !== undefined) {
                        where['hidden'] = args.hidden;
                    }
                    if (args.box !== undefined) {
                        where['box'] = args.box;
                    }
                    return await db.models.multimedia.findAll({
                        where
                    });
                }
            },
            paragraphs: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    },
                    box: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Paragraph),
                async resolve(parent, args) {
                    let where = {
                        page: parent.dataValues.id
                    };
                    if (args.hidden !== undefined) {
                        where['hidden'] = args.hidden;
                    }
                    if (args.box !== undefined) {
                        where['box'] = args.box;
                    }
                    return await db.models.content.findAll({
                        where
                    });
                }
            }
        };
    }
});

export default Page;
