import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

import Multimedia from '../types/multimedia';
import Social from '../types/social';

// This is the Sequlize model definition (output type) of the Contact table...
const Contact = new GraphQLObjectType({
    name: 'Contact',
    description: 'This represents a Contact',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(contact) {
                    return contact.id;
                }
            },
            office: {
                type: GraphQLInt,
                resolve(contact) {
                    return contact.office;
                }
            },
            ordering: {
                type: GraphQLInt,
                resolve(contact) {
                    return contact.ordering;
                }
            },
            main: {
                type: GraphQLBoolean,
                resolve(contact) {
                    return contact.main;
                }
            },
            title: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.title;
                }
            },
            forename: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.forename;
                }
            },
            surname: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.surname;
                }
            },
            street: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.street;
                }
            },
            postal: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.postal;
                }
            },
            country: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.country;
                }
            },
            phone: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.phone;
                }
            },
            email: {
                type: GraphQLString,
                resolve(contact) {
                    return contact.email;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(contact) {
                    return contact.hidden;
                }
            },
            portrait: {
                type: Multimedia,
                resolve(contact) {
                    //console.log("typesContact/portrait:");
                    //console.log(contact.dataValues.portrait);
                    return contact.dataValues.portrait;
                }
            },
            profiles: {
                type: new GraphQLList(Social),
                resolve(contact) {
                    //console.log("typesContact/profiles:");
                    //console.log(contact.dataValues.profiles);
                    return contact.dataValues.profiles;
                }
            }
        };
    }
});

export default Contact;
