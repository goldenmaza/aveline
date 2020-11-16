import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import ParagraphImageInput from './multimedia';
import SubSubParagraphInput from './subsubcontent';

// This is the Sequelize model definition (input type) of the Content table (sub content)...
const SubPageContentInput = new GraphQLInputObjectType({
    name: 'SubPageContentInput',
    description: 'This represents a SubPageContentInput',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            page: {
                type: GraphQLInt
            },
            content: {
                type: GraphQLInt
            },
            ordering: {
                type: GraphQLInt
            },
            box: {
                type: GraphQLBoolean
            },
            heading: {
                type: GraphQLString
            },
            text: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            },
            collage: {
                type: new GraphQLList(ParagraphImageInput)
            },
            subsubparagraphs: {
                type: new GraphQLList(SubSubParagraphInput)
            }
        };
    }
});

export default SubPageContentInput;
