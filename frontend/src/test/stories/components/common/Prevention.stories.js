import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Prevention from '../../../../components/common/Prevention';
import store from '../../../../redux/store';

export const PreventionComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Prevention />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Common - 1',
    component: PreventionComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
