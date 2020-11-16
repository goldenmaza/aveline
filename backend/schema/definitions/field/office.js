import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import CompanyOfficeOutput from '../output/office';
import MultimediaResourceInput from '../input/multimedia';
import OfficeContactInput from '../input/contact';
import ContactSocialInput from '../input/social';

// This is the Office's fields for the QueryBundle definition...
const officeFields = {
    type: new GraphQLList(CompanyOfficeOutput),
    args: {
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
            args: {
                hidden: {
                    type: GraphQLBoolean
                },
                box: {
                    type: GraphQLBoolean
                }
            },
            type: MultimediaResourceInput
        },
        employees: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(OfficeContactInput)
        },
        socials: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(ContactSocialInput)
        }
    },
    async resolve(root, args, {db}) {
        return await db.models.office.findAll({
            where: args
        });
    }
};

export default officeFields;
