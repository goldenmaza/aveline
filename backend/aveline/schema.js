import {
    GraphQLFloat,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString
} from 'graphql';

import regionFields from './fields/region';
import typeFields from './fields/type';
import modelFields from './fields/model';
import categoryFields from './fields/category';
import itemFields from './fields/item';

import db from './db';

const QueryBundle = new GraphQLObjectType({
    name: 'Query',
    description: 'This is the root query',
    fields: () => {
        return {
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
