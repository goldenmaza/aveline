import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import CompanyPageOutput from '../output/page';
import MultimediaResourceInput from '../input/multimedia';
import PageContentInput from '../input/content';

// This is the Page's fields for the QueryBundle definition...
const pageFields = {
    type: new GraphQLList(CompanyPageOutput),
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
        collage: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(MultimediaResourceInput)
        },
        paragraphs: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                },
                box: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(PageContentInput)
        }
    },
    async resolve(parent, args, {db}) {
        return await db.models.page.findAll({
            where: args
        });
    }
};

export default pageFields;
