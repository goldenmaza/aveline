import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const FormComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Form />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Form',
    component: FormComponent
}
