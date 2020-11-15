import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Slideshow from '../../../../components/home/Slideshow';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Slideshow component', () => {
    const stateLevel = process.env.REACT_APP_DOC_HIGHLIGHTS_LEVEL;
    const stateLabel = process.env.REACT_APP_DOC_HIGHLIGHTS_LABEL;

    it('is rendering a default Slideshow component', () => {
        const component = shallow(<Slideshow />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Slideshow component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Slideshow />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Slideshow component with redux state', () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Slideshow />
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

//        const aNode = parentNode.querySelector('a');
//        expect(aNode).not.toBeNull();
//        const collageHref = aNode.getAttribute('href');
//        expect(collageHref).not.toBeNull();
//        expect(collageHref).toBe(media.src);
//        const collageRel = aNode.getAttribute('rel');
//        expect(collageRel).not.toBeNull();
//        expect(collageRel).toBe('noopener noreferrer');// TODO: Refactor to env???

//        const imgNode = aNode.querySelector('img');
//        expect(imgNode).not.toBeNull();
//        const imageAlt = imgNode.getAttribute('alt');
//        expect(imageAlt).not.toBeNull();
//        expect(imageAlt).toBe(media.alt);
//        const imageSrc = imgNode.getAttribute('src');
//        expect(imageSrc).not.toBeNull();
//        expect(imageSrc).toBe(media.src);
//        const imageTitle = imgNode.getAttribute('title');
//        expect(imageTitle).not.toBeNull();
//        expect(imageTitle).toBe(media.title);

        // Nothing more to compare unless loading data from API...
    });
});
