import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from '../types/multimedia';
import SubParagraph from '../types/subcontent';

// This is the Sequlize model definition (output type) of the Content table (top content)...
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
                type: new GraphQLList(Multimedia),
                resolve(content) {
                    return content.collage;
                }
            },
            subparagraphs: {
                type: new GraphQLList(SubParagraph),
                resolve(content) {
                    return content.subparagraphs;
                }
            }
        };
    }
});

export default Content;
