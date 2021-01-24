import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Sitemap from '../../../../components/footer/Sitemap';
import store from '../../../../redux/store';

export const SitemapComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Sitemap />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Footer',
    component: SitemapComponent,
    decorators: [(Story) => <div class='storybook'><Story/></div>]
}
