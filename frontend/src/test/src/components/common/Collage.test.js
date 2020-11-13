import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, fireEvent, waitForDomChange, cleanup } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Collage from '../../../../components/common/Collage';
import store from '../../../../redux/store';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Collage component', () => {
    const collage = [];
    const media = {
        id: 0,
        src: 'invalid link',
        alt: 'example alt resource',
        title: 'example title resource'
    };
    collage.push(media);

    it('is rendering a default Collage component', () => {
        const component = shallow(<Collage />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Collage component', () => {
        const { asFragment } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Collage />
                </BrowserRouter>
            </Provider>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Collage component with redux state', () => {
        const { debug, container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Collage collection={collage} />
                </BrowserRouter>
            </Provider>
        );

        const parentNode = container.children[0];
        expect(parentNode).not.toBeNull();

        const aNode = parentNode.querySelector('a');
        expect(aNode).not.toBeNull();
        const collageHref = aNode.getAttribute('href');
        expect(collageHref).not.toBeNull();
        expect(collageHref).toBe(media.src);
        const collageRel = aNode.getAttribute('rel');
        expect(collageRel).not.toBeNull();
        expect(collageRel).toBe('noopener noreferrer');// TODO: Refactor to env???

        const imgNode = aNode.querySelector('img');
        expect(imgNode).not.toBeNull();
        const imageAlt = imgNode.getAttribute('alt');
        expect(imageAlt).not.toBeNull();
        expect(imageAlt).toBe(media.alt);
        const imageSrc = imgNode.getAttribute('src');
        expect(imageSrc).not.toBeNull();
        expect(imageSrc).toBe(media.src);
        const imageTitle = imgNode.getAttribute('title');
        expect(imageTitle).not.toBeNull();
        expect(imageTitle).toBe(media.title);

        const childNode = aNode.querySelector('div');
        expect(childNode).not.toBeNull();
        const spanNode = childNode.querySelector('span');
        expect(spanNode).not.toBeNull();
        const actionLabel = getNodeText(spanNode);
        expect(actionLabel).not.toBeNull();
    });
});
