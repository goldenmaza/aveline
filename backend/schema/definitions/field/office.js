import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList,
    GraphQLString
} from 'graphql';

import Office from '../output/office';
import RegionalThumbnail from '../input/multimedia';//TODO: Rename Regional to something more generic...
import RegionalEmployee from '../input/contact';
import RegionalSocial from '../input/social';

// This is the Office's fields for the QueryBundle definition...
const officeFields = {
    type: new GraphQLList(Office),
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
            type: RegionalThumbnail
        },
        employees: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(RegionalEmployee)
        },
        socials: {
            args: {
                hidden: {
                    type: GraphQLBoolean
                }
            },
            type: new GraphQLList(RegionalSocial)
        }
    },
    async resolve(root, args, {db}) {
        return await db.models.office.findAll({
            where: args
        });
    }
};

export default officeFields;
