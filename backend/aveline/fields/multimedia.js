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
        content: {
            type: GraphQLInt
        },
        contact: {
            type: GraphQLInt
        },
        office: {
            type: GraphQLInt
        },
        ordering: {
            type: GraphQLInt
        },
        src: {
            type: GraphQLString
        },
        slideshow: {
            type: GraphQLBoolean
        },
        box: {
            type: GraphQLBoolean
        },
        logo: {
            type: GraphQLBoolean
        },
        hidden: {
            type: GraphQLBoolean
        },
        alt: {
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
        return db.models.multimedia.findAll({where: args});
    }
};

export default multimediaFields;
