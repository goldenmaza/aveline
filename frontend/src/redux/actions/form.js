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

export const processForm = (data) => (dispatch) => {
    dispatch({ type: REQ_FORM_TRANSMIT });

    const payload = {
        forename: data.forenameInput,
        surname: data.surnameInput,
        address: data.addressInput,
        phone: data.phoneInput,
        email: data.emailInput,
        purpose: data.purposeInput,
        message: data.messageInput
    };

    const options = {
        url: process.env.REACT_APP_SERVER_MAIL_ADDRESS,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            'From': payload.forename + ' ' + payload.surname + '<' + payload.email + '>',
            'Return-Path': payload.email,
            'Sender': payload.email,
            'Reply-To': payload.email
        },
        method: 'POST',
        data: payload
    };

    axios(options)
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
