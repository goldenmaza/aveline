import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Item from '../schema/item';

import db from '../db';

const itemFields = {
    type: new GraphQLList(Item),
    args: {
        id: {
            type: GraphQLInt
        },
        category: {
            type: GraphQLInt
        },
        value: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        src: {
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
        return db.models.item.findAll({where: args});
    }
};

export default itemFields;
