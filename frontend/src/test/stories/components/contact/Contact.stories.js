import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../../../components/contact/Contact';
import store from '../../../../redux/store';

export const ContactComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Contact route={'contact'} minimalContact={false} />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Contact - 0',
    component: ContactComponent,
    decorators: [(Story) => <div class='storybook_container'><main class='form'><Story/></main></div>]
}
