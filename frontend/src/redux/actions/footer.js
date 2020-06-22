import { Dispatch } from 'redux';
import {
    REQ_FOOTER_LOGO,
    RCV_FOOTER_LOGO,
    ERR_FOOTER_LOGO,
    REQ_FOOTER_SITEMAP,
    RCV_FOOTER_SITEMAP,
    ERR_FOOTER_SITEMAP
} from '../constants/footer';

export const getFooterLogo = () => (dispatch: Dispatch) => {//Note: Get logo from Handler...
    dispatch({ type: REQ_FOOTER_LOGO });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                multimedia (hidden: false, logo: true) {
                    src
                    alt
                    title
                }
            }
        `
    };
    //TODO: Refactor to a file with options constants...
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, options)
        .then(promise => {
            return promise.json();
        })
        .then(result => dispatch({
            result, type: RCV_FOOTER_LOGO
        }))
        .catch(() => dispatch({
            type: ERR_FOOTER_LOGO
        }));
};

export const getFooterSitemap = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_FOOTER_SITEMAP });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                page (hidden: false) {
                    id
                    main
                    sitemap
                    label
                    title
                }
                content (hidden: false) {
                    id
                    page
                    heading
                }
            }
        `
    };
    //TODO: Refactor to a file with options constants...
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, options)
        .then(promise => {
            return promise.json();
        })
        .then(result => dispatch({
            result, type: RCV_FOOTER_SITEMAP
        }))
        .catch(() => dispatch({
            type: ERR_FOOTER_SITEMAP
        }));
};
