import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Model = new GraphQLObjectType({
    name: 'Model',
    description: 'This represents a Model',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(model) {
                    return model.id;
                }
            },
            type: {
                type: GraphQLInt,
                resolve(model) {
                    return model.type;
                }
            },
            value: {
                type: GraphQLString,
                resolve(model) {
                    return model.value;
                }
            },
            label: {
                type: GraphQLString,
                resolve(model) {
                    return model.label;
                }
            },
            description: {
                type: GraphQLString,
                resolve(model) {
                    return model.description;
                }
            },
            price: {
                type: GraphQLFloat,
                resolve(model) {
                    return model.price;
                }
            },
            src: {
                type: GraphQLString,
                resolve(model) {
                    return model.src;
                }
            },
            title: {
                type: GraphQLString,
                resolve(model) {
                    return model.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(model) {
                    return model.aria;
                }
            }
        };
    }
});

export default Model;
