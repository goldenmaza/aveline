import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import RegionalThumbnail from './multimedia';//TODO: Rename Regional to something more generic...

// This is the Sequelize model definition (input type) of the Content table (sub sub content)...
const SubSubPageParagraph = new GraphQLInputObjectType({
    name: 'SubSubPageParagraph',
    description: 'This represents a SubSubPageParagraph',
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
                type: new GraphQLList(RegionalThumbnail)
            }
        };
    }
});

export default SubSubPageParagraph;
