import {
    GraphQLBoolean,
    GraphQLChar,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Office from '../schema/office';

import db from '../db';

const officeFields = {
    type: new GraphQLList(Office),
    args: {
        id: {
            type: GraphQLInt
        },
        ordering: {
            type: GraphQLInt
        },
        main: {
            type: GraphQLBoolean
        },
        region: {
            type: GraphQLString
        },
        locale: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
        },
        orgnr: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        }
    },
    resolve(root, args) {
        return db.models.office.findAll({where: args});
    }
};

export default officeFields;
