import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import RegionalThumbnail from './multimedia';
import SubSubParagraph from './subsubcontent';

// This is the Sequelize model definition (input type) of the Content table (sub content)...
const SubPageParagraph = new GraphQLInputObjectType({
    name: 'SubPageParagraph',
    description: 'This represents a SubPageParagraph',
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
            },
            subsubparagraphs: {
                type: new GraphQLList(SubSubParagraph)
            }
        };
    }
});

export default SubPageParagraph;
