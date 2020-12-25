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
    HELP_SECTION_STORE
} from '../constants/form';
import {
    DEFAULT_NODEMAILER_OPTIONS
} from './constants/options';

export const processForm = (data) => (dispatch) => {
    dispatch({ type: REQ_FORM_TRANSMIT });

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
        .then(res => dispatch({
            res, type: RCV_FORM_TRANSMIT
        }))
        .catch(err => dispatch({
            err, type: ERR_FORM_TRANSMIT
        }));
}

export const toggleHelpSection = () => (dispatch) => {
    dispatch({ type: TOGGLE_HELP_SECTION });
};

export const enableSubmitButton = () => (dispatch) => {
    dispatch({ type: FORM_ENABLE_SUBMIT });
};

export const disableSubmitButton = () => (dispatch) => {
    dispatch({ type: FORM_DISABLE_SUBMIT });
};

export const validationChange = (id, value) => (dispatch) => {
    dispatch({ id, value, type: FORM_VALIDATION_CHANGE });
};

export const validationReset = () => (dispatch) => {
    dispatch({ type: FORM_VALIDATION_RESET });
};

export const storeHelpSection = (section) => (dispatch) => {
    dispatch({ section, type: HELP_SECTION_STORE });
};
