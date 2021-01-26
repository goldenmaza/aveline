import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Copyright from '../../../../components/footer/Copyright';
import store from '../../../../redux/store';

export const CopyrightComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Copyright />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Footer - 2',
    component: CopyrightComponent,
    decorators: [(Story) => <div class='storybook_container'><footer><footer><Story/></footer></footer></div>]
}
