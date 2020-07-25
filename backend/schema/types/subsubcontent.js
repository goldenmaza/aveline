import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from '../types/multimedia';

// This is the Sequlize model definition (output type) of the Content table (sub sub content)...
const SubSubContent = new GraphQLObjectType({
    name: 'SubSubContent',
    description: 'This represents a SubSubContent',
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
            }
        };
    }
});

export default SubSubContent;
