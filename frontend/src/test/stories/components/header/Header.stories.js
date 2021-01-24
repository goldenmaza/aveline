import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../../../components/header/Header';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateLevel = process.env.REACT_APP_DOC_HEADER_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_HEADER_LABEL;

export const HeaderComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Header',
    component: HeaderComponent
}
