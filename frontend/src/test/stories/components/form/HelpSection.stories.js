import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HelpSection from '../../../../components/form/HelpSection';
import store from '../../../../redux/store';

export const HelpSectionComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <HelpSection />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Form - 1',
    component: HelpSectionComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
