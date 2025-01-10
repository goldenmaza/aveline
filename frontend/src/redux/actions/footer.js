import {
    REQ_FOOTER_LOGO,
    RCV_FOOTER_LOGO,
    ERR_FOOTER_LOGO,
    REQ_FOOTER_SITEMAP,
    RCV_FOOTER_SITEMAP,
    ERR_FOOTER_SITEMAP
} from '../constants/footer';
import {
    GET_FOOTER_LOGO_REQUEST,
    GET_FOOTER_SITEMAP_REQUEST
} from './constants/footer';
import {
    DEFAULT_POST_OPTIONS
} from './constants/options';

import store from '../store';

export const getFooterLogo = () => {
    store.dispatch({ type: REQ_FOOTER_LOGO });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_FOOTER_LOGO_REQUEST);

    return fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
        .then(promise => {
            return promise.json();
        })
        .then(result => store.dispatch({
            result, type: RCV_FOOTER_LOGO
        }))
        .catch(() => store.dispatch({
            type: ERR_FOOTER_LOGO
        }));
};

export const getFooterSitemap = () => {
    store.dispatch({ type: REQ_FOOTER_SITEMAP });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_FOOTER_SITEMAP_REQUEST);

    return fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
        .then(promise => {
            return promise.json();
        })
        .then(result => store.dispatch({
            result, type: RCV_FOOTER_SITEMAP
        }))
        .catch(() => store.dispatch({
            type: ERR_FOOTER_SITEMAP
        }));
};
