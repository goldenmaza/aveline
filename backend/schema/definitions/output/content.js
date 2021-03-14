import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import ParagraphImageOutput from './multimedia';
import SubParagraphOutput from './subcontent';

// This is the Sequelize model definition (output type) of the Content table (top content)...
const PageContentOutput = new GraphQLObjectType({
    name: 'PageContentOutput',
    description: 'This represents a PageContentOutput',
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
            sitemap: {
                type: GraphQLBoolean,
                resolve(page) {
                    return content.sitemap;
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
                type: new GraphQLList(ParagraphImageOutput),
                resolve(parent, args, {contentCollageLoader}, info) {
                    const data = {
                        id: parent.id,
                        args: args
                    };
                    return contentCollageLoader.load(data);
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
                type: new GraphQLList(SubParagraphOutput),
                resolve(parent, args, {contentParagraphsLoader}, info) {
                    const data = {
                        id: parent.id,
                        args: args
                    };
                    return contentParagraphsLoader.load(data);
                }
            }
        };
    }
});

export default PageContentOutput;
