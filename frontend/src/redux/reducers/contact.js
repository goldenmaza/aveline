import { AnyAction } from 'redux';
import {
    contactState,
    navigationState,
    REQ_CONTACT_DETAILS,
    RCV_CONTACT_DETAILS,
    ERR_CONTACT_DETAILS,
    TOGGLE_CONTACT_OFFICE
} from '../constants/contact';

export const contactComponent = (state = contactState, action: AnyAction) => {
    switch (action.type) {
        case TOGGLE_CONTACT_OFFICE:
            return {
                ...state,
                target: action.id
            };
        case REQ_CONTACT_DETAILS:
            return {
                ...state,
                loading: true,
                office: null,
                contact: null,
                social: null,
                multimedia: null,
                target: null
            };
        case RCV_CONTACT_DETAILS:
            return {
                ...state,
                loading: false,
                office: action.result.data.office,
                contact: action.result.data.contact,
                social: action.result.data.social,
                multimedia: action.result.data.multimedia
            };
        case ERR_CONTACT_DETAILS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const navigationComponent = (state = navigationState, action: AnyAction) => {
    switch (action.type) {
        default:
            return state;
    }
};
