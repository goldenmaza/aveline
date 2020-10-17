import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import Multimedia from './multimedia';
import Contact from './contact';
import Social from './social';

// This is the Sequelize model definition (output type) of the Office table...
const Office = new GraphQLObjectType({
    name: 'Office',
    description: 'This represents an Office',
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
            },
            thumbnail: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: Multimedia,
                resolve(parent, args, {officesThumbnailLoader}, info) {
                    const data = {
                        id: parent.id,
                        args: args
                    };
                    return officesThumbnailLoader.load(data);
                }
            },
            employees: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Contact),
                resolve(parent, args, {officesEmployeesLoader}, info) {
                    const data = {
                        id: parent.id,
                        args: args
                    };
                    return officesEmployeesLoader.load(data);
                }
            },
            socials: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Social),
                resolve(parent, args, {officesSocialsLoader}, info) {
                    const data = {
                        id: parent.id,
                        args: args
                    };
                    return officesSocialsLoader.load(data);
                }
            }
        };
    }
});

export default Office;
