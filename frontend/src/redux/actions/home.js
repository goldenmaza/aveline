import { Dispatch } from 'redux';
import {
    REQ_HOME_SLIDESHOW,
    RCV_HOME_SLIDESHOW,
    ERR_HOME_SLIDESHOW,
    SET_SLIDER_CONFIGURATIONS,
    SET_CURRENT_SLIDE,
    CLEAR_SLIDER_INTERVAL,
    SET_SLIDER_INTERVAL,
    REQ_HOME_HIGHLIGHTS,
    RCV_HOME_HIGHLIGHTS,
    ERR_HOME_HIGHLIGHTS
} from '../constants/home';

export const getResources = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_HOME_SLIDESHOW });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                multimedia (hidden: false, slideshow: true) {
                    id
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
            result, type: RCV_HOME_SLIDESHOW
        }))
        .catch(() => dispatch({
            type: ERR_HOME_SLIDESHOW
        }));
};

export const setSliderConfigurations = (values) => (dispatch: Dispatch) => {
    dispatch({ values, type: SET_SLIDER_CONFIGURATIONS });
};

export const setCurrentSlide = (id: Number) => (dispatch: Dispatch) => {
    dispatch({ id, type: SET_CURRENT_SLIDE });
};

export const clearIntervalId = () => (dispatch: Dispatch) => {
    dispatch({ type: CLEAR_SLIDER_INTERVAL });
};

export const setIntervalId = (id: Number) => (dispatch: Dispatch) => {
    dispatch({ id, type: SET_SLIDER_INTERVAL });
};

export const getHighlights = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_HOME_HIGHLIGHTS });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                page (hidden: false, box: true, main: true) {
                    id
                    tag
                    label
                    title
                }
                content (hidden: false, box: true) {
                    id
                    page
                    heading
                    text
                }
                multimedia (hidden: false, box: true) {
                    id
                    page
                    content
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
            result, type: RCV_HOME_HIGHLIGHTS
        }))
        .catch(() => dispatch({
            type: ERR_HOME_HIGHLIGHTS
        }));
};
