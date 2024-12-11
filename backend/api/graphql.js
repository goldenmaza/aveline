import { createHandler } from 'graphql-http/lib/use/express';
import Schema from '../schema/schema';
import db from '../schema/db';
require('../schema/definitions/associations');

import DataLoader from 'dataloader';
import {
    pagesCollageLoaderHandler,
    pagesParagraphsLoaderHandler,
} from '../schema/definitions/loader/page';
import {
    contentCollageLoaderHandler,
    contentParagraphsLoaderHandler,
} from '../schema/definitions/loader/content';
import {
    officesThumbnailLoaderHandler,
    officesEmployeesLoaderHandler,
    officesSocialsLoaderHandler,
} from '../schema/definitions/loader/office';
import {
    contactPortraitsLoaderHandler,
    contactProfilesLoaderHandler
} from '../schema/definitions/loader/contact';

import global from '../app';

// GraphQL API configuration...
global.app.use(process.env.API_GRAPHQL, createHandler({
    schema: Schema,
    pretty: true,
    graphiql: true,
    context: {
        db,
        pagesCollageLoader: new DataLoader(data => pagesCollageLoaderHandler(data, db)),
        pagesParagraphsLoader: new DataLoader(data => pagesParagraphsLoaderHandler(data, db)),
        contentCollageLoader: new DataLoader(data => contentCollageLoaderHandler(data, db)),
        contentParagraphsLoader: new DataLoader(data => contentParagraphsLoaderHandler(data, db)),
        officesThumbnailLoader: new DataLoader(data => officesThumbnailLoaderHandler(data, db)),
        officesEmployeesLoader: new DataLoader(data => officesEmployeesLoaderHandler(data, db)),
        officesSocialsLoader: new DataLoader(data => officesSocialsLoaderHandler(data, db)),
        contactPortraitsLoader: new DataLoader(data => contactPortraitsLoaderHandler(data, db)),
        contactProfilesLoader: new DataLoader(data => contactProfilesLoaderHandler(data, db))
    }
}));

const graphqlData = {
    mode: process.env.SERVER_MODE,
    body: 'GraphQL API up and running...'
};
global.graphqlLogger.log(graphqlData);
