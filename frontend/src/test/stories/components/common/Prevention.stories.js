import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Prevention from '../../../../components/common/Prevention';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateLevel = process.env.REACT_APP_DOC_E404_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_E404_LABEL;

export const PreventionComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Prevention />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Common',
    component: PreventionComponent
}
