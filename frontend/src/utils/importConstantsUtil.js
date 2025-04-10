import {
    SOURCE_SRCSET_DEFAULT,
    SOURCE_TYPE_PRIMARY,
    SOURCE_SRCSET_PRIMARY,
    SOURCE_TYPE_SECONDARY,
    SOURCE_SRCSET_SECONDARY
} from './constants/mediaKeys';

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
