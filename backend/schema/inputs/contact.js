import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} from 'graphql';

// This is the Sequlize model definition (input type) of the Contact table...
const RegionalEmployee = new GraphQLInputObjectType({
    name: 'RegionalEmployee',
    description: 'This represents a RegionalEmployee',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            office: {
                type: GraphQLInt
            },
            ordering: {
                type: GraphQLInt
            },
            main: {
                type: GraphQLBoolean
            },
            title: {
                type: GraphQLString
            },
            forename: {
                type: GraphQLString
            },
            surname: {
                type: GraphQLString
            },
            street: {
                type: GraphQLString
            },
            postal: {
                type: GraphQLString
            },
            country: {
                type: GraphQLString
            },
            phone: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            }
        };
    }
});

export default RegionalEmployee;
