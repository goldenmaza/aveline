import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Slideshow from '../../../../components/home/Slideshow';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateLevel = process.env.REACT_APP_DOC_SLIDESHOW_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_SLIDESHOW_LABEL;

export const SlideshowComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Slideshow />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: SlideshowComponent
}
