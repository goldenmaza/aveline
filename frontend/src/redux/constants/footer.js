export const footerState = {
    loading: true,
    multimedia: null,
    level: process.env.REACT_APP_DOC_FOOTER_LEVEL,
    label: process.env.REACT_APP_DOC_FOOTER_LABEL
};

export const sitemapState = {
    loading: true,
    page: null,
    content: null,
    level: process.env.REACT_APP_DOC_FOOTER_SITEMAP_LEVEL,
    label: process.env.REACT_APP_DOC_FOOTER_SITEMAP_LABEL
};

export const copyrightState = {
    created: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_YEAR,
    level: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LEVEL,
    label: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LABEL,
    name: process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_NAME,
    link: process.env.REACT_APP_DOC_FOOTER_BY_LINK,
    by: process.env.REACT_APP_DOC_FOOTER_BY_LABEL
};

export const REQ_FOOTER_LOGO = 'REQ_FOOTER_LOGO';
export const RCV_FOOTER_LOGO = 'RCV_FOOTER_LOGO';
export const ERR_FOOTER_LOGO = 'ERR_FOOTER_LOGO';
export const REQ_FOOTER_SITEMAP = 'REQ_FOOTER_SITEMAP';
export const RCV_FOOTER_SITEMAP = 'RCV_FOOTER_SITEMAP';
export const ERR_FOOTER_SITEMAP = 'ERR_FOOTER_SITEMAP';
