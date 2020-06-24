import { Dispatch } from 'redux';
import {
    REQ_CONTACT_DETAILS,
    RCV_CONTACT_DETAILS,
    ERR_CONTACT_DETAILS,
    TOGGLE_CONTACT_OFFICE
} from '../constants/contact';

export const getContactDetails = () => (dispatch: Dispatch) => {
    dispatch({ type: REQ_CONTACT_DETAILS });

    //TODO: Refactor to a file with request constants...
    const requestBody = {
        query: `
            query {
                office (hidden: false) {
                    id
                    main
                    region
                    locale
                    label
                    orgnr
                }
                contact (hidden: false) {
                    id
                    office
                    main
                    title
                    forename
                    surname
                    street
                    postal
                    country
                    phone
                    email
                }
                social (hidden: false) {
                    id
                    url
                    media
                    label
                }
                multimedia (hidden: false) {
                    id
                    contact
                    office
                    box
                    src
                    alt
                    title
                }
            }
        `
    };
    //TODO: Refactor to a file with options constants...
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    fetch(process.env.REACT_APP_SERVER_API_ADDRESS, options)
        .then(promise => {
            return promise.json();
        })
        .then(result => dispatch({
            result, type: RCV_CONTACT_DETAILS
        }))
        .catch(() => dispatch({
            type: ERR_CONTACT_DETAILS
        }));
};

export const toggleContactOffice = (id: Number) => (dispatch: Dispatch) => {
    dispatch({ id, type: TOGGLE_CONTACT_OFFICE });
};
