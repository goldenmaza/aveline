import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Contact from '../types/contact';
import RegionalThumbnail from '../inputs/multimedia';//TODO: Rename Regional to something more generic...
import RegionalSocial from '../inputs/social';

import db from '../db';

// This is the Contact's fields for the QueryBundle definition...
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
        portraits: {
            type: new GraphQLList(RegionalThumbnail)
        },
        profiles: {
            type: new GraphQLList(RegionalSocial)
        }
    },
    async resolve(root, args) {
        return await db.models.contact.findAll({
            include: [{
                all: true,
                nested: true
//                model: [db.models.multimedia, db.models.social],
//                as: ["portraits", "profiles"],
//                required: false,
//                all: true
            }],
            where: args
        });
    }
};

export default contactFields;
