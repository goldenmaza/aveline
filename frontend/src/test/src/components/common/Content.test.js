import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Content from '../../../../components/common/Content';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Content component', () => {
    const stateLevel = process.env.REACT_APP_DOC_CONTENT_LEVEL;

    it('is rendering a default Content component', () => {
        const component = shallow(<Content />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Content component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Content />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Content component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Content />
                </BrowserRouter>
            </Provider>
        );
        // Nothing to compare unless loading data from API...
//        console.log(container);
//        debug();
    });
});
