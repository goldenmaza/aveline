import {
    CONTENT_LEVEL,
    CONTENT_LABEL,
    E404_LEVEL,
    E404_LABEL
} from './constants/commonKeys';
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
    FOOTER_LEVEL,
    FOOTER_LABEL,
    FOOTER_SITEMAP_LEVEL,
    FOOTER_SITEMAP_LABEL,
    FOOTER_COPYRIGHT_YEAR,
    FOOTER_COPYRIGHT_LEVEL,
    FOOTER_COPYRIGHT_LABEL,
    FOOTER_COPYRIGHT_NAME,
    FOOTER_BY_LINK,
    FOOTER_BY_LABEL
} from './constants/footerKeys';
import {
    FORM_OFFICE_LEVEL,
    FORM_OFFICE_LABEL,
    FORM_EMPLOYEE_LEVEL,
    FORM_EMPLOYEE_LABEL,
    FORM_CONTACT_TREE_LEVEL,
    FORM_CONTACT_TREE_LABEL
} from './constants/contactKeys';
import {
    FORM_STRONG_FORENAME,
    FORM_STRONG_SURNAME,
    FORM_STRONG_ADDRESS,
    FORM_STRONG_PHONE,
    FORM_STRONG_EMAIL,
    FORM_STRONG_PURPOSE,
    FORM_STRONG_MESSAGE,
    FORM_STRONG_CLEAR,
    FORM_STRONG_HELP,
    FORM_STRONG_SUBMIT,
    FORM_REGEX_FORENAME,
    FORM_REGEX_SURNAME,
    FORM_REGEX_ADDRESS,
    FORM_REGEX_PHONE,
    FORM_REGEX_EMAIL,
    FORM_REGEX_PURPOSE,
    FORM_REGEX_MESSAGE,
    FORM_REGEX_FORENAME_MAX,
    FORM_REGEX_SURNAME_MAX,
    FORM_REGEX_ADDRESS_MAX,
    FORM_REGEX_PHONE_MAX,
    FORM_REGEX_EMAIL_USERNAME_MAX,
    FORM_REGEX_EMAIL_DOMAIN_MAX,
    FORM_REGEX_EMAIL_SUFFIX_MAX,
    FORM_REGEX_PURPOSE_MAX,
    FORM_REGEX_MESSAGE_MAX,
    FORM_TITLE_FORENAME,
    FORM_TITLE_SURNAME,
    FORM_TITLE_ADDRESS,
    FORM_TITLE_PHONE,
    FORM_TITLE_EMAIL,
    FORM_TITLE_PURPOSE,
    FORM_TITLE_MESSAGE,
    FORM_TITLE_CLEAR,
    FORM_TITLE_HELP,
    FORM_TITLE_SUBMIT,
    FORM_PLACEHOLDER_FORENAME,
    FORM_PLACEHOLDER_SURNAME,
    FORM_PLACEHOLDER_ADDRESS,
    FORM_PLACEHOLDER_PHONE,
    FORM_PLACEHOLDER_EMAIL,
    FORM_PLACEHOLDER_PURPOSE,
    FORM_PLACEHOLDER_MESSAGE,
    FORM_PLACEHOLDER_CLEAR,
    FORM_PLACEHOLDER_HELP,
    FORM_PLACEHOLDER_SUBMIT,
    FORM_CONTACT_LEVEL,
    FORM_CONTACT_LABEL,
    FORM_REGEX_HELP_MAPPING,
    FORM_REGEX_RANGE_MAPPING,
    FORM_REGEX_SYMBOLS_MAPPING,
    HELP_SECTION_LEVEL,
    HELP_SECTION_LABEL
} from './constants/formKeys';
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

export function commonConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case CONTENT_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_CONTENT_LEVEL;
            break;
        case CONTENT_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_CONTENT_LABEL;
            break;
        case E404_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_E404_LEVEL;
            break;
        case E404_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_E404_LABEL;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

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

export function footerConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case FOOTER_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_LEVEL;
            break;
        case FOOTER_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_LABEL;
            break;
        case FOOTER_SITEMAP_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_SITEMAP_LEVEL;
            break;
        case FOOTER_SITEMAP_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_SITEMAP_LABEL;
            break;
        case FOOTER_COPYRIGHT_YEAR:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_COPYRIGHT_YEAR;
            break;
        case FOOTER_COPYRIGHT_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_COPYRIGHT_LEVEL;
            break;
        case FOOTER_COPYRIGHT_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_COPYRIGHT_LABEL;
            break;
        case FOOTER_COPYRIGHT_NAME:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_COPYRIGHT_NAME;
            break;
        case FOOTER_BY_LINK:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_BY_LINK;
            break;
        case FOOTER_BY_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FOOTER_BY_LABEL;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

