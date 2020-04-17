'use strict';

const { manager } = require('./manager');

const schema = `
    type Pair {
        key: String!
        value: String!
    }

    type Region {
        id: ID!
        labels: [Pair!]!
        title: [Pair!]!
        aria: [Pair!]!
    }

    type Dimensions {
        height: Float!
        width: Float!
        depth: Float!
        floors: [Pair!]!
    }

    type Model {
        id: ID!
        parent: ID!
        name: [Pair!]!
        type: [Pair!]!
        dimensions: Dimensions!
        src: String!
        title: [Pair!]!
        aria: [Pair!]!
    }

    type Attribute {
        id: ID!
        parent: ID!
        category: ID!
        name: [Pair!]!
        description: [Pair!]!
        price: Float!
        src: String!
        title: [Pair!]!
        aria: [Pair!]!
    }

    type Category {
        id: ID!
        parent: ID!
        name: [Pair!]!
    }

    type QueryBundle {
        regions: [Region!]!
        models: [Model!]!
        attributes: [Attribute!]!
        categories: [Category!]!
    }

    type MutationBundle {
        createRegion(name: String): String
    }

    schema {
        query: QueryBundle
        mutation: MutationBundle
    }
`;

const resolvers = {
    regions: () => {
        return manager.getRegions();
    },
    models: () => {
        return manager.getModels();
    },
    attributes: () => {
        return manager.getAttributes();
    },
    categories: () => {
        return manager.getCategories();
    }
};

module.exports = Object.freeze({
    schema,
    resolvers
});
