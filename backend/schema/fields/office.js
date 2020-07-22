import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Office from '../types/office';
import RegionalThumbnail from '../inputs/multimedia';

import db from '../db';

// This is the Office's fields for the QueryBundle definition...
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
        },
        thumbnail: {
            type: RegionalThumbnail
        }
    },
    async resolve(root, args) {
        return await db.models.office.findAll({
            include: [{
                model: db.models.multimedia,
                as: "thumbnail",
                required: true
            }]
        });
    }
};

export default officeFields;
