import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from './multimedia';
import SubParagraph from './subcontent';

import db from '../../db';

// This is the Sequelize model definition (output type) of the Content table (top content)...
const Content = new GraphQLObjectType({
    name: 'Content',
    description: 'This represents a Content',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(content) {
                    return content.id;
                }
            },
            page: {
                type: GraphQLInt,
                resolve(content) {
                    return content.page;
                }
            },
            content: {
                type: GraphQLInt,
                resolve(content) {
                    return content.content;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(content) {
                    return content.ordering;
                }
            },
            box: {
                type: GraphQLBoolean,
                resolve(content) {
                    return content.box;
                }
            },
            heading: {
                type: GraphQLString,
                resolve(content) {
                    return content.heading;
                }
            },
            text: {
                type: GraphQLString,
                resolve(content) {
                    return content.text;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(content) {
                    return content.hidden;
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
                        content: parent.dataValues.id
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
            subparagraphs: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    },
                    box: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(SubParagraph),
                async resolve(parent, args) {
                    let where = {
                        content: parent.dataValues.id
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

export default Content;
