import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Collage from '../../../../components/common/Collage';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const collage = [];
const media = {
    id: 0,
    src: 'invalid link',
    alt: 'example alt resource',
    title: 'example title resource'
};
collage.push(media);

export const CollageComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Collage collection={collage} />
    </BrowserRouter>
</Provider>;

export default {
    title: '/Common',
    component: CollageComponent
}
