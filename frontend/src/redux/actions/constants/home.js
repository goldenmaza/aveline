export const GET_RESOURCES_REQUEST = {
    query: `
        query {
            collage (hidden: false, slideshow: true) {
                id
                src
                alt
                title
            }
        }
    `
};

export const GET_HIGHLIGHTS_REQUEST = {
    query: `
        query {
            pages (hidden: false, box: true, main: true) {
                id
                route
                label
                title
                paragraphs (hidden: false, box: true) {
                    id
                    heading
                    text
                    collage (hidden: false, box: true) {
                        id
                        src
                        alt
                        title
                    }
                }
                collage (hidden: false, box: true) {
                    id
                    src
                    alt
                    title
                }
            }
        }
    `
};
