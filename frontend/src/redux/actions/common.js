import {
    REQ_PAGE_CONTENT,
    RCV_PAGE_CONTENT,
    ERR_PAGE_CONTENT
} from '../constants/common';
import {
    GET_PAGE_CONTENT_REQUEST
} from './constants/common';
import {
    DEFAULT_POST_OPTIONS
} from './constants/options';

export const getPageContent = () => (dispatch) => {
    dispatch({ type: REQ_PAGE_CONTENT });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_PAGE_CONTENT_REQUEST);

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
        .then(promise => {
            return promise.json();
        })
        .then(result => dispatch({
            result, type: RCV_PAGE_CONTENT
        }))
        .catch(() => dispatch({
            type: ERR_PAGE_CONTENT
        }));
};
