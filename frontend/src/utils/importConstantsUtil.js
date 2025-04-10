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
