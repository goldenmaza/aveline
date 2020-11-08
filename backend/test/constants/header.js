export const GET_HEADER_LOGO_REQUEST = {
    query: `
        query {
            collage (hidden: false, logo: true) {
                src
                alt
                title
            }
        }
    `
};

export const GET_HEADER_MENU_REQUEST = {
    query: `
        query {
            pages (hidden: false, main: true) {
                id
                label
                title
            }
        }
    `
};
