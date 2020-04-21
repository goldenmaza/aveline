import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Multimedia = new GraphQLObjectType({
    name: 'Multimedia',
    description: 'This represents a Multimedia',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.id;
                }
            },
            page: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.page;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.ordering;
                }
            },
            box: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.box;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.hidden;
                }
            },
            title: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.aria;
                }
            }
        };
    }
});

export default Multimedia;
