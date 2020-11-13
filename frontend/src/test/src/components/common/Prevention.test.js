import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Prevention from '../../../../components/common/Prevention';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Prevention component', () => {
    const stateLevel = process.env.REACT_APP_DOC_E404_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_E404_LABEL;

    it('is rendering a default Prevention component', () => {
        const component = shallow(<Prevention />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Prevention component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Prevention />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Prevention component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Prevention />
                </BrowserRouter>
            </Provider>
        );

        const parentNode = container.querySelector('section');
        expect(parentNode).not.toBeNull();

        const headingNode = parentNode.children[0];
        expect(headingNode).not.toBeNull();

        const headingLevel = headingNode.tagName.toLowerCase();
        const headingLabel = getNodeText(headingNode);
        expect(headingLevel).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingLevel).toBe(stateLevel);
        expect(headingLabel).toBe(stateLabel);
    });
});
