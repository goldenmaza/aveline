import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import RegionalThumbnail from '../inputs/multimedia';
import RegionalSocial from '../inputs/social';

// This is the Sequelize model definition (input type) of the Contact table...
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
            },
            portraits: {
                type: new GraphQLList(RegionalThumbnail)
            },
            profiles: {
                type: new GraphQLList(RegionalSocial)
            }
        };
    }
});

export default RegionalEmployee;
