import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

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
            layout: {
                type: GraphQLInt,
                resolve(page) {
                    return page.layout;
                }
            },
            tag: {
                type: GraphQLString,
                resolve(page) {
                    return page.tag;
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
            }
        };
    }
});

export default Page;
