import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import PageThumbnail from './multimedia';
import Paragraph from './content';

// This is the Sequelize model definition (input type) of the Page table...
const InputPage = new GraphQLObjectType({
    name: 'InputPage',
    description: 'This represents an InputPage',
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
                type: new GraphQLList(PageThumbnail)
            },
            paragraphs: {
                type: new GraphQLList(Paragraph)
            }
        };
    }
});

export default InputPage;
