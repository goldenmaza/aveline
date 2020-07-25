import { AnyAction } from 'redux';
import {
    selectorState,
    contentState,
    collageState,
    preventionState,
    REQ_PAGE_CONTENT,
    RCV_PAGE_CONTENT,
    ERR_PAGE_CONTENT
} from '../constants/common';

export const selectorComponent = (state = selectorState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const contentComponent = (state = contentState, action: AnyAction) => {
    switch (action.type) {
        case REQ_PAGE_CONTENT:
            return {
                ...state,
                loading: true,
                page: null
            };
        case RCV_PAGE_CONTENT:
            return {
                ...state,
                loading: !state.loading,
                page: action.result.data.page
            };
        case ERR_PAGE_CONTENT:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const collageComponent = (state = collageState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};


export const preventionComponent = (state = preventionState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};
