import { combineReducers } from 'redux';
import {
    appComponent
} from './app';
import {
    headerComponent,
    handlerComponent,
    menuComponent
} from './header';
import {
    contentComponent,
    collageComponent,
    preventionComponent
} from './common';
import {
    homeComponent,
    slideshowComponent,
    sliderComponent,
    highlightsComponent
} from './home';
import {
    contactComponent,
    navigationComponent
} from './contact';
import {
    formComponent,
    helpSectionComponent
} from './form';
import {
    footerComponent,
    sitemapComponent,
    copyrightComponent
} from './footer';

const combinedReducers = combineReducers({
    // App reducers...
    appComponent,
    // Header reducers...
    headerComponent,
    handlerComponent,
    menuComponent,
    // Common reducers...
    contentComponent,
    collageComponent,
    preventionComponent,
    // Home reducers...
    homeComponent,
    slideshowComponent,
    sliderComponent,
    highlightsComponent,
    // Contact reducers...
    contactComponent,
    navigationComponent,
    // Form reducers...
    formComponent,
    helpSectionComponent,
    // Footer reducers...
    footerComponent,
    sitemapComponent,
    copyrightComponent
});

export default combinedReducers;
