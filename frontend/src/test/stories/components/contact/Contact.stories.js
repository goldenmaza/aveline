import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../../../components/contact/Contact';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const ContactComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Contact />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Contact',
    component: ContactComponent
}
