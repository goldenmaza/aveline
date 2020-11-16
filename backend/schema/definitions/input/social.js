import {
    GraphQLBoolean,
    GraphQLInputObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

// This is the Sequelize model definition (input type) of the Social table...
const ContactSocialInput = new GraphQLInputObjectType({
    name: 'ContactSocialInput',
    description: 'This represents a ContactSocialInput',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            contact: {
                type: GraphQLInt
            },
            office: {
                type: GraphQLInt
            },
            url: {
                type: GraphQLString
            },
            media: {
                type: GraphQLString
            },
            label: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            }
        };
    }
});

export default ContactSocialInput;
