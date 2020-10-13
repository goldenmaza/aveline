import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Content from '../output/content';
import ParagraphCollage from '../input/multimedia';
import PageParagraph from '../input/content';

import db from '../../db';

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
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(ParagraphCollage)
        },
        paragraphs: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(PageParagraph)
        }
    },
    async resolve(parent, args) {
        return await db.models.content.findAll({
            where: args
        });
    }
};

export default contentFields;
