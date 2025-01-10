import {
    formState,
    helpSectionState,
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

export const formComponent = (state = formState, action) => {
    switch (action.type) {
        case REQ_FORM_TRANSMIT:
            return {
                ...state
            };
        case RCV_FORM_TRANSMIT:
            return {
                ...state
            };
        case ERR_FORM_TRANSMIT:
            return {
                ...state
            };
        case TOGGLE_HELP_SECTION:
            return {
                ...state,
                displayHelp: !state.displayHelp
            };
        case FORM_ENABLE_SUBMIT:
            return {
                ...state,
                submitDisabled: false
            };
        case FORM_DISABLE_SUBMIT:
            return {
                ...state,
                submitDisabled: true
            };
        case FORM_VALIDATION_CHANGE:
            const id = action.id;
            const value = action.value;
            return {
                ...state,
                input: {
                    ...state.input,
                    [id]: value
                },
                validation: {
                    ...state.validation,
                    [id]: state.regex[id].test(value) ? '' : 'invalid'
                },
                remainingLength: {
                    ...state.remainingLength,
                    [id]: state.maxLength[id] - value.length
                }
            };
        case FORM_VALIDATION_RESET:
            return {
                ...state,
                input: { // Refactor to a central utility...
                    forenameInput: null,
                    surnameInput: null,
                    addressInput: null,
                    phoneInput: null,
                    emailInput: null,
                    purposeInput: null,
                    messageInput: null
                },
                remainingLength: { // Refactor to a central utility...
                    forenameInput: 0,
                    surnameInput: 0,
                    addressInput: 0,
                    phoneInput: 0,
                    emailInput: 0,
                    purposeInput: 0,
                    messageInput: 0
                },
                validation: { // Refactor to a central utility...
                    forenameInput: '?',
                    surnameInput: '?',
                    addressInput: '?',
                    phoneInput: '?',
                    emailInput: '?',
                    purposeInput: '?',
                    messageInput: '?'
                }
            };
        default:
            return state;
    }
};

export const helpSectionComponent = (state = helpSectionState, action) => {
    switch (action.type) {
        case HELP_SECTION_CLEAR:
            return {
                ...state,
                helpSection: null
            };
        case HELP_SECTION_STORE:
            return {
                ...state,
                helpSection: action.section
            };
        default:
            return state;
    }
};
