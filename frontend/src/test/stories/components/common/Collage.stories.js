import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Collage from '../../../../components/common/Collage';
import store from '../../../../redux/store';

const collage = [];
collage.push({
    id: 0,
    src: '../multimedia/image/slide_b.png',
    alt: 'example alt resource',
    title: 'example title resource'
});
collage.push({
    id: 1,
    src: '../multimedia/image/high_a.png',
    alt: 'example alt resource',
    title: 'example title resource'
});
collage.push({
    id: 2,
    src: '../multimedia/image/high_c.png',
    alt: 'example alt resource',
    title: 'example title resource'
});

export const CollageComponent = () =>
<Provider store={store}>
    <BrowserRouter>
        <Collage collection={collage} />
    </BrowserRouter>
</Provider>;

export default {
    title: 'Common - 4',
    component: CollageComponent,
    decorators: [(Story) => <div class='storybook_container'><Story/></div>]
}
