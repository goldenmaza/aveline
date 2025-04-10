import { commonConstant } from '../../utils/importConstantsUtil';
import {
    CONTENT_LEVEL,
    CONTENT_LABEL,
    E404_LEVEL,
    E404_LABEL
} from '../../utils/constants/commonKeys';

export const selectorState = {
    level: import.meta.env.VITE_APP_DOC_SELECTOR_LEVEL,
    label: import.meta.env.VITE_APP_DOC_SELECTOR_LABEL
};

export const contentState = {
    loading: true,
    pages: null,
    level: commonConstant(CONTENT_LEVEL),
    label: commonConstant(CONTENT_LABEL)
};

export const collageState = {
};

export const preventionState = {
    level: commonConstant(E404_LEVEL),
    label: commonConstant(E404_LABEL)
};

export const REQ_PAGE_CONTENT = 'REQ_PAGE_CONTENT';
export const RCV_PAGE_CONTENT = 'RCV_PAGE_CONTENT';
export const ERR_PAGE_CONTENT = 'ERR_PAGE_CONTENT';
