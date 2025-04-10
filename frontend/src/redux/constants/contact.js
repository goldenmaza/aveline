import { contactConstant } from '../../utils/importConstantsUtil';
import {
    FORM_OFFICE_LEVEL,
    FORM_OFFICE_LABEL,
    FORM_EMPLOYEE_LEVEL,
    FORM_EMPLOYEE_LABEL,
    FORM_CONTACT_TREE_LEVEL,
    FORM_CONTACT_TREE_LABEL
} from '../../utils/constants/contactKeys';

export const contactState = {
    loading: true,
    offices: null,
    officeIdentifier: null,
    officeLevel: contactConstant(FORM_OFFICE_LEVEL),
    officeLabel: contactConstant(FORM_OFFICE_LABEL),
    employeeLevel: contactConstant(FORM_EMPLOYEE_LEVEL),
    employeeLabel: contactConstant(FORM_EMPLOYEE_LABEL),
    level: contactConstant(FORM_CONTACT_TREE_LEVEL),
    label: contactConstant(FORM_CONTACT_TREE_LABEL)
};

export const navigationState = {
};

export const REQ_CONTACT_DETAILS = 'REQ_CONTACT_DETAILS';
export const RCV_CONTACT_DETAILS = 'RCV_CONTACT_DETAILS';
export const ERR_CONTACT_DETAILS = 'ERR_CONTACT_DETAILS';
export const TOGGLE_CONTACT_OFFICE = 'TOGGLE_CONTACT_OFFICE';
