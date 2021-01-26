import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import store from '../../../../redux/store';

export const FormComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Form />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Form - 0',
    component: FormComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
