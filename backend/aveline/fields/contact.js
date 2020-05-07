import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Contact from '../schema/contact';

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
        }
    },
    resolve(root, args) {
        return db.models.contact.findAll({where: args});
    }
};

export default contactFields;
