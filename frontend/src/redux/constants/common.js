export const selectorState = {
    level: process.env.REACT_APP_DOC_SELECTOR_LEVEL,
    label: process.env.REACT_APP_DOC_SELECTOR_LABEL
};

export const contentState = {
    loading: true,
    page: null,
    level: process.env.REACT_APP_DOC_CONTENT_LEVEL
};

export const collageState = {
};

export const preventionState = {
    level: process.env.REACT_APP_DOC_E404_LEVEL,
    label: process.env.REACT_APP_DOC_E404_LABEL
};

export const REQ_PAGE_CONTENT = 'REQ_PAGE_CONTENT';
export const RCV_PAGE_CONTENT = 'RCV_PAGE_CONTENT';
export const ERR_PAGE_CONTENT = 'ERR_PAGE_CONTENT';
