import { headerConstant } from '../../utils/importConstantsUtil';
import {
    HEADER_LEVEL,
    HEADER_LABEL
} from '../../utils/constants/headerKeys';

export const headerState = {
    level: headerConstant(HEADER_LEVEL),
    label: headerConstant(HEADER_LABEL)
};

export const handlerState = {
    loading: true,
    toggled: true,
    collage: null
};

export const menuState = {
    loading: true,
    toggled: true,
    pages: null
};

export const REQ_HEADER_LOGO = 'REQ_HEADER_LOGO';
export const RCV_HEADER_LOGO = 'RCV_HEADER_LOGO';
export const ERR_HEADER_LOGO = 'ERR_HEADER_LOGO';
export const REQ_HEADER_MENU = 'REQ_HEADER_MENU';
export const RCV_HEADER_MENU = 'RCV_HEADER_MENU';
export const ERR_HEADER_MENU = 'ERR_HEADER_MENU';
export const TOGGLE_MENU_HANDLER = 'TOGGLE_MENU_HANDLER';
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU';
