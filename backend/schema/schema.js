import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';
import global from '../app';

// Main fields...
import pageFields from './definitions/field/page';
import multimediaFields from './definitions/field/multimedia';
import officeFields from './definitions/field/office';

// Declaration of the Query tag for GraphQL...
const QueryBundle = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => {
        return {
            pages: pageFields,
            collage: multimediaFields,
            offices: officeFields
        };
    }
});

const Schema = new GraphQLSchema({
    query: QueryBundle
});

const data = {
    mode: process.env.SERVER_MODE,
    body: 'GraphQL QueryBundle has been created...'
};
global.graphqlLogger.log(data);

export default Schema;
