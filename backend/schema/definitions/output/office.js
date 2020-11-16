import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import OfficeThumbnailOutput from './multimedia';
import OfficeEmployeeOutput from './contact';
import OfficeSocialOutput from './social';

// This is the Sequelize model definition (output type) of the Office table...
const CompanyOfficeOutput = new GraphQLObjectType({
    name: 'CompanyOfficeOutput',
    description: 'This represents a CompanyOfficeOutput',
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
                    },
                    box: {
                        type: GraphQLBoolean
                    }
                },
                type: OfficeThumbnailOutput,
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
                type: new GraphQLList(OfficeEmployeeOutput),
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
                type: new GraphQLList(OfficeSocialOutput),
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

export default CompanyOfficeOutput;
