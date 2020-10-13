import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Navigation from '../output/navigation';

// This is the Navigation's fields for the QueryBundle definition...
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
    resolve(root, args, {db}) {
        return db.models.navigation.findAll({
            where: args
        });
    }
};

export default navigationFields;
