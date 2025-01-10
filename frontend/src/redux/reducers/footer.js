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

export const footerComponent = (state = footerState, action) => {
    switch (action.type) {
        case REQ_FOOTER_LOGO:
            return {
                ...state,
                loading: true,
                collage: null
            };
        case RCV_FOOTER_LOGO:
            return {
                ...state,
                loading: false,
                collage: action.result.data.collage
            };
        case ERR_FOOTER_LOGO:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const sitemapComponent = (state = sitemapState, action) => {
    switch (action.type) {
        case REQ_FOOTER_SITEMAP:
            return {
                ...state,
                loading: true,
                pages: null
            };
        case RCV_FOOTER_SITEMAP:
            return {
                ...state,
                loading: false,
                pages: action.result.data.pages
            };
        case ERR_FOOTER_SITEMAP:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const copyrightComponent = (state = copyrightState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
