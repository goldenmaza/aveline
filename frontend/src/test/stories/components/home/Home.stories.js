import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../../components/home/Home';
import store from '../../../../redux/store';

export const HomeComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Home />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Home - 0',
    component: HomeComponent,
    decorators: [(Story) => <div class='storybook_container'><main class='home'><Story/></main></div>]
}
