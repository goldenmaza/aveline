import { formConstant } from '../../utils/importConstantsUtil';
import {
    FORM_STRONG_FORENAME,
    FORM_STRONG_SURNAME,
    FORM_STRONG_ADDRESS,
    FORM_STRONG_PHONE,
    FORM_STRONG_EMAIL,
    FORM_STRONG_PURPOSE,
    FORM_STRONG_MESSAGE,
    FORM_STRONG_CLEAR,
    FORM_STRONG_HELP,
    FORM_STRONG_SUBMIT,
    FORM_REGEX_FORENAME,
    FORM_REGEX_SURNAME,
    FORM_REGEX_ADDRESS,
    FORM_REGEX_PHONE,
    FORM_REGEX_EMAIL,
    FORM_REGEX_PURPOSE,
    FORM_REGEX_MESSAGE,
    FORM_REGEX_FORENAME_MAX,
    FORM_REGEX_SURNAME_MAX,
    FORM_REGEX_ADDRESS_MAX,
    FORM_REGEX_PHONE_MAX,
    FORM_REGEX_EMAIL_USERNAME_MAX,
    FORM_REGEX_EMAIL_DOMAIN_MAX,
    FORM_REGEX_EMAIL_SUFFIX_MAX,
    FORM_REGEX_PURPOSE_MAX,
    FORM_REGEX_MESSAGE_MAX,
    FORM_TITLE_FORENAME,
    FORM_TITLE_SURNAME,
    FORM_TITLE_ADDRESS,
    FORM_TITLE_PHONE,
    FORM_TITLE_EMAIL,
    FORM_TITLE_PURPOSE,
    FORM_TITLE_MESSAGE,
    FORM_TITLE_CLEAR,
    FORM_TITLE_HELP,
    FORM_TITLE_SUBMIT,
    FORM_PLACEHOLDER_FORENAME,
    FORM_PLACEHOLDER_SURNAME,
    FORM_PLACEHOLDER_ADDRESS,
    FORM_PLACEHOLDER_PHONE,
    FORM_PLACEHOLDER_EMAIL,
    FORM_PLACEHOLDER_PURPOSE,
    FORM_PLACEHOLDER_MESSAGE,
    FORM_PLACEHOLDER_CLEAR,
    FORM_PLACEHOLDER_HELP,
    FORM_PLACEHOLDER_SUBMIT,
    FORM_CONTACT_LEVEL,
    FORM_CONTACT_LABEL,
    FORM_REGEX_HELP_MAPPING,
    FORM_REGEX_RANGE_MAPPING,
    FORM_REGEX_SYMBOLS_MAPPING,
    HELP_SECTION_LEVEL,
    HELP_SECTION_LABEL
} from '../../utils/constants/formKeys';

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
        forenameInput: formConstant(FORM_STRONG_FORENAME),
        surnameInput: formConstant(FORM_STRONG_SURNAME),
        addressInput: formConstant(FORM_STRONG_ADDRESS),
        phoneInput: formConstant(FORM_STRONG_PHONE),
        emailInput: formConstant(FORM_STRONG_EMAIL),
        purposeInput: formConstant(FORM_STRONG_PURPOSE),
        messageInput: formConstant(FORM_STRONG_MESSAGE),
        clearButton: formConstant(FORM_STRONG_CLEAR),
        helpButton: formConstant(FORM_STRONG_HELP),
        submitButton: formConstant(FORM_STRONG_SUBMIT)
    },
    regex: { // Refactor to a central utility...
        forenameInput: RegExp('^' + formConstant(FORM_REGEX_FORENAME) + '$'),
        surnameInput: RegExp('^' + formConstant(FORM_REGEX_SURNAME) + '$'),
        addressInput: RegExp('^' + formConstant(FORM_REGEX_ADDRESS) + '$'),
        phoneInput: RegExp('^' + formConstant(FORM_REGEX_PHONE) + '$'),
        emailInput: RegExp('^' + formConstant(FORM_REGEX_EMAIL) + '$'),
        purposeInput: RegExp('^' + formConstant(FORM_REGEX_PURPOSE) + '$'),
        messageInput: RegExp('^' + formConstant(FORM_REGEX_MESSAGE) + '$')
    },
    maxLength: { // Refactor to a central utility...
        forenameInput: parseInt(formConstant(FORM_REGEX_FORENAME_MAX)),
        surnameInput: parseInt(formConstant(FORM_REGEX_SURNAME_MAX)),
        addressInput: parseInt(formConstant(FORM_REGEX_ADDRESS_MAX)),
        phoneInput: parseInt(formConstant(FORM_REGEX_PHONE_MAX)),
        emailInput: parseInt(formConstant(FORM_REGEX_EMAIL_USERNAME_MAX))
                    + parseInt(formConstant(FORM_REGEX_EMAIL_DOMAIN_MAX))
                    + parseInt(formConstant(FORM_REGEX_EMAIL_SUFFIX_MAX)),
        purposeInput: parseInt(formConstant(FORM_REGEX_PURPOSE_MAX)),
        messageInput: parseInt(formConstant(FORM_REGEX_MESSAGE_MAX))
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
        forenameInput: formConstant(FORM_TITLE_FORENAME),
        surnameInput: formConstant(FORM_TITLE_SURNAME),
        addressInput: formConstant(FORM_TITLE_ADDRESS),
        phoneInput: formConstant(FORM_TITLE_PHONE),
        emailInput: formConstant(FORM_TITLE_EMAIL),
        purposeInput: formConstant(FORM_TITLE_PURPOSE),
        messageInput: formConstant(FORM_TITLE_MESSAGE),
        clearButton: formConstant(FORM_TITLE_CLEAR),
        helpButton: formConstant(FORM_TITLE_HELP),
        submitButton: formConstant(FORM_TITLE_SUBMIT)
    },
    placeholder: { // Refactor to a central utility...
        forenameInput: formConstant(FORM_PLACEHOLDER_FORENAME),
        surnameInput: formConstant(FORM_PLACEHOLDER_SURNAME),
        addressInput: formConstant(FORM_PLACEHOLDER_ADDRESS),
        phoneInput: formConstant(FORM_PLACEHOLDER_PHONE),
        emailInput: formConstant(FORM_PLACEHOLDER_EMAIL),
        purposeInput: formConstant(FORM_PLACEHOLDER_PURPOSE),
        messageInput: formConstant(FORM_PLACEHOLDER_MESSAGE),
        clearButton: formConstant(FORM_PLACEHOLDER_CLEAR),
        helpButton: formConstant(FORM_PLACEHOLDER_HELP),
        submitButton: formConstant(FORM_PLACEHOLDER_SUBMIT)
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
    level: formConstant(FORM_CONTACT_LEVEL),
    label: formConstant(FORM_CONTACT_LABEL)
};

export const helpSectionState = {
    helpMapping: JSON.parse(formConstant(FORM_REGEX_HELP_MAPPING)),
    rangeMapping: JSON.parse(formConstant(FORM_REGEX_RANGE_MAPPING)),
    symbolMapping: JSON.parse(formConstant(FORM_REGEX_SYMBOLS_MAPPING)),
    helpSection: null,
    level: formConstant(HELP_SECTION_LEVEL),
    label: formConstant(HELP_SECTION_LABEL)
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
