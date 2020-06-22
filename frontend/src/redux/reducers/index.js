import { combineReducers } from 'redux';
import {
    headerComponent,
    handlerComponent,
    menuComponent
} from './header';
import {
    footerComponent,
    sitemapComponent,
    copyrightComponent
} from './footer';

const combinedReducers = combineReducers({
    headerComponent,
    handlerComponent,
    menuComponent,
    footerComponent,
    sitemapComponent,
    copyrightComponent
});

export default combinedReducers;
