import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Slide from '../../../../components/home/Slide';
import store from '../../../../redux/store';

export const SlideComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Slide />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: SlideComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
