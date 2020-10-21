import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';
import global from '../app';

// Main fields...
import pageFields from './definitions/field/page';
import contentFields from './definitions/field/content';
import multimediaFields from './definitions/field/multimedia';
import officeFields from './definitions/field/office';
import contactFields from './definitions/field/contact';
import socialFields from './definitions/field/social';
import navigationFields from './definitions/field/navigation';

// Declaration of the Query tag for GraphQL...
const QueryBundle = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => {
        return {
            pages: pageFields,
            paragraphs: contentFields,
            collage: multimediaFields,
            offices: officeFields,
            social: socialFields,
            navigation: navigationFields,
        };
    }
});

const Schema = new GraphQLSchema({
    query: QueryBundle
});

const data = {
    mode: process.env.SERVER_MODE,
    body: 'GraphQL QueryBundle has been created...'
}
global.graphqlLogger.log(data);

export default Schema;
