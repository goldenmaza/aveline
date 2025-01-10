export const contactState = {
    loading: true,
    offices: null,
    officeIdentifier: null,
    officeLevel: process.env.REACT_APP_DOC_FORM_OFFICE_LEVEL,
    officeLabel: process.env.REACT_APP_DOC_FORM_OFFICE_LABEL,
    employeeLevel: process.env.REACT_APP_DOC_FORM_EMPLOYEE_LEVEL,
    employeeLabel: process.env.REACT_APP_DOC_FORM_EMPLOYEE_LABEL
};

export const navigationState = {
};

export const REQ_CONTACT_DETAILS = 'REQ_CONTACT_DETAILS';
export const RCV_CONTACT_DETAILS = 'RCV_CONTACT_DETAILS';
export const ERR_CONTACT_DETAILS = 'ERR_CONTACT_DETAILS';
export const TOGGLE_CONTACT_OFFICE = 'TOGGLE_CONTACT_OFFICE';
