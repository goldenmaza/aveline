import { getHeaderLogo, getHeaderMenu } from './header';
import { getResources, getHighlights } from './home';
import { getContactDetails } from './contact';
import { getFooterLogo, getFooterSitemap } from './footer';

import { getPageContent } from './common';

export const siteGroupLoader = () => {
    getHeaderLogo();
    getHeaderMenu();
    getContactDetails();
    getFooterLogo();
    getFooterSitemap();
};

export const homeGroupLoader = () => {
    getResources();
    getHighlights();
};

export const formGroupLoader = () => {
};

export const contentGroupLoader = () => {
    getPageContent();
};
