import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Item = new GraphQLObjectType({
    name: 'Item',
    description: 'This represents an Item',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(item) {
                    return item.id;
                }
            },
            category: {
                type: GraphQLInt,
                resolve(item) {
                    return item.category;
                }
            },
            value: {
                type: GraphQLString,
                resolve(item) {
                    return item.value;
                }
            },
            label: {
                type: GraphQLString,
                resolve(item) {
                    return item.label;
                }
            },
            description: {
                type: GraphQLString,
                resolve(item) {
                    return item.description;
                }
            },
            price: {
                type: GraphQLFloat,
                resolve(item) {
                    return item.price;
                }
            },
            src: {
                type: GraphQLString,
                resolve(item) {
                    return item.src;
                }
            },
            title: {
                type: GraphQLString,
                resolve(item) {
                    return item.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(item) {
                    return item.aria;
                }
            }
        };
    }
});

export default Item;
