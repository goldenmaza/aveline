import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Type = new GraphQLObjectType({
    name: 'Type',
    description: 'This represents a Type',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(type) {
                    return type.id;
                }
            },
            value: {
                type: GraphQLString,
                resolve(type) {
                    return type.value;
                }
            },
            label: {
                type: GraphQLString,
                resolve(type) {
                    return type.label;
                }
            },
            title: {
                type: GraphQLString,
                resolve(type) {
                    return type.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(type) {
                    return type.aria;
                }
            }
        };
    }
});

export default Type;
