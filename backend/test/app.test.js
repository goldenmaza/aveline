import mock from 'supertest';
import { app } from '../app';
import {
    GET_HEADER_LOGO_REQUEST,
    GET_HEADER_MENU_REQUEST
} from './constants/header'; //TODO: Refactor these constants to a common module...
import {
    GET_RESOURCES_REQUEST,
    GET_HIGHLIGHTS_REQUEST
} from './constants/home'; //TODO: Refactor these constants to a common module...
import {
    GET_CONTACT_DETAILS_REQUEST
} from './constants/contact'; //TODO: Refactor these constants to a common module...
import {
    GET_PAGE_CONTENT_REQUEST
} from './constants/common'; //TODO: Refactor these constants to a common module...
import {
    GET_FOOTER_LOGO_REQUEST,
    GET_FOOTER_SITEMAP_REQUEST
} from './constants/footer'; //TODO: Refactor these constants to a common module...

describe('verifying invalid API calls', () => {
    it('verifies an invalid API endpoint', async (done) => {
        await mock(app).post('/invalidAPI')
            .send(GET_HEADER_LOGO_REQUEST)
            .expect(404);

        done();
    });
});

describe('verifying GraphQL API calls', () => {
    it('is fetching logotype for the header', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_HEADER_LOGO_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching menu for the header', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_HEADER_MENU_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching the collage used for the slideshow', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_RESOURCES_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching the highlights, of selected pages and paragraphs, for the home page', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_HIGHLIGHTS_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching the contact details for the contact page', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_CONTACT_DETAILS_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching the headings, paragraphs and collages for all pages', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_PAGE_CONTENT_REQUEST)
            .expect(200);

        done();
    });

    it('is fetching logotype for the footer', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_FOOTER_LOGO_REQUEST) // Note: Query never really used...
            .expect(200);

        done();
    });

    it('is fetching the sitemap for the footer', async (done) => {
        await mock(app).post(process.env.API_GRAPHQL)
            .send(GET_FOOTER_SITEMAP_REQUEST)
            .expect(200);

        done();
    });
});
