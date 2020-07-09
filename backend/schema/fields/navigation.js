import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Navigation from '../types/navigation';

import db from '../db';

const navigationFields = {
    type: new GraphQLList(Navigation),
    args: {
        id: {
            type: GraphQLInt
        },
        office: {
            type: GraphQLInt
        },
        latitude: {
            type: GraphQLString
        },
        longitude: {
            type: GraphQLString
        },
        main: {
            type: GraphQLBoolean
        },
        hidden: {
            type: GraphQLBoolean
        }
    },
    resolve(root, args) {
        return db.models.navigation.findAll({where: args});
    }
};

export default navigationFields;
