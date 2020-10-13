import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from './multimedia';
import SubSubParagraph from './subsubcontent';

// This is the Sequelize model definition (output type) of the Content table (sub content)...
const SubContent = new GraphQLObjectType({
    name: 'SubContent',
    description: 'This represents a SubContent',
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
                    }
                },
                type: new GraphQLList(Multimedia),
                async resolve(parent, args, {db}) {
                    return await db.models.multimedia.findAll({
                        where: {
                            content: parent.dataValues.id,
                            hidden: args.hidden
                        }
                    });
                }
            },
            subsubparagraphs: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(SubSubParagraph),
                async resolve(parent, args, {db}) {
                    return await db.models.content.findAll({
                        where: {
                            content: parent.dataValues.id,
                            hidden: args.hidden
                        }
                    });
                }
            }
        };
    }
});

export default SubContent;
