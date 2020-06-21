export const headerState = {
    level: process.env.REACT_APP_DOC_HEADER_LEVEL,
    label: process.env.REACT_APP_DOC_HEADER_LABEL
};

export const handlerState = {
    loading: true,
    toggled: true,
    multimedia: null
};

export const menuState = {
    loading: true,
    toggled: true,
    page: null,
    content: null
};

export const REQ_HEADER_LOGO = 'REQ_HEADER_LOGO';
export const RCV_HEADER_LOGO = 'RCV_HEADER_LOGO';
export const ERR_HEADER_LOGO = 'ERR_HEADER_LOGO';
export const REQ_HEADER_MENU = 'REQ_HEADER_MENU';
export const RCV_HEADER_MENU = 'RCV_HEADER_MENU';
export const ERR_HEADER_MENU = 'ERR_HEADER_MENU';
export const TOGGLE_MENU_HANDLER = 'TOGGLE_MENU_HANDLER';
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';
