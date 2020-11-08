export const GET_PAGE_CONTENT_REQUEST = {
    query: `
        query {
            pages (hidden: false) {
                id
                route
                paragraphs (hidden: false) {
                    id
                    heading
                    text
                    collage (hidden: false) {
                        id
                        src
                        alt
                        title
                    }
                    subparagraphs (hidden: false) {
                        id
                        heading
                        text
                        collage (hidden: false) {
                            id
                            src
                            alt
                            title
                        }
                        subsubparagraphs (hidden: false) {
                            id
                            heading
                            text
                            collage (hidden: false) {
                                id
                                src
                                alt
                                title
                            }
                        }
                    }
                }
            }
        }
    `
};
