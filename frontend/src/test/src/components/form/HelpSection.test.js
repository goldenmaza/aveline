import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import HelpSection from '../../../../components/form/HelpSection';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the HelpSection component', () => {
    it('is rendering a default HelpSection component', () => {
        const component = shallow(<HelpSection />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a HelpSection component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <HelpSection />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
