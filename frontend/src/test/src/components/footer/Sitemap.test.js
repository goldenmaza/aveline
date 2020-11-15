import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Sitemap from '../../../../components/footer/Sitemap';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Sitemap component', () => {
    it('is rendering a default Sitemap component', () => {
        const component = shallow(<Sitemap />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Sitemap component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sitemap />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Sitemap component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Sitemap />
                </BrowserRouter>
            </Provider>
        );
        //TODO: Loading data from API...
    });
});
