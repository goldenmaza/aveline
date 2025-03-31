export const formState = {
    input: { // Refactor to a central utility...
        forenameInput: null,
        surnameInput: null,
        addressInput: null,
        phoneInput: null,
        emailInput: null,
        purposeInput: null,
        messageInput: null
    },
    strong: { // Refactor to a central utility...
        forenameInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_FORENAME,
        surnameInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_SURNAME,
        addressInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_ADDRESS,
        phoneInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_PHONE,
        emailInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_EMAIL,
        purposeInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_PURPOSE,
        messageInput: import.meta.env.VITE_APP_DOC_FORM_STRONG_MESSAGE,
        clearButton: import.meta.env.VITE_APP_DOC_FORM_STRONG_CLEAR,
        helpButton: import.meta.env.VITE_APP_DOC_FORM_STRONG_HELP,
        submitButton: import.meta.env.VITE_APP_DOC_FORM_STRONG_SUBMIT
    },
    regex: { // Refactor to a central utility...
        forenameInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_FORENAME + '$'),
        surnameInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_SURNAME + '$'),
        addressInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_ADDRESS + '$'),
        phoneInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_PHONE + '$'),
        emailInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL + '$'),
        purposeInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_PURPOSE + '$'),
        messageInput: RegExp('^' + import.meta.env.VITE_APP_DOC_FORM_REGEX_MESSAGE + '$')
    },
    maxLength: { // Refactor to a central utility...
        forenameInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_FORENAME_MAX),
        surnameInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_SURNAME_MAX),
        addressInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_ADDRESS_MAX),
        phoneInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_PHONE_MAX),
        emailInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_USERNAME_MAX)
                    + parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_DOMAIN_MAX)
                    + parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_EMAIL_SUFFIX_MAX),
        purposeInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_PURPOSE_MAX),
        messageInput: parseInt(import.meta.env.VITE_APP_DOC_FORM_REGEX_MESSAGE_MAX)
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
    title: { // Refactor to a central utility...
        forenameInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_FORENAME,
        surnameInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_SURNAME,
        addressInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_ADDRESS,
        phoneInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_PHONE,
        emailInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_EMAIL,
        purposeInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_PURPOSE,
        messageInput: import.meta.env.VITE_APP_DOC_FORM_TITLE_MESSAGE,
        clearButton: import.meta.env.VITE_APP_DOC_FORM_TITLE_CLEAR,
        helpButton: import.meta.env.VITE_APP_DOC_FORM_TITLE_HELP,
        submitButton: import.meta.env.VITE_APP_DOC_FORM_TITLE_SUBMIT
    },
    placeholder: { // Refactor to a central utility...
        forenameInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_FORENAME,
        surnameInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_SURNAME,
        addressInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_ADDRESS,
        phoneInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_PHONE,
        emailInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_EMAIL,
        purposeInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_PURPOSE,
        messageInput: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_MESSAGE,
        clearButton: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_CLEAR,
        helpButton: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_HELP,
        submitButton: import.meta.env.VITE_APP_DOC_FORM_PLACEHOLDER_SUBMIT
    },
    validation: { // Refactor to a central utility...
        forenameInput: '?',
        surnameInput: '?',
        addressInput: '?',
        phoneInput: '?',
        emailInput: '?',
        purposeInput: '?',
        messageInput: '?'
    },
    displayHelp: false,
    submitDisabled: true,
    level: import.meta.env.VITE_APP_DOC_FORM_CONTACT_LEVEL,
    label: import.meta.env.VITE_APP_DOC_FORM_CONTACT_LABEL
};

export const helpSectionState = {
    helpMapping: JSON.parse(import.meta.env.VITE_APP_DOC_FORM_REGEX_HELP_MAPPING),
    rangeMapping: JSON.parse(import.meta.env.VITE_APP_DOC_FORM_REGEX_RANGE_MAPPING),
    symbolMapping: JSON.parse(import.meta.env.VITE_APP_DOC_FORM_REGEX_SYMBOLS_MAPPING),
    helpSection: null,
    level: import.meta.env.VITE_APP_DOC_HELP_SECTION_LEVEL,
    label: import.meta.env.VITE_APP_DOC_HELP_SECTION_LABEL
};

export const REQ_FORM_TRANSMIT = 'REQ_FORM_TRANSMIT';
export const RCV_FORM_TRANSMIT = 'RCV_FORM_TRANSMIT';
export const ERR_FORM_TRANSMIT = 'ERR_FORM_TRANSMIT';
export const TOGGLE_HELP_SECTION = 'TOGGLE_HELP_SECTION';
export const FORM_ENABLE_SUBMIT = 'FORM_ENABLE_SUBMIT';
export const FORM_DISABLE_SUBMIT = 'FORM_DISABLE_SUBMIT';
export const FORM_VALIDATION_CHANGE = 'FORM_VALIDATION_CHANGE';
export const FORM_VALIDATION_RESET = 'FORM_VALIDATION_RESET';
export const HELP_SECTION_CLEAR = 'HELP_SECTION_CLEAR';
export const HELP_SECTION_STORE = 'HELP_SECTION_STORE';
