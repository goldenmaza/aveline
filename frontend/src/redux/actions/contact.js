import {
    REQ_CONTACT_DETAILS,
    RCV_CONTACT_DETAILS,
    ERR_CONTACT_DETAILS,
    TOGGLE_CONTACT_OFFICE
} from '../constants/contact';
import {
    GET_CONTACT_DETAILS_REQUEST
} from './constants/contact';
import {
    DEFAULT_POST_OPTIONS
} from './constants/options';

import { apiConstant } from '../../utils/importConstantsUtil';
import {
    SERVER_API_ADDRESS
} from '../../utils/constants/apiKeys';

import store from '../store';

export const getContactDetails = () => {
    store.dispatch({ type: REQ_CONTACT_DETAILS });

    DEFAULT_POST_OPTIONS.body = JSON.stringify(GET_CONTACT_DETAILS_REQUEST);

    return fetch(apiConstant(SERVER_API_ADDRESS), DEFAULT_POST_OPTIONS)
        .then(promise => {
            return promise.json();
        })
        .then(result => store.dispatch({
            result, type: RCV_CONTACT_DETAILS
        }))
        .catch(() => store.dispatch({
            type: ERR_CONTACT_DETAILS
        }));
};

export const toggleContactOffice = (id) => {
    store.dispatch({ id, type: TOGGLE_CONTACT_OFFICE });
};
