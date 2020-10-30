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

export const getResources = () => (dispatch) => {
    dispatch({ type: REQ_HOME_SLIDESHOW });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                collage (hidden: false, slideshow: true) {
                    id
                    src
                    alt
                    title
                }
            }
        `
    };//collage (hidden: false, slideshow: true)
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

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                pages (hidden: false, box: true, main: true) {
                    id
                    route
                    label
                    title
                    paragraphs (hidden: false, box: true) {
                        id
                        heading
                        text
                        collage (hidden: false, box: true) {
                            id
                            src
                            alt
                            title
                        }
                    }
                    collage (hidden: false, box: true) {
                        id
                        src
                        alt
                        title
                    }
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
