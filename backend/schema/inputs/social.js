import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

// This is the Sequlize model definition (input type) of the Social table...
const RegionalSocial = new GraphQLInputObjectType({
    name: 'RegionalSocial',
    description: 'This represents a RegionalSocial',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            contact: {
                type: GraphQLInt
            },
            office: {
                type: GraphQLInt
            },
            url: {
                type: GraphQLString
            },
            media: {
                type: GraphQLString
            },
            label: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            }
        };
    }
});

export default RegionalSocial;
