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
    title: 'Home - 1',
    component: SlideshowComponent,
    decorators: [(Story) => <div class='storybook_container'><main class='home'><Story/></main></div>]
}
