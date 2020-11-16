import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import PageThumbnailInput from './multimedia';
import PageParagraphInput from './content';

// This is the Sequelize model definition (input type) of the Page table...
const CompanyPageInput = new GraphQLObjectType({
    name: 'CompanyPageInput',
    description: 'This represents a CompanyPageInput',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            page: {
                type: GraphQLInt
            },
            ordering: {
                type: GraphQLInt
            },
            main: {
                type: GraphQLBoolean
            },
            box: {
                type: GraphQLBoolean
            },
            sitemap: {
                type: GraphQLBoolean
            },
            layout: {
                type: GraphQLInt
            },
            route: {
                type: GraphQLString
            },
            label: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            },
            title: {
                type: GraphQLString
            },
            aria: {
                type: GraphQLString
            },
            collage: {
                type: new GraphQLList(PageThumbnailInput)
            },
            paragraphs: {
                type: new GraphQLList(PageParagraphInput)
            }
        };
    }
});

export default CompanyPageInput;
