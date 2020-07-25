import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from '../types/multimedia';
import SubSubParagraph from '../types/subsubcontent';

// This is the Sequlize model definition (output type) of the Content table (sub content)...
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
                type: new GraphQLList(Multimedia),
                resolve(content) {
                    return content.collage;
                }
            },
            subsubparagraphs: {
                type: new GraphQLList(SubSubParagraph),
                resolve(content) {
                    return content.subsubparagraphs;
                }
            }
        };
    }
});

export default SubContent;
