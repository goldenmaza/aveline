import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Page from '../types/page';
import PageParagraph from '../inputs/content';

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
        route: {
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
        },
        paragraphs: {
            type: new GraphQLList(PageParagraph)
        }
    },
    async resolve(root, args) {
        return await db.models.page.findAll({
            include: [{
                all: true,
                nested: true
//                model: [db.models.content],
//                as: ["paragraphs"],
//                required: false,
//                all: true
            }],
            where: args
        });
    }
};

export default pageFields;
