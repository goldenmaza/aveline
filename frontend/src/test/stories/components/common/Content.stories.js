import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Content from '../../../../components/common/Content';
import store from '../../../../redux/store';

export const ContentComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Content route={'about'}/>
    </BrowserRouter>
</Provider>;

export default {
    title: 'Common - 2',
    component: ContentComponent,
    decorators: [(Story) => <div class='storybook_container'><main class='content'><Story/></main></div>]
}
