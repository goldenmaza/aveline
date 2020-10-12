import { Dispatch } from 'redux';
import {
    REQ_HEADER_LOGO,
    RCV_HEADER_LOGO,
    ERR_HEADER_LOGO,
    REQ_HEADER_MENU,
    RCV_HEADER_MENU,
    ERR_HEADER_MENU,
    TOGGLE_MENU_HANDLER,
    TOGGLE_HEADER_MENU
} from '../constants/header';

export const getHeaderLogo = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_HEADER_LOGO });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                collage (hidden: false, logo: true) {
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
            result, type: RCV_HEADER_LOGO
        }))
        .catch(() => dispatch({
            type: ERR_HEADER_LOGO
        }));
};

export const getHeaderMenu = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_HEADER_MENU });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                pages (hidden: false, main: true) {
                    id
                    label
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
            result, type: RCV_HEADER_MENU
        }))
        .catch(() => dispatch({
            type: ERR_HEADER_MENU
        }));
};

export const toggleHandlerMenu = () => (dispatch: Dispatch) => {
    dispatch({ type: TOGGLE_MENU_HANDLER });
    dispatch({ type: TOGGLE_HEADER_MENU });
};
