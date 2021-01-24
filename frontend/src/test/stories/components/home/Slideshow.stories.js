import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Slideshow from '../../../../components/home/Slideshow';
import store from '../../../../redux/store';

export const SlideshowComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Slideshow />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: SlideshowComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
