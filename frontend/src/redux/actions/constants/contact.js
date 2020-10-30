export const GET_CONTACT_DETAILS_REQUEST = {
    query: `
        query {
            offices (hidden: false) {
                id
                main
                region
                locale
                label
                orgnr
                thumbnail (hidden: false, box: true) {
                    id
                    office
                    box
                    src
                    alt
                    title
                }
                employees (hidden: false) {
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
                    portraits (hidden: false, box: true) {
                        id
                        contact
                        office
                        box
                        src
                        alt
                        title
                    }
                    profiles (hidden: false) {
                        id
                        url
                        media
                        label
                    }
                }
                socials (hidden: false) {
                    id
                    url
                    media
                    label
                }
            }
        }
    `
};
