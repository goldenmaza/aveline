import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from 'graphql';

// This is the Sequlize model definition (input type) of the Multimedia table...
const RegionalThumbnail = new GraphQLInputObjectType({
    name: 'RegionalThumbnail',
    description: 'This represents a RegionalThumbnail',
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
            contact: {
                type: GraphQLInt
            },
            office: {
                type: GraphQLInt
            },
            ordering: {
                type: GraphQLInt
            },
            src: {
                type: GraphQLString
            },
            slideshow: {
                type: GraphQLBoolean
            },
            box: {
                type: GraphQLBoolean
            },
            logo: {
                type: GraphQLBoolean
            },
            hidden: {
                type: GraphQLBoolean
            },
            alt: {
                type: GraphQLString
            },
            title: {
                type: GraphQLString
            },
            aria: {
                type: GraphQLString
            }
        };
    }
});

export default RegionalThumbnail;
