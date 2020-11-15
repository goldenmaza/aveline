import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Footer from '../../../../components/footer/Footer';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Footer component', () => {
    it('is rendering a default Footer component', () => {
        const component = shallow(<Footer />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Footer component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Footer component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            </Provider>
        );
        // Nothing to compare unless loading data from API...
//        console.log(container);
//        debug();
    });
});
