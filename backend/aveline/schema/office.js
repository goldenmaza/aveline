import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Office = new GraphQLObjectType({
    name: 'Office',
    description: 'This represents a Office',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(office) {
                    return office.id;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(office) {
                    return office.ordering;
                }
            },
            main: {
                type: GraphQLBoolean,
                resolve(office) {
                    return office.main;
                }
            },
            region: {
                type: GraphQLString,
                resolve(office) {
                    return office.region;
                }
            },
            locale: {
                type: GraphQLString,
                resolve(office) {
                    return office.locale;
                }
            },
            label: {
                type: GraphQLString,
                resolve(office) {
                    return office.label;
                }
            },
            orgnr: {
                type: GraphQLString,
                resolve(office) {
                    return office.orgnr;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(office) {
                    return office.hidden;
                }
            }
        };
    }
});

export default Office;
