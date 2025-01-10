export const GET_FOOTER_LOGO_REQUEST = {
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

export const GET_FOOTER_SITEMAP_REQUEST = {
    query: `
        query {
            pages (hidden: false) {
                id
                main
                sitemap
                label
                title
                paragraphs (hidden: false) {
                    id
                    page
                    heading
                }
            }
        }
    `
};
