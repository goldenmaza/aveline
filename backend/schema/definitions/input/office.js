import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import OfficeThumbnailInput from './multimedia';
import OfficeEmployeeInput from './contact';
import OfficeSocialInput from './social';

// This is the Sequelize model definition (input type) of the Office table...
const CompanyOfficeInput = new GraphQLObjectType({
    name: 'CompanyOfficeInput',
    description: 'This represents a CompanyOfficeInput',
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
                type: OfficeThumbnailInput
            },
            employees: {
                type: new GraphQLList(OfficeEmployeeInput)
            },
            socials: {
                type: new GraphQLList(OfficeSocialInput)
            }
        };
    }
});

export default CompanyOfficeInput;
