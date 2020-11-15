import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Handler from '../../../../components/header/Handler';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Handler component', () => {
    it('is rendering a default Handler component', () => {
        const component = shallow(<Handler />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Handler component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Handler />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Handler component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Handler />
                </BrowserRouter>
            </Provider>
        );
        //TODO: onClick testing & loading data from API...
    });
});
