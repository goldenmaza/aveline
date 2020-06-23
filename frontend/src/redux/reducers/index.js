import { combineReducers } from 'redux';
import {
    headerComponent,
    handlerComponent,
    menuComponent
} from './header';
import {
    selectorComponent,
    contentComponent,
    collageComponent,
    preventionComponent
} from './common';
import {
    contactComponent,
    navigationComponent
} from './contact';
import {
    footerComponent,
    sitemapComponent,
    copyrightComponent
} from './footer';

const combinedReducers = combineReducers({
    headerComponent,
    handlerComponent,
    menuComponent,
    selectorComponent,
    contentComponent,
    collageComponent,
    preventionComponent,
    contactComponent,
    navigationComponent,
    footerComponent,
    sitemapComponent,
    copyrightComponent
});

export default combinedReducers;
