import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Paragraph from '../types/content';

// This is the Sequlize model definition (output type) of the Page table...
const Page = new GraphQLObjectType({
    name: 'Page',
    description: 'This represents a Page',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(page) {
                    return page.id;
                }
            },
            page: {
                type: GraphQLInt,
                resolve(page) {
                    return page.page;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(page) {
                    return page.ordering;
                }
            },
            main: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.main;
                }
            },
            box: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.box;
                }
            },
            sitemap: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.sitemap;
                }
            },
            layout: {
                type: GraphQLInt,
                resolve(page) {
                    return page.layout;
                }
            },
            route: {
                type: GraphQLString,
                resolve(page) {
                    return page.route;
                }
            },
            label: {
                type: GraphQLString,
                resolve(page) {
                    return page.label;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(page) {
                    return page.hidden;
                }
            },
            title: {
                type: GraphQLString,
                resolve(page) {
                    return page.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(page) {
                    return page.aria;
                }
            },
            paragraphs: {
                type: new GraphQLList(Paragraph),
                resolve(page) {
                    return page.paragraphs;
                }
            }
        };
    }
});

export default Page;
