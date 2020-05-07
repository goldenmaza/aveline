import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

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
            }
        };
    }
});

export default Contact;
