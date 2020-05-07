import {
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';

// Main fields...
import pageFields from './fields/page';
import contentFields from './fields/content';
import multimediaFields from './fields/multimedia';
import officeFields from './fields/office';
import contactFields from './fields/contact';
import socialFields from './fields/social';
import navigationFields from './fields/navigation';

// BuildTool fields...
import regionFields from './fields/region';
import typeFields from './fields/type';
import modelFields from './fields/model';
import categoryFields from './fields/category';
import itemFields from './fields/item';

// Declaration of the Query tag for GraphQL...
const QueryBundle = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => {
        return {
            page: pageFields,
            content: contentFields,
            multimedia: multimediaFields,
            office: officeFields,
            contact: contactFields,
            social: socialFields,
            navigation: navigationFields,
            region: regionFields,
            type: typeFields,
            model: modelFields,
            category: categoryFields,
            item: itemFields
        };
    }
});

const Schema = new GraphQLSchema({
    query: QueryBundle
});

export default Schema;
