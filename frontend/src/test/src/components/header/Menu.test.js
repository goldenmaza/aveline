import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Menu from '../../../../components/header/Menu';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Menu component', () => {
    it('is rendering a default Menu component', () => {
        const component = shallow(<Menu />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Menu component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Menu />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Menu component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Menu />
                </BrowserRouter>
            </Provider>
        );
        // Nothing to compare unless loading data from API...
//        console.log(container);
//        debug();
    });
});
