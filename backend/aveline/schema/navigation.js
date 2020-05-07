import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Navigation = new GraphQLObjectType({
    name: 'Navigation',
    description: 'This represents a Navigation',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(navigation) {
                    return navigation.id;
                }
            },
            office: {
                type: GraphQLInt,
                resolve(navigation) {
                    return navigation.office;
                }
            },
            latitude: {
                type: GraphQLString,
                resolve(navigation) {
                    return navigation.latitude;
                }
            },
            longitude: {
                type: GraphQLString,
                resolve(navigation) {
                    return navigation.longitude;
                }
            },
            main: {
                type: GraphQLBoolean,
                resolve(navigation) {
                    return navigation.main;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(navigation) {
                    return navigation.hidden;
                }
            }
        };
    }
});

export default Navigation;
