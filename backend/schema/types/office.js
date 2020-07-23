import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import { resolver } from 'graphql-sequelize';

import Multimedia from '../types/multimedia';
import Contact from '../types/contact';
import Social from '../types/social';

// This is the Sequlize model definition (output type) of the Office table...
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
                type: Multimedia,
                resolve(office) {
                    //console.log("typesOffice/thumbnail:");
                    //console.log(office.thumbnail);
                    return office.thumbnail;
                }
            },
            employees: {
                type: new GraphQLList(Contact),
                resolve(office) {
                    //console.log("typesOffice/employees:");
                    //console.log(office.employees);
                    return office.employees;
                }
            },
            socials: {
                type: new GraphQLList(Social),
                resolve(office) {
                    //console.log("typesOffice/socials:");
                    //console.log(office.socials);
                    return office.socials;
                }
            }
        };
    }
});

export default Office;
