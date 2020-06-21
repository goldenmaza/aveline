import { combineReducers } from 'redux';
import {
    headerComponent,
    handlerComponent,
    menuComponent
} from './header';

const combinedReducers = combineReducers({
    headerComponent,
    handlerComponent,
    menuComponent
});

export default combinedReducers;
//,
//    slideshowReducer,
//    highlightsReducer,
//    contentReducer,
//    contactReducer,
//    formReducer,
//    socialReducer,
//    sitemapReducer
