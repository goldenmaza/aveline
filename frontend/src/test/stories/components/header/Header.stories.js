import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../../../components/header/Header';
import store from '../../../../redux/store';

export const HeaderComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Header />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Header - 0',
    component: HeaderComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
