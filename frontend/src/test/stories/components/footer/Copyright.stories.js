import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Copyright from '../../../../components/footer/Copyright';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateCreated = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_YEAR;
const stateLevel = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LABEL;
const stateName = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_NAME;
const stateLink = process.env.REACT_APP_DOC_FOOTER_BY_LINK;
const stateBy = process.env.REACT_APP_DOC_FOOTER_BY_LABEL;

export const CopyrightComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Copyright />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Footer',
    component: CopyrightComponent
}
