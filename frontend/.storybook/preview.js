import '../src/scss/index.scss';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: [
//                "Header", ["HeaderComponent", "HandlerComponent", "MenuComponent"],
//                "Form", ["FormComponent", "HelpSectionComponent"],
//                "Footer", ["FooterComponent", "SitemapComponent", "CopyrightComponent"]
                "Common - 0", "Common - 1", "Common - 2", "Common - 3", "Common - 4",
                "Header - 0", "Header - 1", "Header - 2",
                "Home - 0", "Home - 1", "Home - 2",
                "Contact - 0",
                "Form - 0", "Form - 1",
                "Footer - 0", "Footer - 1", "Footer - 2"
            ]
        }
    }
}
