import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import ParagraphImageInput from './multimedia';
import SubParagraphInput from './subcontent';

// This is the Sequelize model definition (input type) of the Content table (top content)...
const PageContentInput = new GraphQLInputObjectType({
    name: 'PageContentInput',
    description: 'This represents a PageContentInput',
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
            sitemap: {
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
            paragraphs: {
                type: new GraphQLList(SubParagraphInput)
            }
        };
    }
});

export default PageContentInput;
