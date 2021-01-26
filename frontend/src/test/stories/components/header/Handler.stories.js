import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Handler from '../../../../components/header/Handler';
import store from '../../../../redux/store';

export const HandlerComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Handler />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Header - 1',
    component: HandlerComponent,
    decorators: [(Story) => <div class='storybook_container'><header><Story/></header></div>]
}
