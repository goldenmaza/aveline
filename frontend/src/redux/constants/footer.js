import { footerConstant } from '../../utils/importConstantsUtil';
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
    FOOTER_BY_LABEL,
} from '../../utils/constants/footerKeys';

export const footerState = {
    loading: true,
    collage: null,
    level: footerConstant(FOOTER_LEVEL),
    label: footerConstant(FOOTER_LABEL)
};

export const sitemapState = {
    loading: true,
    pages: null,
    level: footerConstant(FOOTER_SITEMAP_LEVEL),
    label: footerConstant(FOOTER_SITEMAP_LABEL)
};

export const copyrightState = {
    created: footerConstant(FOOTER_COPYRIGHT_YEAR),
    level: footerConstant(FOOTER_COPYRIGHT_LEVEL),
    label: footerConstant(FOOTER_COPYRIGHT_LABEL),
    name: footerConstant(FOOTER_COPYRIGHT_NAME),
    link: footerConstant(FOOTER_BY_LINK),
    by: footerConstant(FOOTER_BY_LABEL)
};

export const REQ_FOOTER_LOGO = 'REQ_FOOTER_LOGO';
export const RCV_FOOTER_LOGO = 'RCV_FOOTER_LOGO';
export const ERR_FOOTER_LOGO = 'ERR_FOOTER_LOGO';
export const REQ_FOOTER_SITEMAP = 'REQ_FOOTER_SITEMAP';
export const RCV_FOOTER_SITEMAP = 'RCV_FOOTER_SITEMAP';
export const ERR_FOOTER_SITEMAP = 'ERR_FOOTER_SITEMAP';
