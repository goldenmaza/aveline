import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Contact from '../output/contact';
import RegionalThumbnail from '../input/multimedia';//TODO: Rename Regional to something more generic...
import RegionalSocial from '../input/social';

// This is the Contact's fields for the QueryBundle definition...
const contactFields = {
    type: new GraphQLList(Contact),
    args: {
        id: {
            type: GraphQLInt
        },
        office: {
            type: GraphQLInt
        },
        ordering: {
            type: GraphQLInt
        },
        main: {
            type: GraphQLBoolean
        },
        title: {
            type: GraphQLString
        },
        forename: {
            type: GraphQLString
        },
        surname: {
            type: GraphQLString
        },
        street: {
            type: GraphQLString
        },
        postal: {
            type: GraphQLString
        },
        country: {
            type: GraphQLString
        },
        phone: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        hidden: {
            type: GraphQLBoolean
        },
        portraits: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                },
                box: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(RegionalThumbnail)
        },
        profiles: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(RegionalSocial)
        }
    },
    async resolve(parent, args, {db}) {
        return await db.models.contact.findAll({
            where: args
        });
    }
};

export default contactFields;
