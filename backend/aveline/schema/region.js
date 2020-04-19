import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Region = new GraphQLObjectType({
    name: 'Region',
    description: 'This represents a Region',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(region) {
                    return region.id;
                }
            },
            value: {
                type: GraphQLString,
                resolve(region) {
                    return region.value;
                }
            },
            label: {
                type: GraphQLString,
                resolve(region) {
                    return region.label;
                }
            },
            title: {
                type: GraphQLString,
                resolve(region) {
                    return region.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(region) {
                    return region.aria;
                }
            }
        };
    }
});

export default Region;
