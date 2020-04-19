import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Model from '../schema/model';

import db from '../db';

const modelFields = {
    type: new GraphQLList(Model),
    args: {
        id: {
            type: GraphQLInt
        },
        type: {
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
        return db.models.model.findAll({where: args});
    }
};

export default modelFields;
