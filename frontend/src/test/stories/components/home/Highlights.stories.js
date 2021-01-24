import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Highlights from '../../../../components/home/Highlights';
import store from '../../../../redux/store';

export const HighlightsComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Highlights />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: HighlightsComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
