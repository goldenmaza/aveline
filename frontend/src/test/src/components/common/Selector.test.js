import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Selector from '../../../../components/common/Selector';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Selector component', () => {
    const stateLevel = process.env.REACT_APP_DOC_SELECTOR_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_SELECTOR_LABEL;

    it('is rendering a default Selector component', () => {
        const component = shallow(<Selector />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Selector component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Selector component={'invalid'} route={'invalid'} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Selector component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Selector component={'invalid'} route={'invalid'} />
                </BrowserRouter>
            </Provider>
        );

        // The Header component is not part of this test...

        const headingNode = container.children[1].children[0];
        expect(headingNode).not.toBeNull();
        const headingLevel = headingNode.tagName.toLowerCase();
        const headingLabel = getNodeText(headingNode);
        expect(headingLevel).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingLevel).toBe(stateLevel);
        expect(headingLabel).toBe(stateLabel);

        // The Home, Form & Content components are not part of this test...

        // The Footer component is not part of this test...
    });
});
