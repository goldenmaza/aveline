import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../../components/home/Home';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
// ...

export const HomeComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Home />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Home',
    component: HomeComponent
}
