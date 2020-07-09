import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Multimedia = new GraphQLObjectType({
    name: 'Multimedia',
    description: 'This represents a Multimedia',
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
                resolve(content) {
                    return content.content;
                }
            },
            contact: {
                type: GraphQLInt,
                resolve(content) {
                    return content.contact;
                }
            },
            office: {
                type: GraphQLInt,
                resolve(content) {
                    return content.office;
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

export default Multimedia;
