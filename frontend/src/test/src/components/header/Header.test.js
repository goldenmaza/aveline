import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Header from '../../../../components/header/Header';
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

        const navNode = parentNode.querySelector('nav');
        expect(navNode).not.toBeNull();

        const headingNode = navNode.children[0];
        const handlerNode = navNode.children[1];
        expect(headingNode).not.toBeNull();
        expect(handlerNode).not.toBeNull();

        const headingLevel = headingNode.tagName.toLowerCase();
        const headingLabel = getNodeText(headingNode);
        expect(headingLevel).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingLevel).toBe(stateLevel);
        expect(headingLabel).toBe(stateLabel);

        // Handler component not part of this test...
    });
});
