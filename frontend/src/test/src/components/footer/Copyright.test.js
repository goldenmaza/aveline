import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Copyright from '../../../../components/footer/Copyright';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Copyright component', () => {
    const stateCreated = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_YEAR;
    const stateLevel = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_LABEL;
    const stateName = process.env.REACT_APP_DOC_FOOTER_COPYRIGHT_NAME;
    const stateLink = process.env.REACT_APP_DOC_FOOTER_BY_LINK;
    const stateBy = process.env.REACT_APP_DOC_FOOTER_BY_LABEL;

    it('is rendering a default Copyright component', () => {
        const component = shallow(<Copyright />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Copyright component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Copyright />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Copyright component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Copyright />
                </BrowserRouter>
            </Provider>
        );

        let aNode = null;

        const headingNode = container.children[0];
        expect(headingNode).not.toBeNull();
        const headingLevel = headingNode.tagName.toLowerCase();
        const headingLabel = getNodeText(headingNode);
        expect(headingLevel).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingLevel).toBe(stateLevel);
        expect(headingLabel).toBe(stateLabel);

        const copyrightNode = container.children[1];
        expect(copyrightNode).not.toBeNull();
        const strongNode = copyrightNode.querySelector('strong');
        expect(strongNode).not.toBeNull();
        aNode = strongNode.querySelector('a');
        expect(aNode).not.toBeNull();
        const copyrightYear = getNodeText(strongNode);
        const copyrightLabel = getNodeText(aNode);
        const copyrightHref = aNode.getAttribute('href');
        expect(copyrightYear).not.toBeNull();
        expect(copyrightYear).toContain(stateCreated);
        expect(copyrightLabel).not.toBeNull();
        expect(copyrightLabel).toBe(stateName);
        expect(copyrightHref).not.toBeNull();
        expect(copyrightHref).toBe('/');// TODO: Refactor to env???

        const byNode = container.children[2];
        expect(byNode).not.toBeNull();
        const spanNode = byNode.querySelector('span');
        expect(spanNode).not.toBeNull();
        aNode = spanNode.querySelector('a');
        expect(aNode).not.toBeNull();
        const byHref = aNode.getAttribute('href');
        expect(byHref).not.toBeNull();
        expect(byHref).toBe(stateLink);
        const byRel = aNode.getAttribute('rel');
        expect(byRel).not.toBeNull();
        expect(byRel).toBe('noopener noreferrer');// TODO: Refactor to env???
        const byLabel = getNodeText(aNode);
        expect(byLabel).not.toBeNull();
        expect(byLabel).toBe(stateBy);
    });
});
