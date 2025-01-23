import axios from 'axios';
import {
    REQ_FORM_TRANSMIT,
    RCV_FORM_TRANSMIT,
    ERR_FORM_TRANSMIT,
    TOGGLE_HELP_SECTION,
    FORM_ENABLE_SUBMIT,
    FORM_DISABLE_SUBMIT,
    FORM_VALIDATION_CHANGE,
    FORM_VALIDATION_RESET,
    HELP_SECTION_CLEAR,
    HELP_SECTION_STORE
} from '../constants/form';
import {
    DEFAULT_NODEMAILER_OPTIONS
} from './constants/options';

import store from '../store';

export const processForm = (data) => {
    store.dispatch({ type: REQ_FORM_TRANSMIT });

    const payload = {
        forename: data.input.forenameInput,
        surname: data.input.surnameInput,
        address: data.input.addressInput,
        phone: data.input.phoneInput,
        email: data.input.emailInput,
        purpose: data.input.purposeInput,
        message: data.input.messageInput
    };

//    DEFAULT_NODEMAILER_OPTIONS.headers = {
//        'Content-Type': 'application/x-www-form-urlencoded',
//        'Accept': 'application/json'
//    };

    axios.post(process.env.REACT_APP_SERVER_MAIL_ADDRESS, payload)
        .then(res => store.dispatch({
            res, type: RCV_FORM_TRANSMIT
        }))
        .catch(err => store.dispatch({
            err, type: ERR_FORM_TRANSMIT
        }));
}

export const toggleHelpSection = () => {
    store.dispatch({ type: TOGGLE_HELP_SECTION });
};

export const enableSubmitButton = () => {
    store.dispatch({ type: FORM_ENABLE_SUBMIT });
};

export const disableSubmitButton = () => {
    store.dispatch({ type: FORM_DISABLE_SUBMIT });
};

export const validationChange = (id, value) => {
    store.dispatch({ id, value, type: FORM_VALIDATION_CHANGE });
};

export const validationReset = () => {
    store.dispatch({ type: FORM_VALIDATION_RESET });
};

export const clearHelpSection = (section) => {
    store.dispatch({ section, type: HELP_SECTION_CLEAR });
};

export const storeHelpSection = (section) => {
    store.dispatch({ section, type: HELP_SECTION_STORE });
};
