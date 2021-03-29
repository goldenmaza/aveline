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
        forenameInput: process.env.REACT_APP_DOC_FORM_STRONG_FORENAME,
        surnameInput: process.env.REACT_APP_DOC_FORM_STRONG_SURNAME,
        addressInput: process.env.REACT_APP_DOC_FORM_STRONG_ADDRESS,
        phoneInput: process.env.REACT_APP_DOC_FORM_STRONG_PHONE,
        emailInput: process.env.REACT_APP_DOC_FORM_STRONG_EMAIL,
        purposeInput: process.env.REACT_APP_DOC_FORM_STRONG_PURPOSE,
        messageInput: process.env.REACT_APP_DOC_FORM_STRONG_MESSAGE,
        clearButton: process.env.REACT_APP_DOC_FORM_STRONG_CLEAR,
        helpButton: process.env.REACT_APP_DOC_FORM_STRONG_HELP,
        submitButton: process.env.REACT_APP_DOC_FORM_STRONG_SUBMIT
    },
    regex: { // Refactor to a central utility...
        forenameInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_FORENAME + '$'),
        surnameInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_SURNAME + '$'),
        addressInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_ADDRESS + '$'),
        phoneInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_PHONE + '$'),
        emailInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_EMAIL + '$'),
        purposeInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_PURPOSE + '$'),
        messageInput: RegExp('^' + process.env.REACT_APP_DOC_FORM_REGEX_MESSAGE + '$')
    },
    maxLength: { // Refactor to a central utility...
        forenameInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_FORENAME_MAX),
        surnameInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_SURNAME_MAX),
        addressInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_ADDRESS_MAX),
        phoneInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_PHONE_MAX),
        emailInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_USERNAME_MAX)
                    + parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_DOMAIN_MAX)
                    + parseInt(process.env.REACT_APP_DOC_FORM_REGEX_EMAIL_SUFFIX_MAX),
        purposeInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_PURPOSE_MAX),
        messageInput: parseInt(process.env.REACT_APP_DOC_FORM_REGEX_MESSAGE_MAX)
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
        forenameInput: process.env.REACT_APP_DOC_FORM_TITLE_FORENAME,
        surnameInput: process.env.REACT_APP_DOC_FORM_TITLE_SURNAME,
        addressInput: process.env.REACT_APP_DOC_FORM_TITLE_ADDRESS,
        phoneInput: process.env.REACT_APP_DOC_FORM_TITLE_PHONE,
        emailInput: process.env.REACT_APP_DOC_FORM_TITLE_EMAIL,
        purposeInput: process.env.REACT_APP_DOC_FORM_TITLE_PURPOSE,
        messageInput: process.env.REACT_APP_DOC_FORM_TITLE_MESSAGE,
        clearButton: process.env.REACT_APP_DOC_FORM_TITLE_CLEAR,
        helpButton: process.env.REACT_APP_DOC_FORM_TITLE_HELP,
        submitButton: process.env.REACT_APP_DOC_FORM_TITLE_SUBMIT
    },
    placeholder: { // Refactor to a central utility...
        forenameInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_FORENAME,
        surnameInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_SURNAME,
        addressInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_ADDRESS,
        phoneInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_PHONE,
        emailInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_EMAIL,
        purposeInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_PURPOSE,
        messageInput: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_MESSAGE,
        clearButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_CLEAR,
        helpButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_HELP,
        submitButton: process.env.REACT_APP_DOC_FORM_PLACEHOLDER_SUBMIT
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
    level: process.env.REACT_APP_DOC_FORM_LEVEL,
    label: process.env.REACT_APP_DOC_FORM_LABEL
};

export const helpSectionState = {
    helpMapping: JSON.parse(process.env.REACT_APP_DOC_FORM_REGEX_HELP_MAPPING),
    rangeMapping: JSON.parse(process.env.REACT_APP_DOC_FORM_REGEX_RANGE_MAPPING),
    symbolMapping: JSON.parse(process.env.REACT_APP_DOC_FORM_REGEX_SYMBOLS_MAPPING),
    helpSection: null,
    level: process.env.REACT_APP_DOC_HELP_SECTION_LEVEL,
    label: process.env.REACT_APP_DOC_HELP_SECTION_LABEL
};

export const REQ_FORM_TRANSMIT = 'REQ_FORM_TRANSMIT';
export const RCV_FORM_TRANSMIT = 'RCV_FORM_TRANSMIT';
export const ERR_FORM_TRANSMIT = 'ERR_FORM_TRANSMIT';
export const TOGGLE_HELP_SECTION = 'TOGGLE_HELP_SECTION';
export const FORM_ENABLE_SUBMIT = 'FORM_ENABLE_SUBMIT';
export const FORM_DISABLE_SUBMIT = 'FORM_DISABLE_SUBMIT';
export const FORM_VALIDATION_CHANGE = 'FORM_VALIDATION_CHANGE';
export const FORM_VALIDATION_RESET = 'FORM_VALIDATION_RESET';
export const HELP_SECTION_STORE = 'HELP_SECTION_STORE';
