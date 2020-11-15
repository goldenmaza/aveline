import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Navigation from '../../../../components/contact/Navigation';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Navigation component', () => {
    it('is rendering a default Navigation component', () => {
        const component = shallow(<Navigation />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Navigation component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation address={'invalid'} />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Navigation component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation address={'invalid'} />
                </BrowserRouter>
            </Provider>
        );

        const iframeNode = container.querySelector('iframe');
        expect(iframeNode).not.toBeNull();
        const iframeSrc = iframeNode.getAttribute('src');
        expect(iframeSrc).not.toBeNull();
        expect(iframeSrc).toContain('https://maps.google.com/maps?q=');// TODO: Regex validation???
    });
});
