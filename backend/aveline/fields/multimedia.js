import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Multimedia from '../schema/multimedia';

import db from '../db';

const multimediaFields = {
    type: new GraphQLList(Multimedia),
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
        box: {
            type: GraphQLBoolean
        },
        hidden: {
            type: GraphQLBoolean
        },
        title: {
            type: GraphQLString
        },
        aria: {
            type: GraphQLString
        }
    },
    resolve(root, args) {
        return db.models.multimedia.findAll({where: args});
    }
};

export default multimediaFields;
