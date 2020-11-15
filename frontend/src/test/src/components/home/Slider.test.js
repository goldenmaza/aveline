import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Slider from '../../../../components/home/Slider';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Slider component', () => {
    it('is rendering a default Slider component', () => {
        const component = shallow(<Slider />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Slider component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Slider sources{...[]} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Slider component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Slider sources{...[]} />
                </BrowserRouter>
            </Provider>
        );
        //TODO: Compare state with collage resource(s)...

        // The Slide component is not part of this test suite...
    });
});
