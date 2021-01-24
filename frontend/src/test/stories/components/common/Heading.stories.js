import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Heading from '../../../../components/common/Heading';
import store from '../../../../redux/store';

// TODO: Refactor to a central location for both component tests and storybook stories...
const propLevel = 'h1';
const propLabel = 'Example';

export const HeadingComponent = () => <Heading hidden={false} level={propLevel} label={propLabel} />;

export default {
    title: '/Common',
    component: HeadingComponent
}
