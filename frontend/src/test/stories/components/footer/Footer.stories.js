import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../../components/footer/Footer';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const FooterComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Footer />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Footer',
    component: FooterComponent
}
