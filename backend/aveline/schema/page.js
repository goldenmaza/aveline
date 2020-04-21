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
            label: {
                type: GraphQLString,
                resolve(page) {
                    return page.label;
                }
            },
            layout: {
                type: GraphQLInt,
                resolve(page) {
                    return page.layout;
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
