import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Selector from '../../../../components/common/Selector';
import store from '../../../../redux/store';

export const SelectorComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Selector component={'invalid'} route={'invalid'} />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Common - 0',
    component: SelectorComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
