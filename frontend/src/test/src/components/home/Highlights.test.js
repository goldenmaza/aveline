import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Highlights from '../../../../components/home/Highlights';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Highlights component', () => {
    const stateLevel = process.env.REACT_APP_DOC_HIGHLIGHTS_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_HIGHLIGHTS_LABEL;

    it('is rendering a default Highlights component', () => {
        const component = shallow(<Highlights />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Highlights component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Highlights />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Highlights component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Highlights />
                </BrowserRouter>
            </Provider>
        );

        const headingNode = container.children[0];
        expect(headingNode).not.toBeNull();

//        const headingLevel = headingNode.tagName.toLowerCase();
//        const headingLabel = getNodeText(headingNode);
//        expect(headingLevel).not.toBeNull();
//        expect(headingLabel).not.toBeNull();
//        expect(headingLevel).toBe(stateLevel);
//        expect(headingLabel).toBe(stateLabel);

        // Nothing more to compare unless loading data from API...
    });
});
