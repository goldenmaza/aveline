import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import ContactThumbnailInput from './multimedia';
import ContactSocialInput from './social';

// This is the Sequelize model definition (input type) of the Contact table...
const OfficeContactInput = new GraphQLInputObjectType({
    name: 'OfficeContactInput',
    description: 'This represents an OfficeContactInput',
    fields: () => {
        return {
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
                type: new GraphQLList(ContactThumbnailInput)
            },
            profiles: {
                type: new GraphQLList(ContactSocialInput)
            }
        };
    }
});

export default OfficeContactInput;
