import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

// This is the Sequelize model definition (output type) of the Multimedia table...
const MultimediaResourceOutput = new GraphQLObjectType({
    name: 'MultimediaResourceOutput',
    description: 'This represents a MultimediaResourceOutput',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.id;
                }
            },
            page: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.page;
                }
            },
            content: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.content;
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
            ordering: {
                type: GraphQLInt,
                resolve(multimedia) {
                    return multimedia.ordering;
                }
            },
            src: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.src;
                }
            },
            slideshow: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.slideshow;
                }
            },
            box: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.box;
                }
            },
            logo: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.logo;
                }
            },
            hidden: {
                type: GraphQLBoolean,
                resolve(multimedia) {
                    return multimedia.hidden;
                }
            },
            alt: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.alt;
                }
            },
            title: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.title;
                }
            },
            aria: {
                type: GraphQLString,
                resolve(multimedia) {
                    return multimedia.aria;
                }
            }
        };
    }
});

export default MultimediaResourceOutput;
