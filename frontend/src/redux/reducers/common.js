import {
    selectorState,
    contentState,
    collageState,
    preventionState,
    REQ_PAGE_CONTENT,
    RCV_PAGE_CONTENT,
    ERR_PAGE_CONTENT
} from '../constants/common';

export const selectorComponent = (state = selectorState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const contentComponent = (state = contentState, action) => {
    switch (action.type) {
        case REQ_PAGE_CONTENT:
            return {
                ...state,
                loading: true,
                pages: null
            };
        case RCV_PAGE_CONTENT:
            return {
                ...state,
                loading: !state.loading,
                pages: action.result.data.pages
            };
        case ERR_PAGE_CONTENT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const collageComponent = (state = collageState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const preventionComponent = (state = preventionState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
