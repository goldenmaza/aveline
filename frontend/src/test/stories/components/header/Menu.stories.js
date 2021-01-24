import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../../../../components/header/Menu';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const MenuComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Menu />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Header',
    component: MenuComponent
}
