import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Content from '../schema/content';

import db from '../db';

const contentFields = {
    type: new GraphQLList(Content),
    args: {
        id: {
            type: GraphQLInt
        },
        page: {
            type: GraphQLInt
        },
        ordering: {
            type: GraphQLInt
        },
        header: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        }
    },
    resolve(root, args) {
        return db.models.content.findAll({where: args});
    }
};

export default contentFields;
