import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Handler from '../../../../components/header/Handler';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const HandlerComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Handler />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Header',
    component: HandlerComponent
}
