import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Content from '../types/content';
import ParagraphCollage from '../inputs/multimedia';
import PageParagraph from '../inputs/content';

import db from '../db';

// This is the Content's fields for the QueryBundle definition...
const contentFields = {
    type: new GraphQLList(Content),
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
        ordering: {
            type: GraphQLInt
        },
        box: {
            type: GraphQLBoolean
        },
        heading: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        },
        collage: {
            type: new GraphQLList(ParagraphCollage)
        },
        paragraphs: {
            type: new GraphQLList(PageParagraph)
        }
    },
    async resolve(root, args) {
        return await db.models.content.findAll({
            include: [{
                all: true,
                nested: true
//                model: [db.models.multimedia, db.models.content],
//                as: ["collage", "paragraphs"],
//                required: false,
//                all: true
            }],
            where: args
        });
    }
};

export default contentFields;
