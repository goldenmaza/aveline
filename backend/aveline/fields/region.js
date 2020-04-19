import {
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Region from '../schema/region';

import db from '../db';

const regionFields = {
    type: new GraphQLList(Region),
    args: {
        id: {
            type: GraphQLInt
        },
        value: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
        },
        title: {
            type: GraphQLString
        },
        aria: {
            type: GraphQLString
        },
    },
    resolve(root, args) {
        return db.models.region.findAll({where: args});
    }
};

export default regionFields;
