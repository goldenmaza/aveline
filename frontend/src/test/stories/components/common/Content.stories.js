import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Content from '../../../../components/common/Content';
import store from '../../../../redux/store';

export const ContentComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Content />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Common',
    component: ContentComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
