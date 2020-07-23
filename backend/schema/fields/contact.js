import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Contact from '../types/contact';
import RegionalThumbnail from '../inputs/multimedia';

import db from '../db';

const contactFields = {
    type: new GraphQLList(Contact),
    args: {
        id: {
            type: GraphQLInt
        },
        office: {
            type: GraphQLInt
        },
        ordering: {
            type: GraphQLInt
        },
        main: {
            type: GraphQLBoolean
        },
        title: {
            type: GraphQLString
        },
        forename: {
            type: GraphQLString
        },
        surname: {
            type: GraphQLString
        },
        street: {
            type: GraphQLString
        },
        postal: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        },
        portrait: {
            type: RegionalThumbnail
        }
    },
    async resolve(root, args) {
        return await db.models.contact.findAll({
            include: [{
                all: true,
                nested: true
//                model: [db.models.multimedia],
//                as: ["portrait"],
//                required: false,
//                all: true
            }]
        });
    }
};

export default contactFields;
