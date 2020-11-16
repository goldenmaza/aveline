import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import ParagraphImageInput from './multimedia';

// This is the Sequelize model definition (input type) of the Content table (sub sub content)...
const SubSubPageContentInput = new GraphQLInputObjectType({
    name: 'SubSubPageContentInput',
    description: 'This represents a SubSubPageContentInput',
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
            }
        };
    }
});

export default SubSubPageContentInput;
