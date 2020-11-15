import React from 'react';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Home from '../../../../components/home/Home';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Home component', () => {
    it('is rendering a default Home component', () => {
        const component = shallow(<Home />);
        expect(component).not.toBeNull();
    });

    // The Slideshow, Highlights and Form components are not part of this test suite...
});
