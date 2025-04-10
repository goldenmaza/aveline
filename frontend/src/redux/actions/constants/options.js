import { apiConstant } from '../../../utils/importConstantsUtil';
import {
    SERVER_MAIL_ADDRESS
} from '../../../utils/constants/apiKeys';

export const DEFAULT_POST_OPTIONS = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    }
};

export const DEFAULT_NODEMAILER_OPTIONS = {
    url: apiConstant(SERVER_MAIL_ADDRESS),
    method: 'POST'
};
