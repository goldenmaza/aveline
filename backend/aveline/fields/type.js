import {
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Type from '../schema/type';

import db from '../db';

const typeFields = {
    type: new GraphQLList(Type),
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
        }
    },
    resolve(root, args) {
        return db.models.type.findAll({where: args});
    }
}

export default typeFields;