export function contactConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case FORM_OFFICE_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_OFFICE_LEVEL;
            break;
        case FORM_OFFICE_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_OFFICE_LABEL;
            break;
        case FORM_EMPLOYEE_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_EMPLOYEE_LEVEL;
            break;
        case FORM_EMPLOYEE_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_EMPLOYEE_LABEL;
            break;
        case FORM_CONTACT_TREE_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_CONTACT_TREE_LEVEL;
            break;
        case FORM_CONTACT_TREE_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_CONTACT_TREE_LABEL;
            break;
        default:
            viteValue = import.meta.env.VITE_APP_INVALID_IMPORT_KEY;
    }

    return viteValue;
}

export function formConstant(viteKey) {
    let viteValue = '';

    switch (viteKey) {
        case FORM_STRONG_FORENAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_FORENAME;
            break;
        case FORM_STRONG_SURNAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_SURNAME;
            break;
        case FORM_STRONG_ADDRESS:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_ADDRESS;
            break;
        case FORM_STRONG_PHONE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_PHONE;
            break;
        case FORM_STRONG_EMAIL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_EMAIL;
            break;
        case FORM_STRONG_PURPOSE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_PURPOSE;
            break;
        case FORM_STRONG_MESSAGE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_MESSAGE;
            break;
        case FORM_STRONG_CLEAR:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_CLEAR;
            break;
        case FORM_STRONG_HELP:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_HELP;
            break;
        case FORM_STRONG_SUBMIT:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_STRONG_SUBMIT;
            break;
        case FORM_REGEX_FORENAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_FORENAME;
            break;
        case FORM_REGEX_SURNAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_SURNAME;
            break;
        case FORM_REGEX_ADDRESS:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_ADDRESS;
            break;
        case FORM_REGEX_PHONE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_PHONE;
            break;
        case FORM_REGEX_EMAIL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL;
            break;
        case FORM_REGEX_PURPOSE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_PURPOSE;
            break;
        case FORM_REGEX_MESSAGE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_MESSAGE;
            break;
        case FORM_REGEX_FORENAME_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_FORENAME_MAX;
            break;
        case FORM_REGEX_SURNAME_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_SURNAME_MAX;
            break;
        case FORM_REGEX_ADDRESS_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_ADDRESS_MAX;
            break;
        case FORM_REGEX_PHONE_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_PHONE_MAX;
            break;
        case FORM_REGEX_EMAIL_USERNAME_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_USERNAME_MAX;
            break;
        case FORM_REGEX_EMAIL_DOMAIN_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_DOMAIN_MAX;
            break;
        case FORM_REGEX_EMAIL_SUFFIX_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_SUFFIX_MAX;
            break;
        case FORM_REGEX_PURPOSE_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_PURPOSE_MAX;
            break;
        case FORM_REGEX_MESSAGE_MAX:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_MESSAGE_MAX;
            break;
        case FORM_TITLE_FORENAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_FORENAME;
            break;
        case FORM_TITLE_SURNAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_SURNAME;
            break;
        case FORM_TITLE_ADDRESS:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_ADDRESS;
            break;
        case FORM_TITLE_PHONE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_PHONE;
            break;
        case FORM_TITLE_EMAIL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_EMAIL;
            break;
        case FORM_TITLE_PURPOSE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_PURPOSE;
            break;
        case FORM_TITLE_MESSAGE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_MESSAGE;
            break;
        case FORM_TITLE_CLEAR:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_CLEAR;
            break;
        case FORM_TITLE_HELP:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_HELP;
            break;
        case FORM_TITLE_SUBMIT:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_TITLE_SUBMIT;
            break;
        case FORM_PLACEHOLDER_FORENAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_FORENAME;
            break;
        case FORM_PLACEHOLDER_SURNAME:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_SURNAME;
            break;
        case FORM_PLACEHOLDER_ADDRESS:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_ADDRESS;
            break;
        case FORM_PLACEHOLDER_PHONE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_PHONE;
            break;
        case FORM_PLACEHOLDER_EMAIL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_EMAIL;
            break;
        case FORM_PLACEHOLDER_PURPOSE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_PURPOSE;
            break;
        case FORM_PLACEHOLDER_MESSAGE:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_MESSAGE;
            break;
        case FORM_PLACEHOLDER_CLEAR:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_CLEAR;
            break;
        case FORM_PLACEHOLDER_HELP:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_HELP;
            break;
        case FORM_PLACEHOLDER_SUBMIT:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_SUBMIT;
            break;
        case FORM_CONTACT_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_CONTACT_LEVEL;
            break;
        case FORM_CONTACT_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_CONTACT_LABEL;
            break;
        case FORM_REGEX_HELP_MAPPING:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_HELP_MAPPING;
            break;
        case FORM_REGEX_RANGE_MAPPING:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_RANGE_MAPPING;
            break;
        case FORM_REGEX_SYMBOLS_MAPPING:
            viteValue = import.meta.env.VITE_APP_DOC_FORM_REGEX_SYMBOLS_MAPPING;
            break;
        case HELP_SECTION_LEVEL:
            viteValue = import.meta.env.VITE_APP_DOC_HELP_SECTION_LEVEL;
            break;
        case HELP_SECTION_LABEL:
            viteValue = import.meta.env.VITE_APP_DOC_HELP_SECTION_LABEL;
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
