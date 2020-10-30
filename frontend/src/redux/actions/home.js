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
import {
    GET_RESOURCES_REQUEST,
    GET_HIGHLIGHTS_REQUEST
} from './constants/home';
import {
    DEFAULT_POST_OPTIONS
} from './constants/options';

export const getResources = () => (dispatch) => {
    dispatch({ type: REQ_HOME_SLIDESHOW });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_RESOURCES_REQUEST);

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
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

export const setSliderConfigurations = (values) => (dispatch) => {
    dispatch({ values, type: SET_SLIDER_CONFIGURATIONS });
};

export const setCurrentSlide = (id) => (dispatch) => {
    dispatch({ id, type: SET_CURRENT_SLIDE });
};

export const clearIntervalId = () => (dispatch) => {
    dispatch({ type: CLEAR_SLIDER_INTERVAL });
};

export const setIntervalId = (id) => (dispatch) => {
    dispatch({ id, type: SET_SLIDER_INTERVAL });
};

export const getHighlights = () => (dispatch) => {
    dispatch({ type: REQ_HOME_HIGHLIGHTS });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_HIGHLIGHTS_REQUEST);

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, DEFAULT_POST_OPTIONS)
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
