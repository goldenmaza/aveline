import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

// This is the Sequelize model definition (output type) of the Social table...
const Social = new GraphQLObjectType({
    name: 'Social',
    description: 'This represents a Social',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(social) {
                    return social.id;
                }
            },
            contact: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.contact;
                }
            },
            office: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.office;
                }
            },
            url: {
                type: GraphQLString,
                resolve(social) {
                    return social.url;
                }
            },
            media: {
                type: GraphQLString,
                resolve(social) {
                    return social.media;
                }
            },
            label: {
                type: GraphQLString,
                resolve(social) {
                    return social.label;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(social) {
                    return social.hidden;
                }
            }
        };
    }
});

export default Social;
