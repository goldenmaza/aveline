import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, getNodeText, cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {} from '@testing-library/jest-dom';

import Heading from '../../../../components/common/Heading';

configure({adapter: new Adapter()});

afterEach(cleanup);

describe('validates the Heading component', () => {
    const propLevel = 'h1';
    const propLabel = 'Example';

    it('is rendering a default Heading component', () => {
        const component = shallow(<Heading />);
        expect(component).not.toBeNull();
    });

    it('is comparing snapshot of a Heading component', () => {
        const { asFragment } = render(<Heading hidden={false} level={propLevel} label={propLabel} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('is rendering a Heading component with props', () => {
        const { container } = render(<Heading hidden={false} level={propLevel} label={propLabel} />);

        const headingNode = container.children[0];
        expect(headingNode).not.toBeNull();

        const headingLevel = headingNode.tagName.toLowerCase();
        const headingLabel = getNodeText(headingNode);
        expect(headingLevel).not.toBeNull();
        expect(headingLabel).not.toBeNull();
        expect(headingLevel).toBe(propLevel);
        expect(headingLabel).toBe(propLabel);
    });
});
