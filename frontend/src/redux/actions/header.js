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
import {
    GET_HEADER_LOGO_REQUEST,
    GET_HEADER_MENU_REQUEST
} from './constants/header';
import {
    DEFAULT_POST_OPTIONS
} from './constants/options';

export const getHeaderLogo = () => (dispatch) => {
    dispatch({ type: REQ_HEADER_LOGO });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_HEADER_LOGO_REQUEST);

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
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

export const getHeaderMenu = () => (dispatch) => {
    dispatch({ type: REQ_HEADER_MENU });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_HEADER_MENU_REQUEST);

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
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

export const toggleHandlerMenu = () => (dispatch) => {
    dispatch({ type: TOGGLE_MENU_HANDLER });
    dispatch({ type: TOGGLE_HEADER_MENU });
};
