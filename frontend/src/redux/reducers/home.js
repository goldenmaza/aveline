import {
    slideshowState,
    sliderState,
    highlightsState,
    REQ_HOME_SLIDESHOW,
    RCV_HOME_SLIDESHOW,
    ERR_HOME_SLIDESHOW,
    SET_SLIDER_CONFIGURATIONS,
    SET_SLIDER_SOURCES,
    SET_CURRENT_SLIDE,
    CLEAR_SLIDER_INTERVAL,
    SET_SLIDER_INTERVAL,
    REQ_HOME_HIGHLIGHTS,
    RCV_HOME_HIGHLIGHTS,
    ERR_HOME_HIGHLIGHTS
} from '../constants/home';

export const slideshowComponent = (state = slideshowState, action) => {
    switch (action.type) {
        case REQ_HOME_SLIDESHOW:
            return {
                ...state,
                loading: true,
                collage: null
            };
        case RCV_HOME_SLIDESHOW:
            return {
                ...state,
                loading: false,
                collage: action.result.data.collage
            };
        case ERR_HOME_SLIDESHOW:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const sliderComponent = (state = sliderState, action) => {
    switch (action.type) {
        case SET_SLIDER_CONFIGURATIONS:
            return {
                ...state,
                loading: true,
                sources: action.values.sources,
                current: action.values.sources[action.values.index],
                index: action.values.index,
                delay: action.values.delay,
                duration: action.values.duration,
                loop: action.values.loop
            };
        case SET_SLIDER_SOURCES:
            return {
                ...state,
                sources: action.values.sources
            };
        case SET_CURRENT_SLIDE:
            return {
                ...state,
                loading: false,
                index: action.id,
                current: state.sources[action.values.newIndex]
            };
        case CLEAR_SLIDER_INTERVAL:
            clearInterval(state.intervalId);
            return {
                ...state,
                loading: true,
                intervalId: -1
            };
        case SET_SLIDER_INTERVAL:
            return {
                ...state,
                intervalId: action.id
            };
        default:
            return state;
    }
};

export const highlightsComponent = (state = highlightsState, action) => {
    switch (action.type) {
        case REQ_HOME_HIGHLIGHTS:
            return {
                ...state,
                loading: true,
                pages: null
            };
        case RCV_HOME_HIGHLIGHTS:
            return {
                ...state,
                loading: false,
                pages: action.result.data.pages
            };
        case ERR_HOME_HIGHLIGHTS:
            return {
                ...state
            };
        default:
            return state;
    }
};
