export const homeState = {
};

export const slideshowState = {
    loading: true,
    collage: null,
    level: process.env.REACT_APP_DOC_SLIDESHOW_LEVEL,
    label: process.env.REACT_APP_DOC_SLIDESHOW_LABEL
};

export const sliderState = {
    loading: true,
    sources: null,
    current: null,
    index: process.env.REACT_APP_DOC_SLIDER_INDEX,
    delay: process.env.REACT_APP_DOC_SLIDER_DELAY,
    duration: process.env.REACT_APP_DOC_SLIDER_DURATION,
    loop: process.env.REACT_APP_DOC_SLIDER_LOOP,
    intervalId: -1
};

export const highlightsState = {
    loading: true,
    pages: null,
    level: process.env.REACT_APP_DOC_HIGHLIGHTS_LEVEL,
    label: process.env.REACT_APP_DOC_HIGHLIGHTS_LABEL
};

export const REQ_HOME_SLIDESHOW = 'REQ_HOME_SLIDESHOW';
export const RCV_HOME_SLIDESHOW = 'RCV_HOME_SLIDESHOW';
export const ERR_HOME_SLIDESHOW = 'ERR_HOME_SLIDESHOW';
export const SET_SLIDER_INTERVAL = 'SET_SLIDER_INTERVAL';
export const CLEAR_SLIDER_INTERVAL = 'CLEAR_SLIDER_INTERVAL';
export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';
export const SET_SLIDER_CONFIGURATIONS = 'SET_SLIDER_CONFIGURATIONS';

export const REQ_HOME_HIGHLIGHTS = 'REQ_HOME_HIGHLIGHTS';
export const RCV_HOME_HIGHLIGHTS = 'RCV_HOME_HIGHLIGHTS';
export const ERR_HOME_HIGHLIGHTS = 'ERR_HOME_HIGHLIGHTS';
