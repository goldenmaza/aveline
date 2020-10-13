import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import RegionalThumbnail from './multimedia';//TODO: Rename Regional to something more generic...
import RegionalEmployee from './contact';
import RegionalSocial from './social';

// This is the Sequelize model definition (input type) of the Office table...
const InputOffice = new GraphQLObjectType({
    name: 'InputOffice',
    description: 'This represents an InputOffice',
    fields: () => {
        return {
            id: {
                type: GraphQLInt
            },
            ordering: {
                type: GraphQLInt
            },
            main: {
                type: GraphQLBoolean
            },
            region: {
                type: GraphQLString
            },
            locale: {
                type: GraphQLString
            },
            label: {
                type: GraphQLString
            },
            orgnr: {
                type: GraphQLString
            },
            hidden: {
                type: GraphQLBoolean
            },
            thumbnail: {
                type: RegionalThumbnail
            },
            employees: {
                type: new GraphQLList(RegionalEmployee)
            },
            socials: {
                type: new GraphQLList(RegionalSocial)
            }
        };
    }
});

export default InputOffice;
