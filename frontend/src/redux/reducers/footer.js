import { AnyAction } from 'redux';
import {
    footerState,
    sitemapState,
    copyrightState,
    REQ_FOOTER_LOGO,
    RCV_FOOTER_LOGO,
    ERR_FOOTER_LOGO,
    REQ_FOOTER_SITEMAP,
    RCV_FOOTER_SITEMAP,
    ERR_FOOTER_SITEMAP
} from '../constants/footer';

export const footerComponent = (state = footerState, action: AnyAction) => {
    switch (action.type) {
        case REQ_FOOTER_LOGO:
            return {
                ...state,
                loading: true,
                multimedia: null
            };
        case RCV_FOOTER_LOGO:
            return {
                ...state,
                loading: !state.loading,
                multimedia: action.result.data.multimedia
            };
        case ERR_FOOTER_LOGO:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const sitemapComponent = (state = sitemapState, action: AnyAction) => {
    switch (action.type) {
        case REQ_FOOTER_SITEMAP:
            return {
                ...state,
                loading: true,
                page: null,
                content: null
            };
        case RCV_FOOTER_SITEMAP:
            return {
                ...state,
                loading: !state.loading,
                page: action.result.data.page,
                content: action.result.data.content
            };
        case ERR_FOOTER_SITEMAP:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const copyrightComponent = (state = copyrightState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};
