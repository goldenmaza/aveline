'use strict';

const express = require('express');
const parser = require('body-parser');
const graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const { schema, resolvers } = require('./aveline/api');

const app = express();

app.use(parser.json());

app.listen(6969);

app.get('/api', graphql({
    schema: buildSchema(schema),
    rootValue: resolvers,
    graphiql: true
}));
