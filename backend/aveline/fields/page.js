import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Page from '../schema/page';

import db from '../db';

const pageFields = {
    type: new GraphQLList(Page),
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
        main: {
            type: GraphQLBoolean
        },
        box: {
            type: GraphQLBoolean
        },
        sitemap: {
            type: GraphQLBoolean
        },
        layout: {
            type: GraphQLInt
        },
        tag: {
            type: GraphQLString
        },
        label: {
            type: GraphQLString
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
        return db.models.page.findAll({where: args});
    }
};

export default pageFields;
