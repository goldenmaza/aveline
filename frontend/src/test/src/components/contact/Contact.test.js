import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Contact from '../../../../components/contact/Contact';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Contact component', () => {
    it('is rendering a default Contact component', () => {
        const component = shallow(<Contact />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Contact component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Contact component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Contact />
                </BrowserRouter>
            </Provider>
        );
        //TODO: onClick testing & loading data from API...
    });
});
