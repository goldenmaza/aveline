import {
    contactState,
    navigationState,
    REQ_CONTACT_DETAILS,
    RCV_CONTACT_DETAILS,
    ERR_CONTACT_DETAILS,
    TOGGLE_CONTACT_OFFICE
} from '../constants/contact';

export const contactComponent = (state = contactState, action) => {
    switch (action.type) {
        case TOGGLE_CONTACT_OFFICE:
            return {
                ...state,
                officeIdentifier: action.id
            };
        case REQ_CONTACT_DETAILS:
            return {
                ...state,
                loading: true,
                offices: null,
                officeIdentifier: null
            };
        case RCV_CONTACT_DETAILS:
            return {
                ...state,
                loading: false,
                offices: action.result.data.offices
            };
        case ERR_CONTACT_DETAILS:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const navigationComponent = (state = navigationState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
