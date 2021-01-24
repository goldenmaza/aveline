import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Selector from '../../../../components/common/Selector';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateLevel = process.env.REACT_APP_DOC_SELECTOR_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_SELECTOR_LABEL;

export const SelectorComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Selector component={'invalid'} route={'invalid'} />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Common',
    component: SelectorComponent
}
