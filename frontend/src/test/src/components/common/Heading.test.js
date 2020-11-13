import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Heading from '../../../../components/common/Heading';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Heading component', () => {
    it('is rendering a default Heading component', () => {
        const component = shallow(<Heading />);
        expect(component).not.toBeNull();
    });
});
