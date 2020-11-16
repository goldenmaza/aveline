import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

// This is the Sequelize model definition (input type) of the Multimedia table...
const MultimediaResourceInput = new GraphQLInputObjectType({
    name: 'MultimediaResourceInput',
    description: 'This represents a MultimediaResourceInput',
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

export default MultimediaResourceInput;
