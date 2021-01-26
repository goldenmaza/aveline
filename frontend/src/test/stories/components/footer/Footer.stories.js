import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../../../components/footer/Footer';
import store from '../../../../redux/store';

export const FooterComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Footer />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Footer - 0',
    component: FooterComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
