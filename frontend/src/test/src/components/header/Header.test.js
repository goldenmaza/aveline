import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Header from '../../../../components/header/header';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Header component', () => {
    const stateLevel = process.env.REACT_APP_DOC_HEADER_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_HEADER_LABEL;

    it('is rendering a default Header component', () => {
        const component = shallow(<Header />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Header component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Header component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </Provider>
        );

        const parentNode = container.querySelector('header');
        expect(parentNode).not.toBeNull();

        const navChild = parentNode.querySelector('nav');
        expect(navChild).not.toBeNull();

        const headingSubChild = navChild.children[0];
        const handlerSubChild = navChild.children[1];
        expect(headingSubChild).not.toBeNull();
        expect(handlerSubChild).not.toBeNull();

        const headingTag = headingSubChild.tagName.toLowerCase();
        const headingLabel = getNodeText(headingSubChild);//.innerHTML;
        expect(headingTag).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingTag).toBe(stateLevel);
        expect(headingLabel).toBe(stateLabel);
    });
});
