import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Slider from '../../../../components/home/Slider';
import store from '../../../../redux/store';

export const SliderComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Slider sources{...[]} />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: SliderComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
