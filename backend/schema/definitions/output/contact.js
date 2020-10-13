import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

import Multimedia from './multimedia';
import Social from './social';

// This is the Sequelize model definition (output type) of the Contact table...
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
            portraits: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Multimedia),
                async resolve(parent, args, {db}) {
                    let where = {
                        contact: parent.dataValues.id
                    };
                    if (args.hidden !== undefined) {
                        where['hidden'] = args.hidden;
                    }
                    return await db.models.multimedia.findAll({
                        where
                    });
                }
            },
            profiles: {
                args: {
                    hidden: {
                        type: GraphQLBoolean
                    }
                },
                type: new GraphQLList(Social),
                async resolve(parent, args, {db}) {
                    let where = {
                        contact: parent.dataValues.id
                    };
                    if (args.hidden !== undefined) {
                        where['hidden'] = args.hidden;
                    }
                    return await db.models.social.findAll({
                        where
                    });
                }
            }
        };
    }
});

export default Contact;
