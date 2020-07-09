import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Social from '../types/social';

import db from '../db';

const socialFields = {
    type: new GraphQLList(Social),
    args: {
        id: {
            type: GraphQLInt
        },
        url: {
            type: GraphQLString
        },
        media: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        }
    },
    resolve(root, args) {
        return db.models.social.findAll({where: args});
    }
};

export default socialFields;
