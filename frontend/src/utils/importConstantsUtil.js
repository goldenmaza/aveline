import {
    SLIDESHOW_LEVEL,
    SLIDESHOW_LABEL,
    SLIDER_INDEX,
    SLIDER_DELAY,
    SLIDER_DURATION,
    SLIDER_LOOP,
    HIGHLIGHTS_LEVEL,
    HIGHLIGHTS_LABEL
} from './constants/homeKeys';
import {
    HEADER_LEVEL,
    HEADER_LABEL
} from './constants/headerKeys';
import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from './constants/mediaKeys';
import {
    SERVER_API_ADDRESS,
    SERVER_MAIL_ADDRESS
} from './constants/apiKeys';

export function homeConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case SLIDESHOW_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDESHOW_LEVEL;
            break;
        case SLIDESHOW_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDESHOW_LABEL;
            break;
        case SLIDER_INDEX:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDER_INDEX;
            break;
        case SLIDER_DELAY:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDER_DELAY;
            break;
        case SLIDER_DURATION:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDER_DURATION;
            break;
        case SLIDER_LOOP:
            viteValue = import.meta.env.VITE_APP_DOC_SLIDER_LOOP;
            break;
        case HIGHLIGHTS_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_HIGHLIGHTS_LEVEL;
            break;
        case HIGHLIGHTS_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_HIGHLIGHTS_LABEL;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

export function headerConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case HEADER_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_HEADER_LEVEL;
            break;
        case HEADER_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_HEADER_LABEL;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

export function mediaConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case SOURCE_SRCSET_DEFAULT:
            viteValue = import.meta.env.VITE_APP_SOURCE_SRCSET_DEFAULT;
            break;
        case SOURCE_TYPE_PRIMARY:
            viteValue = import.meta.env.VITE_APP_SOURCE_TYPE_PRIMARY;
            break;
        case SOURCE_SRCSET_PRIMARY:
            viteValue = import.meta.env.VITE_APP_SOURCE_SRCSET_PRIMARY;
            break;
        case SOURCE_TYPE_SECONDARY:
            viteValue = import.meta.env.VITE_APP_SOURCE_TYPE_SECONDARY;
            break;
        case SOURCE_SRCSET_SECONDARY:
            viteValue = import.meta.env.VITE_APP_SOURCE_SRCSET_SECONDARY;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

export function apiConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case SERVER_API_ADDRESS:
            viteValue = import.meta.env.VITE_APP_SERVER_API_ADDRESS;
            break;
        case SERVER_MAIL_ADDRESS:
            viteValue = import.meta.env.VITE_APP_SERVER_MAIL_ADDRESS;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}
