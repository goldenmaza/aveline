import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
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
