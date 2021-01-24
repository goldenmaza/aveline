import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Highlights from '../../../../components/home/Highlights';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const stateLevel = process.env.REACT_APP_DOC_HIGHLIGHTS_LEVEL;
const stateLabel = process.env.REACT_APP_DOC_HIGHLIGHTS_LABEL;

export const HighlightsComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Highlights />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: HighlightsComponent
}
