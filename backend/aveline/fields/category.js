import {
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Category from '../schema/category';

import db from '../db';

const categoryFields = {
    type: new GraphQLList(Category),
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
        }
    },
    resolve(root, args) {
        return db.models.category.findAll({where: args});
    }
}

export default categoryFields;
