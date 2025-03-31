export const contactState = {
    loading: true,
    offices: null,
    officeIdentifier: null,
    officeLevel: import.meta.env.VITE_APP_DOC_FORM_OFFICE_LEVEL,
    officeLabel: import.meta.env.VITE_APP_DOC_FORM_OFFICE_LABEL,
    employeeLevel: import.meta.env.VITE_APP_DOC_FORM_EMPLOYEE_LEVEL,
    employeeLabel: import.meta.env.VITE_APP_DOC_FORM_EMPLOYEE_LABEL,
    level: import.meta.env.VITE_APP_DOC_FORM_CONTACT_TREE_LEVEL,
    label: import.meta.env.VITE_APP_DOC_FORM_CONTACT_TREE_LABEL
};

export const navigationState = {
};

export const REQ_CONTACT_DETAILS = 'REQ_CONTACT_DETAILS';
export const RCV_CONTACT_DETAILS = 'RCV_CONTACT_DETAILS';
export const ERR_CONTACT_DETAILS = 'ERR_CONTACT_DETAILS';
export const TOGGLE_CONTACT_OFFICE = 'TOGGLE_CONTACT_OFFICE';
